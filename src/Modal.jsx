import Overlay from './Overlay'
import './App.css'

const Modal = ({ closeModal }) => {
  return (
    <Overlay closeModal={closeModal}>
      <div className='modal'>
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          magnam modi molestiae adipisci nemo commodi quae iste voluptates,
          libero explicabo deserunt, delectus vel dolorem maxime! Aliquid
          deleniti dolor facere ipsam voluptatum omnis, unde impedit iure eaque!
          Nostrum nulla, a, praesentium eveniet ut magni facilis corporis dicta
          temporibus at voluptatem reiciendis.
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </Overlay>
  )
}

export default Modal
