import s from './TermsBlock.module.sass'
import termsSmallStyle from '../Terms/TermsSmall.module.sass'
import Terms from "../Terms/Terms";
import MftvIcon from '../../public/svg/mftv_round.svg'
import { connect } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";


function TermsBlock( { options, showModal } ) {

   const showModalMftv = () => showModal( { modal: 'mftv', bool: true } )


   return (
      <div className={ s._ }>
         <div className={ `${ s.mftv } round-container` }>
            <h2 className={ `${ s.title } round-container__title` }>Кино <br/>на Мегафон ТВ</h2>
            <div className={ s.description }>
               <MftvIcon className={ s.icon } onClick={ showModalMftv }/>
               <div>
                  <p className={ s.description__title }>174 канала</p>
                  <p className={ s.description__text }>пакеты Оптимальный, Хит, Мировое кино</p>
               </div>
            </div>
         </div>
         <Terms title="Домашний интернет" propsStyle={ termsSmallStyle } options={ options }/>
      </div>
   )
}


export default connect( null, {
   showModal
} )( TermsBlock )