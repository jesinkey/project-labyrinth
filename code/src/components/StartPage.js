import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import { fetchStart } from 'reducers/game'
import { fetchNext } from 'reducers/game'
import { game } from 'reducers/game'
import { useSelector } from 'react-redux'

export const StartPage = () => {
    const dispatch = useDispatch()

    const description = useSelector((store)=>store.game.description)
    const coordinates = useSelector((store)=>store.game.coordinates)
    const actions = useSelector((store) => store.game.actions)
    const actionDirection = actions.direction
    const actionType = actions.type
    console.log(actionType)
    console.log(actionDirection)

    return (
        <>
            <h1>Welcome to the game</h1>
            {/* <Link to='/GamePage'> */}
                <button 
                    onClick={() => dispatch(fetchStart())}>
                    Start the game
                </button>
            {/* </Link> */}

            <h2>{description}</h2>
            <p>Your coordinates: {coordinates}</p>
            <p>Description: {actions.description}</p>
            <p>Direction: {actionDirection}</p>
            <p>Type: {actions.type}</p>

            <button
                // onClick={() => dispatch(fetchNext({ type: actionType, direction: actionDirection }))}>
                // HÄR SKA DE IN
                onClick={() => dispatch(fetchNext(actionDirection, actionType))}>
                Go {actionDirection}
            </button>

            {/* {actionsObject.map(action => (
                <div key={actions.direction}>
                    <p>{actions.description}</p>
                    <p>{actions.direction}</p>
                    <p>{actions.type}</p>
                </div>
            ))} */}

        </>
    )
}
