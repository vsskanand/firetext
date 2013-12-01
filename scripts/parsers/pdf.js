/*
* PDF parser
* Copyright (C) Codexa Organization 2013.
*/

'use strict';


/* Variables
------------------------*/
// Namespace
firetext.parsers.pdf = {};


/* Parser
------------------------*/
firetext.parsers.pdf.parse = function (data, type) {
  var _cache = {},
      output = "";
  if (type == "HTML") {
    output = data.replace(/</gi, '<pre><code>&lt;')
    			 .replace(/>/gi, '&gt;</code></pre>')
    			 .replace(/&amp;/gi, '&amp;amp;')
    			 .replace(/\n/gi, '<br>');
    return output;
  }
  // Didn't parse, return false
  return false;
};