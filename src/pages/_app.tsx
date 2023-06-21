// import type { AppProps } from 'next/app';
// import HouseModule from '../modules/home';
// import  '../styles/globals.scss';


// function MyApp({ Component, pageProps }: AppProps) {
//     return <HouseModule/>
// }

// export default MyApp;


import type { AppProps } from 'next/app';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
   
  );
}

export default MyApp;
