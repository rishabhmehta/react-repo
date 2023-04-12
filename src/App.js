// import { useState } from 'react'
import './App.css'
// import Modal from './Modal'

function App() {
  // const [modalOpen, setModalOpen] = useState(false)
  // const colors = ['red', 'yellow', 'green']

  // const handleModal = () => {
  //   setModalOpen(!modalOpen)
  // }

  return (
    <div className='App'>
      {/* <div className='App'>
        <h1>React Modal Demo</h1>
        <p>
          This is a demo of how to use portals to create a modal component in
          React.
        </p>
        <button onClick={handleModal}>Open Modal</button>

        {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
      </div>
      <div style={{ display: 'flex', width: '100vw', gap: '2rem' }}>
        <div
          style={{
            height: '50px',
            outline: '1px solid black',
            flexBasis: '33.33%',
          }}
        >
          Div 1
        </div>
        <div
          style={{
            height: '50px',
            outline: '1px solid black',
            flexBasis: '33.33%',
          }}
        >
          Div 2
        </div>
        <div
          style={{
            height: '50px',
            outline: '1px solid black',
            flexBasis: '33.33%',
          }}
        >
          Div 3
        </div>
      </div>
      <div style={{ display: 'flex', width: '100vw', gap: '2rem' }}>
        <div
          style={{
            height: '50px',
            outline: '1px solid black',
            flexBasis: '33.33%',
          }}
        >
          Div 4
        </div>
        <div
          style={{
            height: '50px',
            outline: '1px solid black',
            flexBasis: '33.33%',
          }}
        >
          Div 5
        </div>
      </div> */}
      <Button color='red' title='Aditi'></Button>
      <Button color='yellow' title='Aayush'></Button>
      <Button color='green' title='Rishabh'></Button>
      <Button color='rebeccapurple' title='Neev'></Button>
      <Button color='blue' title='Dadi'></Button>
    </div>
  )
}

export default App

const Button = ({ title, color }) => {
  const names = [
    {
      firstName: 'Aayush',
      lastName: 'Mehta',
      favColor: 'yellow',
    },
    {
      firstName: 'Rishabh',
      lastName: 'Mehta',
      favColor: 'green',
    },
    {
      firstName: 'Aditi',
      lastName: 'Singh',
      favColor: 'red',
    },
    {
      firstName: 'Neev',
      lastName: 'Mehta',
      favColor: 'rebeccapurple',
    },
    {
      firstName: 'Dadi',
      lastName: 'Mehta',
      favColor: 'blue',
    },
  ]

  return (
    <>
      <button style={{ background: color }}>{title}</button>
      {names.map((name) => {
        if (name.firstName === title) {
          return (
            <p style={{ color: color }}>
              {name.firstName} {name.lastName}
            </p>
          )
        }
        return null
      })}
    </>
  )
}

const Heading = () => {
  return (
    <>
      <h1>heading</h1>
      <h2>heading</h2>
    </>
  )
}
