import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";

const inter = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
