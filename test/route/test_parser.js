import test_helper from '../test_helper'

let parser = test_helper.require_source('route/parser');

describe('route.parser', function(){

  describe('the class', function () {
    it('should exits', function () {
      expect(parser).to.be.ok;
    })
  })

  describe('#parse()', function(){

    it('should parse "path/to/file.ext"', function () {
      let route = parser.parse("path/to/file.ext");
      expect(route.file_type).to.equal('ext');
      expect(route.file_path).to.equal('path/to/file.ext');
      let file_loaders = route.file_loaders;
      expect(file_loaders).to.be.empty;
    })

    it('should parse "loader1!loader2!path/to/file.ext"', function () {
      let route = parser.parse("loader1!loader2!path/to/file.ext");
      expect(route.file_type).to.equal('ext');
      expect(route.file_path).to.equal('path/to/file.ext');
      let file_loaders = route.file_loaders;
      expect(file_loaders).to.eql([{
        name: 'loader2',
        params: {}
      },{
        name: 'loader1',
        params: {}
      }]);
    })

    it('should parse "loader?k1=v1&k2=v2!path/to/file.ext"', function () {
      let route = parser.parse("loader?k1=v1&k2=v2!path/to/file.ext");
      expect(route.file_type).to.equal('ext');
      expect(route.file_path).to.equal('path/to/file.ext');
      let file_loaders = route.file_loaders;
      expect(file_loaders).to.eql([{
        name: 'loader',
        params: {
          k1: 'v1',
          k2: 'v2'
        }
      }]);
    })
    
  })
})

