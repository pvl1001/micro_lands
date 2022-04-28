import s from './Connect.module.sass'
import CustomInput from "./CustomInput/CustomInput";
import ArrowIcon from '../../public/svg/arrow_right.svg'
import CloseIcon from '../../public/svg/close.svg'
import { connect } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";


function Connect( { isHidden, setIsHidden, showModal } ) {

   const isShow = !isHidden
      ? `${ s._ } d-block`
      : s._

   function submitHandler(e) {
      e.preventDefault()
      showModal( { modal: 'orderThx', bool: true } )
   }


   return (
      <div>
         <div
            hidden={ isHidden }
            className={ s.backdrop }
            onClick={ () => setIsHidden( true ) }
         />

         <div className={ isShow }>
            <div
               className={ s.closeBtn + ' modal-close' }
               onClick={ () => setIsHidden( true ) }>
               <CloseIcon/>
            </div>
            <h2 className={ s.title }>
               Подключить тариф
            </h2>

            <p className={ s.description }>
               Отправьте заявку, чтобы <nobr>подключить тариф</nobr>
            </p>

            <form className={ s.form } onSubmit={ submitHandler }>
               <div className={ s.inputs }>
                  <CustomInput className={ s.input } name={ 'name' } placeholder={ 'Имя' }/>
                  <CustomInput className={ s.input } name={ 'phone' } placeholder={ 'Номер телефона' }/>
               </div>

               <p className={ s.consent }>
                  Нажимая на кнопку, я даю <a href=' ' className={ `${ s.link } link` }>согласие</a> на обработку
                  персональных данных и
                  получение информации об услугах
               </p>

               <button type="submit" className={ s.btn }>Подключить <ArrowIcon className={ s.icon }/></button>
            </form>

         </div>
      </div>

   )
}


export default connect( null, {
   showModal
} )( Connect )