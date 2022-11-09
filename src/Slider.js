import { useState } from 'react';
import { sliderData } from './sliderData';
import './App.css';

function Slider () {

    const [photo, setPhoto] = useState(0)
    const {id, image} = sliderData[photo]

    const previousPhoto = () => {
        setPhoto(( photo => {
            photo --;
            if (photo < 0) {
            return sliderData.length -1;
        }
        return photo;
        }))
    }
    
    const nextPhoto = () => {
        setPhoto(( photo => {
            photo ++;
            if (photo > sliderData.length -1) {
            photo = 0;
        }
        return photo
        }))
    }
    
    return (
    <div>
        <div className='container'>
        <h2> Any more ideas? Then here are some hints!</h2>
    </div>

    <div className='photo-container' key={id}>
        <button className='slider-btn' onClick={previousPhoto}>Previous</button>
        <img src={image} width="300px" height="500vh" alt='other options'/>
        <button className='slider-btn' onClick={nextPhoto}>Next</button>
    </div>

    <div className='wrapper'>
        <h1>Thank you for doing you best!</h1>
    </div>
        </div>
    )
}


export default Slider;