.pragma library

.import "js/qbapp.js" as QbAppJS

/**************************************************************************************************
  app.js is the main java script file which will directly interact with the ui
  ************************************************************************************************/

var os;
var appUI;
var initialized = false;


function init(_appUI,_os)
{
    appUI = _appUI;
    os = _os;

    //QbAppJS setup
    QbAppJS.setup(appUI);

    initialized = true;
}
