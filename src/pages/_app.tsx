import '../../styles/globals.css'; //global styles
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from '@components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
