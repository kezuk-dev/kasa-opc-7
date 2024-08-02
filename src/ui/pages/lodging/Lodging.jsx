import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DropDown, Profil, Rating, TagList } from '../../components';
import Caroussel from '../../components/caroussel/Caroussel';
import './Lodging.css';

function Lodging() {
    const { id } = useParams();
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(result => {
                const elem = result.find(el => el.id === id)
                setData(elem);
            })
    }, [id]);    
    return (
        <div className='lodging container'>
            {data.pictures && <Caroussel pictures={data.pictures} alt={data.title} />}
            <div className='lodging infos'>
                <div className='lodging info-left'>
                    <p className='lodging title main-color'>{data.title}</p>
                    <p className='lodging location main-color'>{data.location}</p>
                    {data.tags && <TagList tags={data.tags}/>}
                </div>
                <div className='lodging info-right'>
                    {data.host && <Profil picture={data.host.picture} name={data.host.name}/>}
                    <Rating rating={data.rating}/>
                </div>
            </div>
            <div className='lodging dropdowns'>
                <DropDown title='Description' text={data.description}/>
                {data.equipments && <DropDown title='Équipements' text={data.equipments.join('\n')}/>}
            </div>
        </div>
    )
}

export default Lodging;