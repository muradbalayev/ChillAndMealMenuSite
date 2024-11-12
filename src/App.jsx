
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterApp from './RouterApp'
function App() {

  return (
    <div className='w-full h-screen'>
      <BrowserRouter>
      <RouterApp/>
      </BrowserRouter>
    </div>
  )
}

export default App
