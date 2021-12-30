import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";

 import { contextProvider } from '../context'

export default function App({ Component, pageProps }) {
  return (
    <contextProvider>
    <Component {...pageProps} />
     </contextProvider>
  );
}
