import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Blogs from '../components/Blogs';

function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard - LABLEOEL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Blogs />
      {/* <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in Tailwind!</h2>
      </div> */}
    </div>
  );
}

export default Home;
