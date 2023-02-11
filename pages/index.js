import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomePage from 'components/HomePage'
import Footer from 'components/Footer'

import { Helmet } from 'react-helmet';





export default function Home() {
  return (
    <>
      <Head>
        <title>Solar Quotes Are Us</title>
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Helmet>
          <link rel="icon" href="/HeadIcon.png" type="image/png" />
        </Helmet>

        <meta name="robots" content="all" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqe6iGhufrKU25NUftIIm5yuuV_qi_tqs&libraries=places"></script>

      </Head>
      <main>



        <HomePage />


      </main>

    </>
  )
}
