import { BrowserWindow, globalShortcut } from 'electron'

const shortcutInit = (win: BrowserWindow) => {
  globalShortcut.register('F12', () => {
    console.log('prevent developer tools')
  })
  // 개발자 도구
  globalShortcut.register('Alt+F12', () => {
    win && win.webContents.openDevTools()
  })
}
export default shortcutInit
