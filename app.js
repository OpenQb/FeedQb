.pragma library

.import "js/qbapp.js" as QbAppJS

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
