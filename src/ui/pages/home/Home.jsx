import { useEffect, useState } from 'react';
import { homeHeader } from '../../../assets';
import './Home.css';
import { HeadImage, Thumb } from '../../components';

function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('data.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          }).then(res => res.json())
            .then(result => setData(result));
    }, [data])

    return(
        <div className='home container'>
            <HeadImage src={homeHeader} alt='photo accueil' title='Chez vous, partout et ailleurs' className='home-head-image'/>
            <main className='home list'>
                {data.map((el, index) => <Thumb cover={el.cover} title={el.title} key={index} id={el.id}/>)}
            </main>
        </div>
    )
}

export default Home;