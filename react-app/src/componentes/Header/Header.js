import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
    return(
        <>
            <header>
              <Link to='/' className='logo'>Prime Flix</Link>
              <Link to='/favoritos' className='favoritos'>Favoritos</Link>
            </header>
        </>
    )
}


export default  Header;