import s from './CustomInput.module.sass'
import { useEffect, useState } from "react";
import $ from "jquery";


function CustomInput( props ) {

   const [ value, setValue ] = useState( '' )

   useEffect( () => {
      window.mask = require( '../../../plugins/jquery.mask' )
      $( 'input[name="phone"]' ).mask( '+7(000)000-00-00' )
   }, [] )

   return (
      <label className={ `${ s._ } ${ props.className }` }>
         <input type="text" name={ props.name } onInput={ ( e ) => setValue( e.target.value ) }/>
         <span hidden={ value } className={ s.label }>{ props.placeholder }<span>*</span></span>
      </label>
   )
}


export default CustomInput