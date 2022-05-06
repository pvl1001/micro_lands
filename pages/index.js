import Head from 'next/head';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import ModalCity from "../components/_modals/City/ModalCity";
import Header from "../components/Header/Header";
import Connect from "../components/Connect/Connect";
import OrderBtn from "../components/OrderBtn/OrderBtn";
import { useEffect, useState } from "react";
import OrderThx from "../components/_modals/OrderThx/OrderThx";
import TermsBlock from "../components/TermsBlock/TermsBlock";
import WifiIcon from "../public/svg/wifi.svg";
import InfinityIcon from "../public/svg/infinity.svg";
import PhoneIcon from "../public/svg/phone.svg";
import MessageIcon from "../public/svg/message.svg";
import RouterIcon from "../public/svg/router.svg";
import Terms from "../components/Terms/Terms";
import termsBigStyle from '../components/Terms/TermsBig.module.sass'


export default function IndexPage() {

   const homeWebOptions = [
      {
         icon: <WifiIcon/>,
         title: 'до 500 Мбит/с',
         description: 'Скорость'
      },
      {
         icon: <InfinityIcon/>,
         title: 'Безлимитно',
         description: 'Трафик'
      }
   ]

   const mobileOptions = [
      {
         icon: <PhoneIcon/>,
         title: '2100 минут',
         description: 'Звонки на все номера России',
      },
      {
         icon: <WifiIcon/>,
         title: '50 ГБ',
         description: 'Мобильный интернет',
      },
      {
         icon: <MessageIcon/>,
         title: '50 сообщений',
         description: 'SMS на номера России',
      },
      {
         icon: <RouterIcon/>,
         title: 'Бесплатно',
         description: 'Раздача интернета',
         tooltip: 'Весь объём интернета по тарифу доступен для раздачи через Wi‑Fi или USB без дополнительной платы! При использовании торрент‑ресурсов скорость снижается до 128 Кбит/с.'
      },
      {
         icon: <InfinityIcon/>,
         title: 'Безлимитно',
         description: 'Мессенджеры и звонки на номера МегаФона доступны при любом балансе',
         tooltip: 'Даже при отрицательном балансе можно написать сообщение и звонить на номера МегаФона до ближайшей даты списания абонентской платы. Эти приложения не расходуют интернет по тарифу: WhatsApp, Viber, Telegram, eMotion, ТамТам, Snapchat.'
      },
      {
         icon: <InfinityIcon/>,
         title: 'Безлимитно',
         description: 'Интернет на социальные сети и YouTube',
         tooltip: 'Не расходуют пакет интернета приложения и сайты: ВКонтакте, Одноклассники, TikTok, YouTube.'
      }
   ]

   const [ isHidden, setIsHidden ] = useState( true )

   useEffect( () => {
      isHidden
         ? document.body.classList.remove( 'modal-open' )
         : document.body.classList.add( 'modal-open' )
   }, [ isHidden ] )


   return (
      <>
         <Head>
            <title>NextJS #ДляДома</title>
         </Head>

         <div className="wrapper">
            <Nav/>

            <div className="content">
               <Header/>
               <main className="main">
                  <OrderBtn setIsHidden={ setIsHidden }/>
                  <Connect
                     isHidden={ isHidden }
                     setIsHidden={ setIsHidden }
                  />
                  <TermsBlock options={ homeWebOptions }/>
                  <Terms title="Мобильная связь" propsStyle={ termsBigStyle } options={ mobileOptions }/>
               </main>
            </div>

            <Footer/>
         </div>


         <ModalCity/>
         <OrderThx setIsHidden={ setIsHidden }/>
      </>
   )
}


export const getStaticProps = async () => {
   return { props: {} }
}
