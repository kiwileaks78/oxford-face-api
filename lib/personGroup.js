"use strict";

var request = require("superagent");

var PersonGroup = function(apiKey){
  this.API_PRIMARY_KEY = apiKey;
  this.API_URL = "https://api.projectoxford.ai/face/v0";
};


PersonGroup.prototype.train = function(groupId, callback){
  request
    .post(this.API_URL + "/persongroups/" + group_id + "/training")
    .set('Ocp-Apim-Subscription-Key', this.API_PRIMARY_KEY)
    .end(function(error, res) {
      if(err){
        return callback(err);
      }
      callback(null,res.body);
  });
};

PersonGroup.prototype.createPersonGroup = function(personGroupId, name, data, callback){
  var requestBody = {
    "name": name, 
    userData: data || undefined
  }
  request
    .put(this.API_URL + "/persongroups/" + personGroupId)
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', this.API_PRIMARY_KEY)
    .send(requestBody)
    .end(function(err, res){
      if(err){
        return callback(err);
      }else {
        return callback(null, res.body);
      }
    });
  };

PersonGroup.prototype.list = function(callback){
  request
    .get(this.API_URL + "/persongroups/")
    .set('Ocp-Apim-Subscription-Key', this.API_PRIMARY_KEY)
    .end(function(err,res){
      if(err){
        return callback(err);
      }
      return callback(null, res.body);
    });
  };

PersonGroup.prototype.delete = function(personGroupId, callback){
  request
    .del(this.API_URL + "/persongroups/" + personGroupId)
    .set('Ocp-Apim-Subscription-Key', this.API_PRIMARY_KEY)
    .end(function(err,res){
      if(err){
        return err;
      }else {
        return callback(null,res.body);
      }
    });
  }

module.exports = PersonGroup;