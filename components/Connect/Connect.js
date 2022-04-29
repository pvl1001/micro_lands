import s from './Connect.module.sass'
import CustomInput from "./CustomInput/CustomInput";
import ArrowIcon from '../../public/svg/arrow_right.svg'
import CloseIcon from '../../public/svg/close.svg'
import { connect } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";
import { Formik } from 'formik'
import { string, object } from 'yup'


function Connect( { isHidden, setIsHidden, showModal } ) {

   const validationSchema = object().shape( {
      phone: string().min( 16 ).required(),
      name: string().min( 2 ).required(),
   } )

   const isShow = !isHidden
      ? `${ s._ } d-block`
      : s._

   function submitHandler(actions) {
      showModal( { modal: 'orderThx', bool: true } )
      actions.resetForm()
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

            <Formik
               initialValues={ {
                  name: '',
                  phone: '',
               } }
               validateOnBlur
               validationSchema={ validationSchema }
               onSubmit={ (values, actions) => {
                  submitHandler(actions)
               }  }
            >
               { ( { values, errors, touched, dirty, handleChange, handleBlur, handleSubmit } ) =>
                  <form className={ s.form } onSubmit={ handleSubmit }>
                     <div className={ s.inputs }>
                        <CustomInput
                           className={ s.input }
                           name={ 'name' }
                           placeholder={ 'Имя' }
                           value={ values.name }
                           handleBlur={ handleBlur }
                           handleChange={ handleChange }
                           errors={ errors }
                           touched={ touched }
                           dirty={ dirty }
                        />
                        <CustomInput
                           className={ s.input }
                           name={ 'phone' }
                           placeholder={ 'Номер телефона' }
                           value={ values.phone }
                           handleBlur={ handleBlur }
                           handleChange={ handleChange }
                           errors={ errors }
                           touched={ touched }
                           dirty={ dirty }
                        />
                     </div>

                     <p className={ s.consent }>
                        Нажимая на кнопку, я даю <a href=' ' className={ `${ s.link } link` }>согласие</a> на обработку
                        персональных данных и
                        получение информации об услугах
                     </p>
                     <button type="submit" className={ s.btn }>Подключить <ArrowIcon className={ s.icon }/></button>
                  </form>
               }
            </Formik>

         </div>
      </div>
   )
}


export default connect( null, {
   showModal
} )( Connect )