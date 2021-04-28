import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux' 
import { fetchNext } from 'reducers/game'


export const GamePage = () => {
    const dispatch = useDispatch()
    const description = useSelector((store)=>store.game.description)
    const coordinates = useSelector((store)=>store.game.coordinates)
    const actions = useSelector((store) => store.game.actions)
    const actionDirection = actions.direction
    const actionType = actions.type
    console.log(actions)
    console.log(actions.type)
    // const actionsArray = actions.map(action => {action.type})
    // console.log(actionsArray)
    // const actionMap = actions.map(action => action.type)
    // console.log(actionMap)
    
    return (
        <div>
            <h2>{description}</h2>
            <p>Your coordinates are: {coordinates}</p>

            {/* <p>{actions.description}</p> */}
            {/* <p>Direction: {actionDirection}</p>
            <p>Type: {actions.type}</p> */}

            {actions.map((action) => (
                <div key={action.direction}>
                    <p>{action.description}</p>
                    <p>{action.type}</p>
                    <p>{action.direction}</p>
                    <button
                    /*direction och type skickas in i fetchNext för att sedan kunna användas i fetchInitNext*/
                        onClick={() => dispatch(fetchNext(action.direction, action.type))}
                        >
                        <h2> Go {action.direction}</h2>
                    </button>
                </div>
      ))}

            {/* <button
                // onClick={() => dispatch(fetchNext({ type: actionType, direction: actionDirection }))}>
                // HÄR SKA DE IN
                onClick={() => dispatch(fetchNext(actionDirection, actionType))}>
                Go {actionDirection}
            </button> */}


        </div>
    )
}

