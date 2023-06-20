import type { AppProps } from 'next/app';
import HouseModule from '../modules/house';
import  '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <HouseModule/>
}

export default MyApp;