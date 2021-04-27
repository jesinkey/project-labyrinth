import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import { fetchStart } from 'reducers/game'
import { useSelector } from 'react-redux'

export const StartPage = () => {
    const dispatch = useDispatch()

    const descriptionText = useSelector((store)=>store.game.description)
    const coordinates = useSelector((store)=>store.game.coordinates)
    const actionsObject = useSelector((store) => store.game.actions)

    return (
        <>
            <h1>Welcome to the game</h1>
            {/* <Link to='/GamePage'> */}
                <button 
                    onClick={() => dispatch(fetchStart())}>
                    Start the game
                </button>
            {/* </Link> */}


            <h2>{descriptionText}</h2>
        <p>{coordinates}</p>
        <p>{actionsObject.description}</p>
               
               


        </>
    )
}