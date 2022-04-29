import s from './CustomInput.module.sass'
import { useEffect } from "react";
import $ from "jquery";


function CustomInput( props ) {

   useEffect( () => {
      window.mask = require( '../../../plugins/jquery.mask' )
      $( 'input[name="phone"]' ).mask( '+7(000)000-00-00' )
   }, [] )

   function valid( errors, touch, dirty ) {
      if ( errors && touch ) return s.error
      if ( !errors && dirty ) return s.valid
   }


   return (
      <label className={ `${ s._ } ${ props.className }` }>
         <input
            type="text"
            name={ props.name }
            value={ props.value }
            onInput={ props.handleChange }
            onBlur={ props.handleBlur }
            className={ valid( props.errors[props.name], props.touched[props.name], props.dirty ) }
         />
         <span hidden={ props.value } className={ s.label }>{ props.placeholder }<span>*</span></span>
      </label>
   )
}


export default CustomInput