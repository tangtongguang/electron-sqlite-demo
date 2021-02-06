
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const electron = require('electron')
const ipc = electron.ipcRenderer;
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  ipc.send("mainWindowLoaded")
  ipc.on("resultSend",function(evt,result){
    replaceText(`product`,result)
  })
  

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})


