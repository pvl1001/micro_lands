import s from './Terms.module.sass'
import Tippy from "@tippyjs/react";
import { tippyAttrs } from "../../plugins_config";
import CloseIcon from '../../public/svg/close.svg'
import { useState } from "react";


function Terms( { title, options } ) {

   const [ tippyVisible, setTippyVisible ] = useState( [] )

   const isVisible = ( i ) => typeof window !== 'undefined' && window.innerWidth < 1024
      ? tippyVisible[i] : undefined

   function onVisible( i ) {
      if ( typeof window !== 'undefined' && window.innerWidth < 1024 ) {
         const newArr = [ ...tippyVisible ]
         newArr[i] = !newArr[i]
         setTippyVisible( newArr )
      }
   }


   return (
      <div className={ `${ s._ } round-container` }>
         <h2 className={ `round-container__title` }>{ title }</h2>

         <ul className={ s.terms }>
            { options.map( ( { icon, title, description, tippy }, i ) =>
               <li key={ title } className={ s.term }>
                  <div className={ s.term__icon }>{ icon }</div>
                  <p className={ s.term__title }>{ title }</p>
                  <p className={ s.term__description }>{ description }</p>
                  { tippy && <Tippy
                     { ...tippyAttrs }
                     maxWidth={ 460 }
                     visible={ isVisible( i ) }
                     onClickOutside={ () => onVisible( i ) }
                     content={ <>
                        { tippy }
                        <button
                           type="button"
                           className={ s.tippyCloseBtn }
                           onClick={ () => onVisible( i ) }
                        ><CloseIcon/>
                        </button>
                     </> }>
                     <span
                        className={ s.link }
                        onClick={ () => onVisible( i ) }
                     >Подробнее
                     </span>
                  </Tippy> }
               </li>
            ) }
         </ul>

      </div>
   )
}


export default Terms