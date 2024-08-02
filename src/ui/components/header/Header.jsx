import "./Header.css";
import Logo from "../../../assets/LOGO.svg";
import { Link, useMatch } from "react-router-dom";
import { PAGE_LIST, LINK_LIST } from "../../pages";

function Header(props) {
    let homeOpen = useMatch({
        path: LINK_LIST.Home,
        exact: props.openedPage === PAGE_LIST.Home
    });
    let aboutOpen = useMatch({
        path: LINK_LIST.About,
        exact: props.openedPage === PAGE_LIST.About
    })
    return(
        <nav className="header container">
        <img src={Logo} alt="logo-Kasa" className="header logo"/>
            <ul className="header list">
                <li>
                    <Link to={LINK_LIST.Home} className={homeOpen ? "header link main-color open" :  "header link main-color"}>Accueil</Link>
                </li>
                <li>
                    <Link to={LINK_LIST.About} className={aboutOpen ? "header link main-color open" :  "header link main-color"}>A Propos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;