import s from './Header.module.sass'


function Header() {
   return (
      <header className={s._}>
         <h1 className={s.title}>Подключи тариф «ДляДома Интернет»</h1>
         <p className={s.description}>Высокоскоростной домашний интернет</p>
         <p className={s.price}>за <b>450 ₽</b> в месяц</p>
      </header>
   )
}


export default Header