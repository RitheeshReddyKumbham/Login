import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className="Header">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="fields">
        <Link to="/">
          <li className="field">Home</li>
        </Link>
        <Link to="/products">
          <li className="field">Products</li>
        </Link>
        <Link to="/cart">
          <li className="field">cart</li>
        </Link>
        <button className="button">Logout</button>
      </ul>
    </div>
  )
}
export default Header
