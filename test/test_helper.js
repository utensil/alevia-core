let test_helper = {
  require_source: function (path) {
    return require(__dirname + '/../src/');
  }
};

export default test_helper;