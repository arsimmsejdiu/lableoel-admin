import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/devop.png";
import LoginIcon from "../images/log-in.svg";
import LoginIllustration from "../images/login-illustration.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2  bg-purple-900">
      <Head>
        <title>Login - LABLEOEL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="content">
          <div className="main-container">
            <Link href="/">
              <Image className="img" src={logo} width={70} height={70} />
            </Link>
            <div className="main-content">
              <h1 className="heading">Welcome To LABLEOEL</h1>
            </div>
            <div className="form-container">
              <div className="divider-text-container">
                <div className="divider-text">Sign in with your e-mail</div>
              </div>
              <form className="form">
                <input className="input" type="email" placeholder="Email" />
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <button className="submit-button" type="submit">
                  <Image src={LoginIcon} className="icon" />
                  <span className="button-text">Sign in</span>
                </button>
              </form>
              <p className="mt-6 text-xs text-gray-600 text-center">
                <Link
                  href="/home"
                  className="border-b border-gray-500 border-dotted"
                >
                  click here to continue to home page !!!
                </Link>
              </p>
              <p className="mt-8 text-sm text-gray-600 text-center">
                Dont have an account?{" "}
                <Link
                  href="/"
                  className="border-b border-gray-500 border-dotted"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <div className="illustration-container">
            <Image
              className="illustration-image p-10"
              width={500}
              height={500}
              src={LoginIllustration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
