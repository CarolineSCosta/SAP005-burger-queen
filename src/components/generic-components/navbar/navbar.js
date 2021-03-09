import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'
import { FaDoorOpen } from 'react-icons/fa'
import './navbar.css'
import { logout } from '../../../services/services'

export default function Navbar() {
  return (
    <header className='responsive-wrap-navbar'>
      <p className='label-nav'><FaUserCircle className='icon-nav' /><br />{localStorage.getItem('userName')}</p>
      <Link className='link' to='/status-order'><p className='label-nav'><FaRegClock className='icon-nav' /><br />Status Pedidos</p></Link>
      {
        localStorage.getItem('userRole') === 'hall'
          ? <Link className='link' to='/client-info'><p className='label-nav'><GiKnifeFork className='icon-nav' /><br />Novo Pedido</p></Link>
          : null
      }
      <Link className='link'
        onClick={
          (event) => {
            event.preventDefault()
            logout()
          }
        }
      >
        <p className='label-nav'>
          <FaDoorOpen className='icon-nav' />
          <br />Sair
        </p>
      </Link>
    </header>
  )
}
