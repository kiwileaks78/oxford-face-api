'use strict'

var request = require("superagent");

var Face = function(apiKey){
  this.API_PRIMARY_KEY = apiKey;
  this.API_URL = "https://api.projectoxford.ai/face/v0";
}

Face.prototype.detect = function(image_url, callback) {
  var request_body = {
    url: image_url
  };
  request
    .post(this.API_URL + "/detections")
    .query({analyzesFaceLandmarks: true})
    .query({analyzesAge: true})
    .query({analyzesGender: true})
    .query({analyzesHeadPose: true})
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', this.API_PRIMARY_KEY)
    .send(request_body)
    .end(function(error, response) {
      if(!error && response.statusCode == 200) {
        return callback(null, response.body);
      } else {
        return callback(error);
      }
  });
}

Face.prototype.identify = function(face_ids, group_id, limit, callback){
  var request_body = {
    faceIds: face_ids,
    personGroupId: group_id,
    maxNumOfCandidatesReturned: limit
  };
  request
    .post(this.API_URL + "/identifications")
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', this.API_PRIMARY_KEY)
    .send(request_body)
    .end(function(error, response) {
      if(!error && response.statusCode == 200) {
        return callback(null, response.body);
      } else {
        return callback(error);
      }
  });
}

module.exports = Face;

