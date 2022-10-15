import './App.scss'
import Footer from './components/Footer'
import Headder from './components/Headder'
import './index.css'
function App() {
  return (
    <div className="Main flex flex-col h-screen p-2 bg-gray-300">
      <Headder />
      <div className="Body flex flex-row justify-center flex-1 overflow-y-auto p-2">
        <div className='flex-1'>
          Content 1
        </div>
        <div className='flex-1'>
          Content 2
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
