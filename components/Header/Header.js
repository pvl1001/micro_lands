import s from './Header.module.sass'


function Header() {
   return (
      <header className={ s._ }>
         <h1 className={ s.title }>Подключи тариф «Объединяй! Кино и Сериалы»</h1>
         <p className={ s.description }>Домашний интернет, мобильная связь и сериалы</p>
         <p className={ s.price }>за <b><span className={ s.oldPrice }>1150 ₽</span>  750 ₽</b> в месяц</p>
      </header>
   )
}


export default Header