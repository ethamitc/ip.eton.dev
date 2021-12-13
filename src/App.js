import { useEffect, useState } from 'react';
import Navbar from './navbar';

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
    <div className="relative bg-gray-50 overflow-hidden font-mono dark:bg-gray-900">
      <Navbar>
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hello,</span>{' '}
              <span className="px-2 text-red-600 xl:inline bg-gray-800 rounded-md">{data.ip}</span>
            </h1>
            <p className="inline-block align-middle mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your Internet Service Provider is <a className="text-red-500">{data.asOrg}</a> <a className='text-sm'>(AS{data.asn})</a>
            </p>
          </div>
        </main>
      </Navbar>
    </div>
  );
}
