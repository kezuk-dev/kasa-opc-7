import About from './about/About';
import Home from './home/Home';
import Lodging from './lodging/Lodging';
import NotFound from './notFound/NotFound';

const PAGE_LIST = {
    Home: 'Home',
    About: 'About',
    Lodging: 'Lodging',
    NotFound: 'NotFound',
}

const LINK_LIST = {
    Home: '/',
    About: '/About',
    Lodging: '/Lodging',
    NotFound: '*',

}

export { About, Home, Lodging, NotFound, PAGE_LIST, LINK_LIST };