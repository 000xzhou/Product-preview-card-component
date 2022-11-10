import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './Body'
import Photo from './Photo'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="contrainer">
    <Photo />
    <Body />
    </div>
  </React.StrictMode>
)
