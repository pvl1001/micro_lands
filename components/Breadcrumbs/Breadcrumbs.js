import s from './Breadcrumbs.module.sass'


function Breadcrumbs() {
   return (
      <ul className={ s._ }>
         <li className={ s.item }><a href="https://home.megafon.ru/internet">Тарифы «ДляДома»</a></li>
         <li className={ `${ s.item } ${ s.item__active }` }>«Интернет»</li>
      </ul>
   )
}

export default Breadcrumbs