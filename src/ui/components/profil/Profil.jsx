import './Profil.css';

function Profil(props) {
    const src = props.picture;
    const name = props.name.replaceAll(' ', '\n');
    const className = props.className
    return(
        <div className={'profil container ' + className}>
            <p className='profil name main-color'>{name}</p>
            <img src={src} alt={name + ' photo'} className='profil photo'/>
        </div>
    )
}

export default Profil;