import { useState } from 'react';
import { data } from './data';
import './App.css';

function Presents() {
    const [presents, setPresents] = useState(data)
    const [showText, setShowText] = useState(false)

    const removePresent = (id) => {
    let newPresents = presents.filter (present => present.id !== id)
    setPresents(newPresents)
    }

    const showTextClick = (present) => {
        present.showMoreState = !present.showMoreState
        setShowText(!showText)
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
        <button className='tips' onClick={ () => showTextClick(present)}>{!showMoreState ? "Need some tips? Click here!" : "Close"}</button></h4>
        <a href={url}>Buy</a>
        <button className='btn' onClick={ () => removePresent(id)}>remove</button>
    </div>
    </div>
    </div>
    )
    }))};
    <div className='wrapper'>
        <button className='btn-remove-all' onClick={ () => setPresents([])}>Remove All Presents</button>
    </div>

    </div>
    )
}


export default Presents;
