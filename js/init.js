'use strict';
require.config({
  locale: "en_ca",
  paths:{
   /*[Frameworks]==================================================================================*/
    "jquery"       : "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min",
    "mdl"          : "https://storage.googleapis.com/code.getmdl.io/1.0.4/material.min",
    "lodash"       : "lodash",
    "backbone"     : "backbone",
    "controller"   : "backbone-controller",
    "keys"         : "backbone-keys",
    "layout"       : "backbone-layoutmanager",
    "listenFor"    : "backbone-listenFor",
    "json2"        : "https://cdnjs.cloudflare.com/ajax/libs/json2/20150503/json2.min",
    "i18n"         : "i18nprecompile",
    "text"         : "text",

    /*[Plugins]======================================================================================*/
    "velocity"       : "velocity",
    "velocity-ui"    : "velocity-ui",
    /*"espy"           : "espy",
    "knob"           : "knob",
    "markdown"       : "markdown",
    "moment"         : "moment",*/
    "zclip"          : "ZeroClipboard",
  },
  shim: {
    'backbone'     : ["jquery","lodash"],
    'listenFor'    : ['backbone'],
    'controller'   : ['backbone'],
    'keys'         : ['backbone'],
    "velocity"     : ["jquery"],
    "velocity-ui"  : ["velocity"]
    }
  }
});
require(["jquery","app","zclip"], function($,App,zClip){
  zClip.config({ swfPath:'js/ZeroClipboard.swf' });
  var client = new zClip($('button[rel="copy"]'));
  App.init();
});
