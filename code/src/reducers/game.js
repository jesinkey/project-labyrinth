
import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
    name: 'game',
    initialState: {
        description: '',
        actions: [
            {
                type: '',
                direction: '',
                description: '',
            },
        ],
        coordinates: '',
    },
    reducers: {
        setDescription: (store, action) => {
            store.description = action.payload
            // console.log(`Description: ${store.description}`)
        },
        setCoordinates: (store, action) => {
            store.coordinates = action.payload
            // console.log(`Coordinate: ${store.coordinates}`)
        },
        setActions: (store, action) => {
            store.actions = action.payload
            // console.log(`Actions: ${store.actions}`)
            // console.log(store.actions)
            // console.log(store.actions[0])
            // console.log(`Actions type: ${store.actions.type}`)
            // console.log(`Actions direction: ${store.actions.direction}`)
            // console.log(`Actions descritiption: ${store.actions.description}`)
        
        }
    }
})

export const fetchInit = (direction = null, type = null, mode) => {
    if (mode === 'start') {
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'Matilda0001111111111',
        }),
      };
    } else if (mode === 'next') {
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'Matilda0001111111111',
            type: type,
            direction: direction,
        }),
      };
    }
  };

// export const fetchInitStart = () => {
//     return {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: 'Matilda0001111111' }),
//     };
// }

// // HÄR SKA DE IN + DEN ÄR FÖRVANDLAD TILL ARROWWFUNCTION MED RETURN
//   export const fetchInitNext = (actionDirection = null, actionType = null) => {
//     return {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//             username: 'Matilda0001111111',
//             direction: actionDirection,
//             type: actionType,
//         }),
//     }
//   };

export const fetchStart = () => {
    return (dispatch, getState) => {
        // dispatch(game.actions.setLoading(true))
        fetch('https://wk16-backend.herokuapp.com/start', 
        fetchInit(null, null, 'start'))
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                dispatch(game.actions.setDescription(json.description))
                dispatch(game.actions.setCoordinates(json.coordinates))
                dispatch(game.actions.setActions(json.actions))
                // dispatch(game.actions.setLoading(false))
            })
    }
}
// HÄR SKA DE IN
export const fetchNext = (direction, type) => {
    return (dispatch, getState) => {
        fetch('https://wk16-backend.herokuapp.com/action', 
        // HÄR SKA DE IN
        fetchInit(direction, type, 'next'))
            .then(res => res.json())
            .then(json => {
                dispatch(game.actions.setDescription(json.description))
                dispatch(game.actions.setCoordinates(json.coordinates))
                dispatch(game.actions.setActions(json.actions))

            })
    }
}

