import s from './TermsBlock.module.sass'
import termsSmallStyle from '../Terms/TermsSmall.module.sass'
import Terms from "../Terms/Terms";
import StartIcon from '../../public/svg/start.svg'
import MftvIcon from '../../public/svg/mftv_round.svg'
import { connect } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";


function TermsBlock( { options, showModal } ) {

   function showModalStart() {
      showModal( { modal: 'start', bool: true } )
   }

   function showModalMftv() {
      showModal( { modal: 'mftv', bool: true } )
   }

   return (
      <div className={ s._ }>
         <div className={ `${ s.start } round-container` } onClick={ showModalStart }>
            <h2 className={ `${ s.title } round-container__title` }>Сериалы <br/> START</h2>
            <StartIcon className={ s.icon }/>
         </div>
         <div className={ `${ s.mftv } round-container` } onClick={ showModalMftv }>
            <h2 className={ `${ s.title } round-container__title` }>Кино <br/>на Мегафон ТВ</h2>
            <MftvIcon className={ s.icon }/>
         </div>
         <Terms title="Домашний интернет" propsStyle={ termsSmallStyle } options={ options }/>
      </div>
   )
}


export default connect( null, {
   showModal
} )( TermsBlock )