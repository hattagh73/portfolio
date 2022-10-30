//* Import NextJS TS & Features */
import type { NextPage } from 'next';
import Head from 'next/head';

//* Import Project Details Components */
import { PDetailsHero, PDetailsAbout } from '../../components';

const Project: NextPage = () => {

    return (
        <>
            <Head>
                <title>Project Details</title>
            </Head>
            <main>
                <PDetailsHero />
                <PDetailsAbout />
            </main>
        </>
    )
}
export default Project;