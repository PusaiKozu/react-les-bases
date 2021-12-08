import { Link } from 'react-router-dom'

const Menu = (props) => {
   return (
      <ul>
         <li><Link to="/accueil">Accueil</Link></li>
         <li><Link to="/notifications">Notifications</Link></li>
         <li><Link to="/messages">Messages</Link></li>
         <li><Link to="/explore">Explore</Link></li>
      </ul>
   )
}

export default Menu