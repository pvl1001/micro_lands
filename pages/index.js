import Head from 'next/head';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import ModalCity from "../components/_modals/City/ModalCity";
// import ModalOrder from "../components/_modals/Order/ModalOrder";
import Header from "../components/Header/Header";
import Terms from "../components/Terms/Terms";
import Connect from "../components/Connect/Connect";
import OrderBtn from "../components/OrderBtn/OrderBtn";
import { useEffect, useState } from "react";
import OrderThx from "../components/_modals/OrderThx/OrderThx";


export default function IndexPage() {

   const [ isHidden, setIsHidden ] = useState( true )

   useEffect( () => {
      isHidden
         ? document.body.style.overflow = ''
         : document.body.style.overflow = 'hidden'

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
                  <Terms/>
                  <Connect
                     isHidden={ isHidden }
                     setIsHidden={ setIsHidden }
                  />
                  <OrderBtn setIsHidden={ setIsHidden }/>
               </main>
            </div>

            <Footer/>
         </div>


         <ModalCity/>
         {/*<ModalOrder/>*/}
         <OrderThx setIsHidden={ setIsHidden }/>
      </>
   )
}


export const getStaticProps = async () => {
   return { props: {} }
}
