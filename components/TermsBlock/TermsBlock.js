import s from './TermsBlock.module.sass'
import Terms from "../Terms/Terms";
import StartIcon from '../../public/svg/start.svg'
import MftvIcon from '../../public/svg/mftv_round.svg'


function TermsBlock( { options } ) {
   return (
      <div className={ s._ }>
         <div className={ `${ s.start } round-container` }>
            <h2 className={ `${ s.title } round-container__title` }>Сериалы <br/> START</h2>
            <StartIcon className={ s.icon }/>
         </div>
         <div className={ `${ s.mftv } round-container` }>
            <h2 className={ `${ s.title } round-container__title` }>Кино <br/>на Мегафон ТВ</h2>
            <MftvIcon className={ s.icon }/>
         </div>
         <Terms title="Домашний интернет" options={ options }/>
      </div>
   )
}


export default TermsBlock