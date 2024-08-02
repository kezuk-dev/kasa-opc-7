import './Rating.css';

function Rating(props) {
    const rateValue = props.rating - 1;
    const className = props.className;
    const starList = []
    for(let i = 0; i < 5; i++) {
        let className = 'rating star';
        if(i < rateValue) {
            className = className + ' main-color';
        }
        starList.push(className);
    }

    return(
        <div className={'rating container ' + className}>
            {starList.map((star, index) => 
                <div className={star} key={index}/>
            )}
        </div>
    )

}

export default Rating;