'use strict'

var request = require("superagent");

var Person = function(apiKey){
  this.API_PRIMARY_KEY = apiKey;
  this.API_URL = "https://api.projectoxford.ai/face/v0";

}



Person.prototype.create = function(personGroupId, data, callback){
  request
    .post(this.API_URL + "/persongroups/" + personGroupId + "/persons")
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', this.API_PRIMARY_KEY)
    .send(data)
    .end(function(err,res){
      if(err){
        return callback(err);
      }
      return callback(null, res.body);
    });
};

Person.prototype.addFace = function(personGroupId, personId, faceId, callback){
  var requestBody = {
    userData: ""
  };
  request
    .put(this.API_URL + "/persongroups/" + groupId + "/persons/" + personId + "/faces/" + faceId)
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', this.API_PRIMARY_KEY)
    .send(requestBody)
    .end(function(err, res) {
      if(err ){
        return callback(err);
      }
      return callback(null, res.body);
  });
};

module.exports = Person;
