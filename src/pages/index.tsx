import Main from '@components/Layout/Main';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Fantasy House - Home</title>
      </Head>
      <div>
        <h1 className="m-0 text-5xl sm:text-7xl text-center">
          Welcome to
          <Link href="/login">
            <a
              href="#"
              className="hover:underline focus:underline active:underline text-blue-600 no-underline"
            >
              Fantasy House
            </a>
          </Link>
        </h1>
      </div>
    </Main>
  );
}
