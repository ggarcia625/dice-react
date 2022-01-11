import React, { useState, useEffect } from 'react'
import Die from "./Die";



export default function RollDice({ dieFaceArray }) {
    const initialFace = dieFaceArray[0];
    const [{dieFace1, dieFace2}, setDieFaces] = useState({dieFace1: initialFace, dieFace2: initialFace});
    const  [isRolling, setRoll] = useState(false);
    useEffect(function(){
        console.log('isRolling is updated');
        if(isRolling){
            setTimeout(function(){setRoll(false)}, 1200);
        }
    }, [isRolling])

    function randomIndex() {
        let randomIndex = Math.floor(Math.random() * dieFaceArray.length);
        return randomIndex;
    }
    function updateDiceFaces(){
        setDieFaces({dieFace1: dieFaceArray[randomIndex()], dieFace2: dieFaceArray[randomIndex()]})
        setRoll(true);
    }

    let rollingAnime = '';
    if(isRolling) {
        rollingAnime = 'rollingDie';
    }
    return (
        <>
        <div className='dice'>
            <span className={`die ${rollingAnime}`} ><Die dieFace={dieFace1}/></span>
            <span className={`die ${rollingAnime}`}><Die dieFace={dieFace2}/></span>
        </div>
            <button className='roll' onClick={updateDiceFaces} disabled={isRolling}>{isRolling ? 'Rolling':"Roll Dice!"}</button>
        </>
    )
}

RollDice.defaultProps = {
    dieFaceArray: [
        "fas fa-dice-one",
        "fas fa-dice-two",
        "fas fa-dice-three",
        "fas fa-dice-four",
        "fas fa-dice-five",
        "fas fa-dice-six"
]}
