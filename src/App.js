import { useState } from 'react';
import { data } from './data';
import { sliderData } from './sliderData';
import './App.css';

function App() {

  const [presents, setPresents] = useState(data)
  const [showText, setShowText] = useState(false)
  const [photo, setPhoto] = useState(0)
  const {id, image} = sliderData[photo]

  const removePresent = (id) => {
    let newPresents = presents.filter (present => present.id !== id)
    setPresents(newPresents)
  }
  
  const showTextClick = (present) => {
    present.showMoreState = !present.showMoreState
    setShowText(!showText)
  }

  const previousPhoto = () => {
    setPhoto(( photo => {
      photo --;
      if (photo < 0) {
        return data.length -1;
      }
      return photo;
    }))
  }

  const nextPhoto = () => {
    setPhoto(( photo => {
      photo ++;
      if (photo > data.length -1) {
        photo = 0;
      }
      return photo
    }))
  }

  return (
    <div>
      <div className='upper-container'>
        <h1>A Guide How to Make Me Happy</h1>
      </div>

      <div className='container'>
        <h2>Here are {presents.length} ideas to help anyone how wants to please me => </h2>
      </div>

      {presents.map((present => {
      const {id, image, desription, showMoreState, showMore, url} = present;
      return (
      <div key={id}>
      <div className='wishes-container'>
      <img src={image} width="300px" height="450vh" alt='present'/> 
      <div className="present-info">
          <h3>{desription}</h3>
          <h4>{showMoreState ? showMore : showMore.substring(0, 0)}
          <button className='tips' onClick={ () => showTextClick(present)}>{!showMoreState ? "Need some tips?" : "Close"}</button></h4>
          <a href={url}>tap here to see</a>
          <button className='btn' onClick={ () => removePresent(id)}>remove</button>
        </div>
      </div>
      </div>
      )
    }))};
    <div className='wrapper'>
      <button className='btn-remove-all' onClick={ () => setPresents([])}>Remove All Presents</button>
    </div>

    <div className='container'>
        <h2> Any more ideas? Then here are some hints!</h2>
    </div>

    <div className='photo-container'>
      <button className='slider-btn' onClick={previousPhoto}>Previous</button>
      <img src={image} width="300px" height="500vh" alt='other options'/>
      <button className='slider-btn' onClick={nextPhoto}>Next</button>
    </div>

    <div className='wrapper'>
      <h1>Thank you for doing you best!</h1>
    </div>

    



    </div>

  );
}

export default App;
