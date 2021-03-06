import s from './Footer.module.sass';


function Footer() {

   return (
      <footer className={ s._ }>
         <div className={ s.copyright }>
            <div className={ s.copyright__age }>6+</div>
            <div className={ s.copyright__text }>© 2022 <br/> ПАО «Мегафон»</div>
         </div>
         <p className={ s.transfer }>
            Услуги предоставляются ООО «Нэт Бай Нэт Холдинг»и ПАО «МегаФон» на территории присутствия операторов при наличии технической возможности. Подробности на megafon.ru
         </p>
         <p className={ s.policy }>
            Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других
            пользовательских данных, в соответствии с <a href="https://www.megafon.ru/ad/politika"
                                                         target="_blank"
                                                         rel="noreferrer">Политикой конфиденциальности</a>.
         </p>

         <div className={ s.speedtest }>
            <img src="/svg/speedtest-awards.svg" alt="speedtest"/>
         </div>
      </footer>
   )
}

export default Footer