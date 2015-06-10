'use strict'

var Oxford = require('../index.js');

var assert = require('assert');
var should = require('should');

describe('init', function(){
  var primaryKey = "ABCDEFGHIJKLMN";

  it('not set primary key', function(){
    var face = new Oxford.Face()
    assert.equal(face.API_PRIMARY_KEY, undefined);
  })

  it('set primary key', function(){
    var face = new Oxford.Face(primaryKey);
    face.API_PRIMARY_KEY.should.equal(primaryKey);
  })
})
