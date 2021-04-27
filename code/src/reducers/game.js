
import { createSlice } from '@reduxjs/toolkit'


const fetchInitStart = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'MaHal1' }),
  };

//   const fetchInitNext = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ 
//         username: 'MaHal1',
//         type: '',
//         direction: ''
//     }),
//   };

export const game = createSlice({
    name: 'game',
    initialState: {
        description: '',
        actions: {
            type: '',
            direction: '',
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
            console.log(store.actions)
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

// export const fetchNext = () => {
//     return (dispatch, getState) => {
//         fetch('https://wk16-backend.herokuapp.com/action', fetchInitNext)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json)
//                 dispatch(game.actions.setDescription(json.description))
//                 dispatch(game.actions.setCoordinates(json.coordinates))
//                 dispatch(game.actions.setActions(json.actions[0]))
//             })
//     }
// }

