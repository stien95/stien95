import Head from "next/head";
import style from "@/styles/404.module.css";
import Link from "next/link";

export default function error404() {
  return (
    <main className={style.error404}>
      <Head>
        <title>404 error</title>
      </Head>
      <h1>404 error</h1>
      <p>Sorry, this page not found</p>
      <Link href="/">Go to the main page</Link>
    </main>
  );
}
