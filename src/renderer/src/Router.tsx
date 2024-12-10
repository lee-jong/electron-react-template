import { createBrowserRouter } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'

export default createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/login', element: <Login /> }
])
