import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/')
  }
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo' onClick={() => handleSearch()}>Booking cop</span>
        <div className='navItems'>
          <button className='navButton'>Register</button>
          <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
