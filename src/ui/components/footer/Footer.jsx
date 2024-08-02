import "./Footer.css";
import LogoWhite from "../../../assets/LOGO-white.svg";

function Footer() {
    return(
        <div className='footer container'>
            <img className='footer logo' src={LogoWhite} alt='logo-kasa'/>
            <p className='footer rights'>© 2020 Kasa. All rights reserve</p>
        </div>
    )
}

export default Footer;