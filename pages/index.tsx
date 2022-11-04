//* Import NextJS TS & Features *//
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next'
import Head from 'next/head';

//* Import Home Components *//
import { HomeHero, HomeTech, HomeProject } from '../components/index';

//* Import Types *//
import { iProjects } from '../types';

//* Import Home Page SCSS *//
import s from '../styles/pages/home/HomeParent.module.scss';

const Home: NextPage<{ projects: iProjects[] }> = ({ projects }) => {
    
    return (
        <>
            <Head>
                <title>Hatta Limited</title>
            </Head>
            
            <main>
                <HomeHero />
                <HomeTech />
                <HomeProject p_projects={projects}/>
            </main>
        </>
    )
}
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {

    // const response = await fetch(`http://localhost:3000/data.json`);
    const response = await fetch(`https://projects-blue.vercel.app/data.json`);
    const results:iProjects[] = await response.json();
    
    return {
        props: {
            projects: results
        }
    }

}