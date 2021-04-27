
import { createSlice } from '@reduxjs/toolkit'


const fetchInitStart = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'Matilda000' }),
  };
// HÄR SKA DE IN + DEN ÄR FÖRVANDLAD TILL ARROWWFUNCTION MED RETURN
  const fetchInitNext = (actionDirection, actionType) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            username: 'Matilda000',
            direction: actionDirection,
            type: actionType
        }),
    }
  };

export const game = createSlice({
    name: 'game',
    initialState: {
        description: '',
        actions: {
            type: null,
            direction: null,
            description: ''
        },
        coordinates: ''
    },
    reducers: {
        setDescription: (store, action) => {
            store.description = action.payload
            console.log(`Description: ${store.description}`)
        },
        setCoordinates: (store, action) => {
            store.coordinates = action.payload
            console.log(`Coordinate: ${store.coordinates}`)
        },
        setActions: (store, action) => {
            store.actions = action.payload

            // console.log(`Action: ${store.actions}`)
            // console.log(store.actions)
            // console.log(store.actions.description)
            // console.log(store.actions.type)
            // console.log(store.actions.direction)
        }
    }
})

export const fetchStart = () => {
    return (dispatch, getState) => {
        // dispatch(game.actions.setLoading(true))
        fetch('https://wk16-backend.herokuapp.com/start', fetchInitStart)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(game.actions.setDescription(json.description))
                dispatch(game.actions.setCoordinates(json.coordinates))
                dispatch(game.actions.setActions(json.actions[0]))
                // dispatch(game.actions.setLoading(false))
            })
    }
}
// HÄR SKA DE IN
export const fetchNext = (actionDirection, actionType) => {
    // const { actionType, actionDirection } = action.payload
    console.log('hello')
    console.log(actionType)
    console.log(actionDirection) 
    return (dispatch, getState) => {
        fetch('https://wk16-backend.herokuapp.com/action', 
        // HÄR SKA DE IN
        fetchInitNext(actionDirection, actionType))
            .then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(game.actions.setDescription(json.description))
                dispatch(game.actions.setCoordinates(json.coordinates))
                dispatch(game.actions.setActions(json.actions))
            })
    }
}

