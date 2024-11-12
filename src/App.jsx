
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterApp from './RouterApp'
import { ThemeContextProvider } from './context/ThemeContext'
function App() {

  return (
    <ThemeContextProvider>
      <div className='w-full h-screen'>
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      </div>
    </ThemeContextProvider>
  )
}

export default App
