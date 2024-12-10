import { ipcMain } from 'electron'

const ipcMainInit = () => {
  ipcMain.on('ping', () => console.log('pong'))
}
export default ipcMainInit
