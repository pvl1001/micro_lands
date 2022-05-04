import s from './Terms.module.sass'


function Terms( { title, options } ) {

   return (
      <div className={ `${ s._ } round-container` }>
         <h2 className={ `round-container__title` }>{ title }</h2>

         <ul className={ s.terms }>
            { options.map( ( { icon, title, description, link } ) =>
               <li key={ title } className={ s.term }>
                  <div className={ s.term__icon }>{ icon }</div>
                  <p className={ s.term__title }>{ title }</p>
                  <p className={ s.term__description }>{ description }</p>
                  { link && <span className={ s.link }>Подробнее</span> }
               </li>
            ) }
         </ul>

      </div>
   )
}


export default Terms