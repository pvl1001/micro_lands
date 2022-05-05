import s from './TermsBlock.module.sass'
import Terms from "../Terms/Terms";
import MftvIcon from '../../public/svg/mftv_round.svg'


function TermsBlock( { options } ) {
   return (
      <div className={ s._ }>
         <div className={ `${ s.mftv } round-container` }>
            <h2 className={ `${ s.title } round-container__title` }>Кино <br/>на Мегафон ТВ</h2>
            <div className={ s.description }>
               <MftvIcon className={ s.icon }/>
               <div>
                  <p className={ s.description__title }>174 канала</p>
                  <p className={ s.description__text }>пакеты Оптимальный, Хит, Мировое кино</p>
               </div>
            </div>
         </div>
         <Terms title="Домашний интернет" options={ options }/>
      </div>
   )
}


export default TermsBlock