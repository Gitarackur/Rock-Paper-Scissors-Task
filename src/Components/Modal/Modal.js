import React from 'react'
import './Modal.css'

const Modal = (props) => {
    return (
        <div className='Instructions-Modal-Container' onClick={()=>{props.handleModal(props.openModal)}}>
            <div className='Modal'>
                <button className='removeModal' onClick={()=>{props.handleModal(props.openModal)}}>
                    <i class="fa fa-window-close" aria-hidden="true"></i>
                </button>
                <h1>Instructions/Rules</h1>
                {
                    props.bonus ?(
                        <>
                            <ul>
                                <li>
                                    <p>
                                        If Player wins from Rock-Paper Combination, 1 point is awarded. If Player wins from Scissors-
                                        Paper Combination, 2 Points are awarded. If Player wins from Rock-Scissors Combination, 3 Points  
                                        are awarded.
                                    </p> 
                                </li>
                            </ul>
                        </>

                    ):(
                        <>
                            <ul>
                                <li>
                                    <p>
                                        A Player is required to pick between Rock, Paper and Scissors and the Computer
                                        will also pick between those also.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        Paper beats Rock, Rock beats Scissors and Scissors beat Paper and get a Single Point for a Win.
                                    </p>
                                </li>
                            </ul>
                        </>
                    )
                }
                
            </div>
        </div>
    )
}

export default Modal
