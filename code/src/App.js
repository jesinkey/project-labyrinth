import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { StartPage } from 'components/StartPage'
import { GamePage } from 'components/GamePage'

import { game } from 'reducers/game'
// import { ui } from 'reducers/ui'
import { LoadingIndicator } from 'components/LoadingIndicator';

const reducer = combineReducers ({
  game: game.reducer,
  // ui: ui.reducer,
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
        {/* <LoadingIndicator /> */}
          <Switch>
            <Route path='/' exact>
              <StartPage />
            </Route>
            <Route path='/GamePage/'>
              <GamePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
