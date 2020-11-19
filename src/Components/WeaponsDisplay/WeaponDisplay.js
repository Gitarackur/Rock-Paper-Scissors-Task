import React from 'react'
import Paper from '../../images/Paper.png'
import Rock from '../../images/Rock.png'
import Scissors from '../../images/Scissors.png'
import Question1 from '../../images/Question1.png'
import QuestionWhite from '../../images/QuestionWhite.png'
import './WeaponDisplay.css'

const WeaponDisplay = (props) => {
    return (
        <div className='WeaponDisplay'>

            <div className='name'>
                <h5>{props.name}</h5>
            </div>

            <div className='weapon'>
                <img src={props.weapon==='Rock'? Rock: props.weapon==='Scissors'? Scissors : props.weapon==='Paper' ? Paper : props.bonusGame && props.weapon ? QuestionWhite : Question1} alt='Rock'/>
            </div>

            <div className='points'>
                <h6>SCORE</h6>
                <h1>{props.points}</h1>
            </div>

        </div>
    )
}

export default WeaponDisplay
