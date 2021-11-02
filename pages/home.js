import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
// import useAnimatedNavToggler from "../helpers/useAnimatedNavToggler";
// import { motion } from "framer-motion";

// import menu from "../images/menu.svg";
// import close from "../images/x.svg";
// import logo from "../images/devop.png";

function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard - LABLEOEL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in Tailwind!</h2>
      </div>
    </div>
  );
}

export default Home;
