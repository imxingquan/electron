const {app, BrowserWindow,Tray,Menu,nativeImage} = require('electron')
var path = require('path')

let mainWindow = null
let tray = null

app.on('ready', () => {
  console.log('Hello from Electron.')
  // 打开开发工具
  mainWindow = new BrowserWindow()
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`)
  mainWindow.openDevTools()
  
  const contextMenu = Menu.buildFromTemplate([
    {label:"菜单1",type:'radio'},
    {label:"菜单2",type:'radio',checked:true},
    {label:"退出",click(){app.exit()}}
  ])
  

  const iconPath = path.join(`${__dirname}/images/my.ico`)
  tray = new Tray(iconPath)
  tray.setToolTip('This is my 应用程序')
  //关联菜单
  tray.setContextMenu(contextMenu)

  //点击图标显示和隐藏主窗口
  tray.on('click',()=>{
    mainWindow.isVisible()? mainWindow.hide() : mainWindow.show()
  })
  mainWindow.on('show',()=>{
    tray.setHighlightMode('always')
  })
  mainWindow.on('hide',()=>{
    tray.setHighlightMode('never')
  })

})


