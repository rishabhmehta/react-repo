import { useState } from 'react'
import './App.css'
// import Modal from './Modal'

const App = () => {
  const [modal, setModal] = useState(false)

  const handlerFunction = () => {
    setModal((modal) => !modal)
    console.log(modal)
  }

  return (
    <div className='container'>
      <div>modal implementation</div>
      <button onClick={handlerFunction}>open modal</button>
      {modal ? <div className='modal1'>this is a modal</div> : null}
      {modal && <div className='modal'>this is a modal</div>}
    </div>
  )
}

export default App
