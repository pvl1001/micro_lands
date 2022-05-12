import s from './Breadcrumbs.module.sass'


function Breadcrumbs() {
   return (
      <ul className={ s._ }>
         <li className={ s.item }><a href="https://home.megafon.ru">Тарифы «Объединяй»</a></li>
         <li className={ `${ s.item } ${ s.item__active }` }>«Кино и Сериалы»</li>
      </ul>
   )
}

export default Breadcrumbs