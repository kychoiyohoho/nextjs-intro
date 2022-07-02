import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
        <footer>안녕하세요</footer>
      </Layout>
    </div>
  );
}

export default MyApp;
