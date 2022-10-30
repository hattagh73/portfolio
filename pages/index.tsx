//* Import NextJS TS
import type { NextPage } from 'next';

//* Import NextJS Features
import Head from 'next/head';

//* Import Home Components
import { HomeHero, HomeTech, HomeProject } from '../components/index';

//* Import Home Page SCSS
import s from '../styles/pages/home/HomeParent.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                {/* <title>Hatta Limited</title> */}
            </Head>
            
            <main>
                <HomeHero />
                <HomeTech />
                <HomeProject />
            </main>
        </>
    )
}
export default Home;