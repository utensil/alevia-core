import test_helper from '../test_helper'

let parser = test_helper.require_source('route/parser');

describe('route.parser', function(){

  describe('the class', function () {
    it('should exits', function () {
      expect(parser).to.be.ok;
    })
  })

  describe('#parse()', function(){

    it('should parse "#path/to/file.ext"')

    it('should parse "#loader1!loader2!path/to/file.ext"')

    it('should parse "#loader?k1=v1&k2=v2!path/to/file.ext"')
    
  })
})

