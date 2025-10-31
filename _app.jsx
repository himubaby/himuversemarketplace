import '../styles/globals.css';
import NavBar from '../components/NavBar';
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <main className="p-6 container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
