//* Import NextJS TS
import type { AppProps } from 'next/app';

//* Import NextJS Features
import Head from 'next/head';

//* Import Components
import LandingPageLayout from '../components/LandingPageLayout';

//* Import React Features
import { useEffect } from 'react';

//* Import Global SCSS
import '../styles/global.scss';

function MyApp({ Component, pageProps}: AppProps) {

    useEffect(() => {
        console.log("App Mounter");
    }, [])

    return (
        <>
            <Head>
                <title>Hatta Limited</title>
            </Head>
            <LandingPageLayout>
                <Component {...pageProps} />
            </LandingPageLayout>
        </>
    )
    
}
export default MyApp;