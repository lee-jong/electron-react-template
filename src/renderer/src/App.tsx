import router from './Router'
import { RouterProvider } from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <div className="app">
      {/* Layout Component */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
