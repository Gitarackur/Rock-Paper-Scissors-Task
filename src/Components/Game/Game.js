import React, {useState } from 'react'
import WeaponDisplay from '../WeaponsDisplay/WeaponDisplay'
import './Game.css'
import Paper from '../../images/Paper.png'
import Rock from '../../images/Rock.png'
import Scissors from '../../images/Scissors.png'
import Rps from '../../images/Rps.png'
import Modal from '../Modal/Modal'
import ToggleBtn from '../ToggleBtn/ToggleBtn'


const Game = () => {

    // state hook variables
    const weapons= ['Rock', 'Paper', 'Scissors']
    let [player, setplayer] = useState(null)
    let [playerPoints, setplayerPoints] = useState(0)
    let [computer, setcomputer] = useState(null)
    let [computerPoints, setcomputerPoints] = useState(0)
    let [gamePlaying, setgamePlaying] = useState(null)
    let [text, settext] = useState(null)
    let [bonusGame, setbonusGame] = useState(false)
    let [openModal, setopenModal] = useState(false)




    const computerPlays=()=>{
        return new Promise((resolve, reject)=>{
            let pick;
            let gameInterval = setInterval(() => {
                pick= weapons[Math.floor(Math.random() * weapons.length)]
                setcomputer(pick);
            }, 75); 
            setTimeout(()=>{
                clearInterval(gameInterval)
                resolve(pick)
            }, 2000)
        })
    }

    const gamePlay= async(weapon)=>{
        setplayer(weapon);
        const computerWeapon= await computerPlays();
        gameLogic(weapon, computerWeapon);
    }

    const gameLogic=(player, computer)=>{
        if(player==='Rock'){
            if(computer==='Scissors'){
                settext(`${player} beats ${computer}`);
                if(bonusGame=== true){
                    setplayerPoints(playerPoints+ 3);
                }else{
                    setplayerPoints(playerPoints+ 1);
                }
            }else if(computer==='Paper'){
                settext(`${computer} beats ${player}`)
                setcomputerPoints(computerPoints+ 1);
            }
            else{
                settext(`it is a draw`)
            }
        }else if(player==='Paper'){
            if(computer==='Rock'){
                settext(`${player} beats ${computer}`)
                if(bonusGame=== true){
                    setplayerPoints(playerPoints+ 1);
                }else{
                    setplayerPoints(playerPoints+ 1);
                }
            }else if(computer==='Scissors'){
                settext(`${computer} beats ${player}`);
                setcomputerPoints(computerPoints+ 1);
            }
            else{
                settext(`it is a draw`)
            }
        }else if(player==='Scissors'){
            if(computer==='Paper'){
                settext(`${player} beats ${computer}`);
                if(bonusGame=== true){
                    setplayerPoints(playerPoints+ 2);
                }else{
                    setplayerPoints(playerPoints+ 1);
                }
            }else if(computer==='Rock'){
                settext(`${computer} beats ${player}`)
                setcomputerPoints(computerPoints+ 1);
            }
            else{
                settext(`it is a draw`);
            }
        }
    }

    const checkWinner=()=>{
        if(playerPoints > computerPoints){
            settext(`Player Wins Computer by ${playerPoints}:${computerPoints}`)
        }else if(playerPoints < computerPoints){
            settext(`Player loses to Computer by ${playerPoints}:${computerPoints}`)
        }else{
            settext(`It is a draw`)
        }

        setplayer(null);
        setcomputer(null);
    }

    const quitGame=()=>{
        setgamePlaying(false);
        setplayer(null);
        setplayerPoints(0);
        setcomputer(null);
        setcomputerPoints(0);
        setgamePlaying(null);
        settext(null);
        setbonusGame(false);
    }

    const refreshGame=()=>{
        setplayer(null);
        setplayerPoints(0);
        setcomputer(null);
        setcomputerPoints(0);
        setgamePlaying(true);
        settext(null);
    }



    return (
        <div className={bonusGame===!true ? 'body':'body bonus'}>
            <h1 className={bonusGame ? 'Header bonus': 'Header'}>Rock Paper Scissors</h1>
            {
                gamePlaying ?(
                    <span style={{float: "right", padding: '2%'}}>
                        <ToggleBtn
                            selected={bonusGame}
                            toggleSelected={() => {
                                setgamePlaying(true);
                                setbonusGame(!bonusGame);
                            }}
                        />
                    </span>
                ):(
                    null
                )
            }
            
            {
                gamePlaying ?(
                    <div className='game-container'>

                        <button className='Rules' onClick={()=>{setopenModal(true)}}>Rules</button>
                        { openModal ? <Modal openModal={openModal} bonus={bonusGame} handleModal={()=>{setopenModal(false)}}/>: null }
                        

                        <div className='game-Grid1'>
                            <div>
                                <div style={{textAlign: "center", padding: '2%'}}>
                                    <h4 style={{color:'yellow'}}>{text}</h4>
                                </div>
                                <div className='DisplayZone'>
                                    <WeaponDisplay points={playerPoints} weapon={player} name={'PLAYER'} bonusGame={bonusGame}/>
                                    <WeaponDisplay points={computerPoints} weapon={computer} name={'COMPUTER'} bonusGame={bonusGame}/>
                                </div>
                            </div>
                        </div>

                        <div className='game-Grid2'>
                            <div style={{width:'100%', margin:'auto'}}>
                                <h4 style={{textAlign: 'center'}}>Player can click any Of the Cards</h4>
                                <div className='Weapons'>
                                    <div className={bonusGame===!true ? '':'bonus'} onClick={()=>{gamePlay('Rock')}}>
                                        <img src={Rock} alt='Rock'/>
                                    </div>

                                    <div className={bonusGame===!true ? '':'bonus'} onClick={()=>{gamePlay('Paper')}} >
                                        <img src={Paper} alt='Paper'/>
                                    </div>

                                    <div className={bonusGame===!true ? '':'bonus'} onClick={()=>{gamePlay('Scissors')}}>
                                        <img src={Scissors} alt='Scissors'/>
                                    </div>
                                </div>

                                <div className='gameButtons'>
                                    <button className={bonusGame===!true ? 'QuitGame':'QuitGame bonus'} onClick={checkWinner}>See Scores</button>
                                    <button className={bonusGame===!true ? 'QuitGame':'QuitGame bonus'} onClick={quitGame}>Quit game</button>
                                    <button className={bonusGame===!true ? 'QuitGame':'QuitGame bonus'} onClick={refreshGame}>Play Again</button>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                ):(
                    <div>
                        <div className='MainImage'>
                            <img src={Rps} alt='Rock'/>
                        </div>
                        <div className='gameButtons'>
                            <button className={bonusGame===!true ? 'StartGame':'StartGame bonus'} onClick={()=>{setgamePlaying(true)}}>Play Game</button>
                        </div>
                    </div>
                )
            }
               
            
        </div>
    )
}

export default Game
