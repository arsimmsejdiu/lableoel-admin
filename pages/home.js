import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Blogs from '../components/Blogs';

function Home() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <Head>
        <title>Dashboard - LABLEOEL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
      <Blogs />
    </div>
  );
}

export default Home;
