import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen px-2 flex flex-col justify-center items-center h-screen text-white">
      <Head>
        <title>Fantasy House - Home</title>
      </Head>
      <main>
        <h1 className="m-0 text-5xl sm:text-7xl text-center">
          Welcome to
          <Link href="/login">
            <a href="#" className="hover:underline focus:underline active:underline text-blue-600 no-underline">
              Fantasy House
            </a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
