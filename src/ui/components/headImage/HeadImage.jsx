import './HeadImage.css';

function HeadImage(props) {
    const imgSrc = props.src;
    const alt = props.alt;
    const title = props.title;
    const className = props.className;

    return(
        <div className='head-image container'>
            <img src={imgSrc} alt={alt} className={'head-image image ' + className}/>
            {title &&
                <p className='head-image title'>{title}</p>
            }
        </div>
    )
}

export default HeadImage;