import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <>
        <h1>hello</h1>
        <ul>
            <Link to='/'> <li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>

             {/* <a href='/'> <li>Home</li></a>
                <a href='/about'> <li>About</li></a> 
                <a href='/contact'> <li>Contact</li></a>  */}
        </ul>

        </>
    );
    
}export default Nav;