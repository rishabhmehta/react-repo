import { createPortal } from 'react-dom'
import './App.css'

const Overlay = ({ closeModal, children }) => {
  return createPortal(
    <div className='overlay' onClick={closeModal}>
      {children}
    </div>,
    document.getElementById('portal')
  )
}

export default Overlay
