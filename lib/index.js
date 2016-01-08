let ipc = System._nodeRequire('ipc')
let remote = System._nodeRequire('remote')
let webFrame = System._nodeRequire('web-frame')

let clipboard = System._nodeRequire('clipboard')
let crashReporter = System._nodeRequire('crash-reporter')
let nativeImage = System._nodeRequire('native-image')
let electronScreen = System._nodeRequire('screen')
let shell = System._nodeRequire('shell')

export {
    ipc,
    remote,
    webFrame,
    clipboard,
    crashReporter,
    nativeImage,
    electronScreen,
    shell
}
