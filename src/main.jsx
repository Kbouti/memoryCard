import React from 'react'
import ReactDOM from 'react-dom/client'

import MainPage from './components/master.jsx'

import beginGame from './components/gamePlay.jsx'

beginGame();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
