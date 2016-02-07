var ipc = System._nodeRequire('electron').ipcRenderer;
var remote = System._nodeRequire('remote');
var webFrame = System._nodeRequire('web-frame');

var clipboard = System._nodeRequire('clipboard');
var crashReporter = System._nodeRequire('crash-reporter');
var nativeImage = System._nodeRequire('native-image');
var electronScreen = System._nodeRequire('screen');
var shell = System._nodeRequire('shell');

module.exports = {
    ipc: ipc,
    remote: remote,
    webFrame: webFrame,
    clipboard: clipboard,
    crashReporter: crashReporter,
    nativeImage: nativeImage,
    electronScreen: electronScreen,
    shell: shell
};
