function parse_params (params) {
  let parts = params.split('&');
  let ret = {};

  parts.forEach(function (part) {
    let kv = part.split('=');
    if(kv.length == 2) {
      ret[kv[0]] = kv[1];
    }
  });

  return ret;
}

function parse_loader (loader_spec) {
  let parts = loader_spec.split('\?');

  if(parts.length > 1) {
    let params = {};

    let loader_name = parts.shift();
    let loader_params = parts.shift();
    loader_params = loader_params == null ? '' : loader_params;

    return {
      name: loader_name,
      params: parse_params(loader_params)
    };
  } else {
    return {
      name: loader_spec,
      params: {}
    };
  } 
}

export default {
  parse: function (hash) {
    let route = {
      file_type: null,
      file_path: null,
      file_loaders: []
    };

    // ensure hash is a string
    let parts = hash.split("!");
    if(parts.length > 0) {
      let file_name = parts.pop();
      route.file_path = file_name;
      route.file_type = file_name.split("\.").pop();
    }

    while(parts.length > 0) {
      let loader = parse_loader(parts.pop());
      route.file_loaders.push(loader);
    }

    return route;
  }
};