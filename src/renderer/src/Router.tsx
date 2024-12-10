import { createHashRouter } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'

export default createHashRouter([
  { path: '/', element: <Main /> },
  { path: '/login', element: <Login /> }
])
