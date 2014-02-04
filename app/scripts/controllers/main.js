'use strict';

angular.module('webrtcApp')
  .controller('MainCtrl', function ($scope) {

   navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
   var constraints = {audio: false, video: true};

   var video;
   function successCallback(stream) {
      video = document.querySelector('video');
      window.stream = stream; // stream available to console
      if (window.URL) {
         video.src = window.URL.createObjectURL(stream);
      } else {
         video.src = stream;
     }
   video.play();
   }

   function errorCallback(error){
     console.log('navigator.getUserMedia error: ', error);
   }

   navigator.getUserMedia(constraints, successCallback, errorCallback);
});
