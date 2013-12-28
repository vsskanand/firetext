/*
* Search
* Copyright (C) Codexa Organization 2013.
*/

'use strict';


/* Variables
------------------------*/
firetext.search = {};
var welcomeRecents, welcomeDevice, welcomeDropbox;
var openDevice, openDropbox;


/* Document List Search
------------------------*/ 
firetext.search.init = function () {
  var options = {
    valueNames: [ 'fileItemName' ]
  };
  welcomeRecents = new List('welcome-recents-area', options);
  welcomeDevice = new List('welcome-device-area', options);
  welcomeDropbox = new List('welcome-dropbox-area', options);
};

firetext.search.search = function (keyword, lists) {
    // Fix lists
    if (!lists) {
      lists == 'all';
    }
    
    // Search
    welcomeRecents.search(keyword);
    welcomeDevice.search(keyword);
    welcomeDropbox.search(keyword);
};
