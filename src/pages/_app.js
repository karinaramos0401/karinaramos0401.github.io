import Header from "@/components/Header";
import "@/styles/globals.scss";
import { Sen } from "next/font/google";

const sen = Sen({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={sen.className + " wrapper"}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <span class="author-tag">designed & created by Karina Ramos </span>
    </div>
  );
}
