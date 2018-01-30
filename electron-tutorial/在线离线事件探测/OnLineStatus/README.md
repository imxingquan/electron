##run app
$ electron .

##在线离线事件探测
navigator.onLine

页面 -> ipcRenderer.send -> Main进程 -> ipcMain.on

 html 发送
 const {ipcRenderer} = require('electron')
  const updateOnlineStatus = () => {
    ipcRenderer.send('online-status-changed', navigator.onLine ? 'online' : 'offline')
  }
   window.addEventListener('online',updateOnlineStatus);
    window.addEventListener('offline',updateOnlineStatus);

main 接收
ipcMain.on('online-status-changed', (event, status) => {
  console.log(status);
});
