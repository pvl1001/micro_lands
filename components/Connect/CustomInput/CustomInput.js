import s from './CustomInput.module.sass'
import { useEffect, useState } from "react";
import $ from "jquery";
import ErrorIcon from '../../../public/svg/close_red.svg'
import ValidIcon from '../../../public/svg/valid.svg'


function CustomInput( props ) {
   const [ focus, setFocus ] = useState( false )

   useEffect( () => {
      window.mask = require( '../../../plugins/jquery.mask' )
      $( 'input[name="phone"]' ).mask( '+7(000)000-00-00' )
   }, [] )

   function valid( errors, touch, dirty ) {
      if ( errors && touch ) return s.error
      if ( !errors && dirty ) return s.valid
   }

   function blurHandler( e ) {
      e.preventDefault()
      props.handleBlur( e )
      setFocus( false )
   }

   function clearValue( e ) {
      e.preventDefault()
      props.setFieldValue( props.name, '' )
   }


   return (
      <label className={ `${ s._ } ${ props.className }` }>
         <input
            type="text"
            name={ props.name }
            value={ props.value }
            onInput={ props.handleChange }
            onBlur={ blurHandler }
            onFocus={ () => setFocus( true ) }
            className={ valid( props.errors[props.name], props.touched[props.name], props.dirty ) }
         />

         <button
            type="button"
            tabIndex="-1"
            onMouseDown={ clearValue }
            hidden={ !focus }
            className={ s.focusBtn }>
            <ErrorIcon/>
         </button>

         { !focus && <>
            <button
               type="button"
               onClick={ clearValue }
               hidden={ !props.errors[props.name] || !props.touched[props.name] }
               className={ s.errorBtn }>
               <ErrorIcon/>
            </button>

            <ValidIcon className={ s.validIcon }
                       hidden={ props.errors[props.name] || !props.touched[props.name] }/></>
         }

         <span hidden={ props.value } className={ s.label }>{ props.placeholder }<span>*</span></span>
      </label>
   )
}


export default CustomInput