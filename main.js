const { Menu } = require("electron");

function onBrowserWindowCreated(window, plugin) {
    //F5刷新页面
    var menuTemplate=[{
        label: "刷新",
        role: "reload",
        accelerator: "F5",
    }]

    var menuBuilder = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menuBuilder);
}

module.exports = {
    onBrowserWindowCreated
}