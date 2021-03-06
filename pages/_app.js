import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/fonts/fonts.css'
import '../public/styles/null.sass'
import '../public/styles/main.sass'


import React, { useEffect } from 'react';
import Head from 'next/head';
import Analytics from "../analytics/Analytics";
import { analyticsScroll, analyticsView, setEventCategory } from "../analytics/events";
import { wrapper } from '../redux/store';
import { useRouter } from 'next/router';
import Script from 'next/script';


function App( { Component, pageProps } ) {
   const router = useRouter()
   setEventCategory( router.route )

   useEffect( () => {
      window.eventFired = []
      analyticsView()
      analyticsScroll()
   }, [] )


   return (
      <>
         <Head>
            <title>NextJS</title>
            <link rel="icon" href="/favicon.ico"/>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-23688716-34"/>
         </Head>
         <Component { ...pageProps }/>
         <Analytics/>
      </>
   )
}

export default wrapper.withRedux( App )