import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppTheme } from './styles/theme/appTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
    <App />
    </AppTheme>
  </React.StrictMode>,
)
