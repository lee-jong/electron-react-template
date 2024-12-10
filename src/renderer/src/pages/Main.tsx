import { useNavigate } from 'react-router-dom'

function Main() {
  const navigate = useNavigate()

  return (
    <>
      <div onClick={() => navigate('/login')}>Main</div>
    </>
  )
}

export default Main
