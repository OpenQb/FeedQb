import QtQuick 2.10

import Qb 1.0
import Qb.Core 1.0
import Qb.Archive 1.0

import "app.js" as AppJS


QbApp {
    id: appUI
    
    property alias zipObject: zipObject;
    property alias coreObject: coreObject;

    Component.onCompleted: {
        AppJS.init(appUI,Qt.platform.os);
    }

    /**** Initialize all non gui components here **************************************************/
    QbCore{
        id: coreObject
    }

    QbZip{
        id: zipObject
    }

    QbSettings{
        id: settingsObject
        name: appUI.appTitle
    }

    /**** Initialize all gui components here **************************************************/
    Ui{
        id: uiObject
    }
}
