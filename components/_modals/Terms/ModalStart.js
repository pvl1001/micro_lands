import s from './ModalTerms.module.sass'
import { Modal } from "react-bootstrap";
import CloseIcon from "../../../public/svg/close.svg";
import StartIcon from '../../../public/svg/start.svg'
import { showModal } from "../../../redux/slices/modalsSlice";
import { connect } from "react-redux";


function ModalStart( { show, showModal } ) {

   const onHide = () => showModal( { modal: 'start', bool: false } )


   return (
      <Modal
         centered
         show={ show }
         onHide={ onHide }
         dialogClassName={ s.modal_dialog }
         contentClassName={ s.modal_content }
      >
         <video className={ s.video } src="/video/video_start.mp4" autoPlay="autoplay" loop="loop"/>
         <img className={ s.videoImg } src="/img/ezgif 2.png" alt="start"/>

         <div className={ s._ }>
            <StartIcon className={ s.logo }/>
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
   show: state.modals.start.show,
}), {
   showModal
} )( ModalStart )