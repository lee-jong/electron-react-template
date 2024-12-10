import { BrowserWindow, globalShortcut } from 'electron'

const shortcutInit = (win: BrowserWindow) => {
  globalShortcut.register('F1', () => {
    console.log('test', win)
  })
}
export default shortcutInit
