import s from './Header.module.sass'


function Header() {
   return (
      <header className={ s._ }>
         <h1 className={ s.title }>Подключи тариф «Объединяй! <nobr>Для своих»</nobr></h1>
         <p className={ s.description }>Домашний интернет, мобильная связь и ТВ</p>
         <p className={ s.price }>за <b><span className={ s.oldPrice }>1300 ₽</span> 650 ₽</b> <nobr>в месяц</nobr></p>
      </header>
   )
}


export default Header