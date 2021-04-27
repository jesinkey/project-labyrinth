import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux' 
// import { fetchNext } from 'reducers/game'


export const GamePage = () => {
    const dispatch = useDispatch()
    const descriptionText = useSelector((store)=>store.game.description)
    const coordinates = useSelector((store)=>store.game.coordinates)
    const actionsObject = useSelector((store) => store.game.actions)
    
    return (
        <div>
        <h2>{descriptionText}</h2>
        <p>{coordinates}</p>
        <p>{actionsObject.description}</p>
        {/* <button
          onClick={() => dispatch(fetchNext(actionsObject.direction))}>  
            <h2> Go {actionsObject.direction}</h2>
        </button> */}
        </div>
    )
}