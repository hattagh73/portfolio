//* Import NextJS/React TS/Features 
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

//* Import Components
import LandingPageLayout from '../components/LandingPageLayout';

//* Import Global SCSS
import '../styles/global.scss';

function MyApp({ Component, pageProps}: AppProps) {

    // useEffect(() => {
    //     console.log("App Mounter");
    // }, [])

    return (
        <>
            {/* <Head>
                
            </Head> */}
            <LandingPageLayout>
                <Component {...pageProps} />
            </LandingPageLayout>
        </>
    )
    
}
export default MyApp;