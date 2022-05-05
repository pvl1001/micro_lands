import s from './Terms.module.sass'
import Tippy from "@tippyjs/react";
import { tippyAttrs } from "../../plugins_config";


function Terms( { title, options } ) {

   return (
      <div className={ `${ s._ } round-container` }>
         <h2 className={ `round-container__title` }>{ title }</h2>

         <ul className={ s.terms }>
            { options.map( ( { icon, title, description, tooltip } ) =>
               <li key={ description } className={ s.term }>
                  <div className={ s.term__icon }>{ icon }</div>
                  <p className={ s.term__title }>{ title }</p>
                  <p className={ s.term__description }>{ description }</p>
                  { tooltip &&
                     <Tippy
                        { ...tippyAttrs }
                        maxWidth={ 460 }
                        content={ tooltip }>
                        <span className={ s.link }>Подробнее</span>
                     </Tippy> }
               </li>
            ) }
         </ul>

      </div>
   )
}


export default Terms