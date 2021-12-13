import { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch('https://ip.eton.dev/raw');
      const json = await res.json();

      setData(json);
    })();
  }, []);

  return (
    <>
    <div className="relative bg-gray-900 overflow-hidden font-mono dark:bg-gray-900 flex flex-col h-screen justify-between">
      <Navbar>
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Your IP is</span>{' '}
              <span className="px-2 text-gray-400 xl:inline bg-gray-800 rounded-md">{data.ip}</span>
            </h1>
            <hr className='my-4 text-red-600'/>
            <p className="inline-block align-middle mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your ISP is <a className="text-gray-400 italic">{data.asOrg}</a> <a className='text-sm'>(AS{data.asn})</a>.
            </p>
            <br/>
            <p className="inline-block align-middle mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your IP is registered in <a className="text-gray-400 italic">{data.location}</a>.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="https://ip.eton.dev/raw"
                  target={'_blank'}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
                >
                  View raw data
                </a>
              </div>
            </div>
          </div>
        </main>
      </Navbar>
      <Footer />
    </div>
    </>
  );
}