import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Caroussel.css';

function Caroussel(props) {
    const alt = props.alt;
    const imgList = props.pictures;
    const [ index, setIndex ] = useState(0);

    const getIncIndex = (oldIndex) => {
        let newIndex = oldIndex + 1;
        if(newIndex >= imgList.length)
            newIndex = 0;
        return newIndex
    }

    const getDecIndex = (oldIndex) => {
        let newIndex = oldIndex - 1;
        if(newIndex < 0)
            newIndex = imgList.length - 1;
        return newIndex
    }

    const incIndex = () => {
        const i = getIncIndex(index);
        setIndex(i);
    }

    const decIndex = () => {
        const i = getDecIndex(index)
        setIndex(i);
    }

    return(
        <div className='caroussel container'>
            {imgList &&
            <img src={imgList[index]} alt={alt + ' ' + index} className='caroussel image'/>
            }
            {(imgList && imgList.length > 1) &&
                <div>
                    <FontAwesomeIcon icon={faChevronLeft} className='caroussel arrow left' onClick={() => decIndex()} />
                    <FontAwesomeIcon icon={faChevronRight} className='caroussel arrow right' onClick={() => incIndex()} />
                    <p className='caroussel count'>{(index+1) + '/' + imgList.length}</p>
                </div>
            }
        </div>
    )
}

export default Caroussel;