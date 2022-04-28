import s from './Terms.module.sass'
import WifiIcon from '../../public/svg/wifi.svg'
import InfinityIcon from '../../public/svg/infinity.svg'


function Terms() {

   const terms = [
      {
         icon: <WifiIcon/>,
         title: '100 Мбит/с',
         description: 'Максимальная скорость интернет-соединения, предусмотренная тарифом'
      },
      {
         icon: <InfinityIcon/>,
         title: 'Трафик',
         description: 'Безлимитно'
      }
   ]


   return (
      <div className={ `${ s._ } terms` }>
         <h2 className={ s.title }>Условия тарифа</h2>

         <ul>
            { terms.map( ( { icon, title, description } ) =>
               <li key={ title } className={ s.term }>
                  <div className={ s.term__icon }>{ icon }</div>
                  <p className={ s.term__title }>{ title }</p>
                  <p className={ s.term__description }>{ description }</p>
               </li>
            ) }
         </ul>

      </div>
   )
}


export default Terms