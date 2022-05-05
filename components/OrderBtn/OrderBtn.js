import s from './OrderBtn.module.sass'
import ArrowIcon from '../../public/svg/arrow_right.svg'


function OrderBtn( { setIsHidden } ) {
   return (
      <button
         className={ `${ s._ } btn btn-fiolet` }
         onClick={ () => setIsHidden( false ) }>
         Подключить <ArrowIcon/>
      </button>
   )
}


export default OrderBtn