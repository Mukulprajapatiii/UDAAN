import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import './App.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
