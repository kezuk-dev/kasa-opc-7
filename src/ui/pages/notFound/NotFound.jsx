import { Link } from 'react-router-dom';
import { LINK_LIST } from '..';
import './NotFound.css';

function NotFound() {
    return(
        <div className='not-found container'>
            <p className='not-found code main-color'>404</p>
            <p className='not-found message main-color'>Oups! La page que vous avez demandez n'existe pas</p>
            <Link to={LINK_LIST.Home} className='not-found link main-color'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default NotFound;