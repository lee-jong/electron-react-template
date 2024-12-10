import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  return (
    <>
      <div onClick={() => navigate('/')}>Login</div>
    </>
  )
}

export default Login
