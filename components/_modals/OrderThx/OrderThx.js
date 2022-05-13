import s from './OrderThx.module.sass'
import { Modal } from "react-bootstrap";
import { showModal } from "../../../redux/slices/modalsSlice";
import { connect } from "react-redux";
import CloseIcon from "../../../public/svg/close.svg";
import { useEffect } from "react";


function OrderThx( { show, showModal, setIsHidden } ) {

   function onHide() {
      showModal( { modal: 'orderThx', bool: false } )
   }

   useEffect( () => {
      setIsHidden( true )
   }, [ show ] )


   return (
      <Modal
         centered
         show={ show }
         onHide={ onHide }
         dialogClassName={ s.modal_dialog }
         contentClassName={ s.modal_content }
      >
         <button
            type="button"
            className="modal-close"
            onClick={ onHide }>
            <CloseIcon/>
         </button>

         <h1 className={ s.title }>Спасибо за заявку!</h1>
         <p className={ s.text }>Наш оператор свяжется с вами в рабочее время с 9 до 21 часов</p>
      </Modal>
   )
}


export default connect( state => ({
      show: state.modals.orderThx.show
   }), {
      showModal
   }
)( OrderThx )