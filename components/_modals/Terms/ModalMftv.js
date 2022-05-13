import s from './ModalTerms.module.sass'
import { Modal } from "react-bootstrap";
import CloseIcon from "../../../public/svg/close.svg";
import MftvIcon from '../../../public/svg/mftv_round.svg'
import { showModal } from "../../../redux/slices/modalsSlice";
import { connect } from "react-redux";


function ModalMftv( { show, showModal } ) {

   const onHide = () => showModal( { modal: 'mftv', bool: false } )


   return (
      <Modal
         centered
         show={ show }
         onHide={ onHide }
         dialogClassName={ s.modal_dialog }
         contentClassName={ `${ s.modal_content } ${ s.modal_content_mftv }` }
      >
         <img className={ s.mftvImg } src="/img/oscar.webp" alt="mftv"/>

         <div className={ `${ s._ } ${ s.backdrop } ` }>
            <div className={ s.logo }><MftvIcon/> <span>МегаФон ТВ</span></div>
            <p className={ s.description }>Сериалы START собственного производства и мировые премьеры.
               Безлимитный мобильный интернет на просмотр для абонентов МегаФон</p>
         </div>

         <button
            type="button"
            className="modal-close"
            onClick={ onHide }>
            <CloseIcon className={ s.closeIcon }/>
         </button>

      </Modal>
   )
}


export default connect( state => ({
   show: state.modals.mftv.show,
}), {
   showModal
} )( ModalMftv )