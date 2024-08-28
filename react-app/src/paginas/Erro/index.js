
import { Link } from 'react-router-dom';
import './style.css';

function Error404(){
    return(
        <>
            <div className="container-erro">
                <h1>Not Found 404</h1>
                <Link to='/' className='link-home'>Home</Link>

            </div>
            
        </>
    )
}

export default Error404;