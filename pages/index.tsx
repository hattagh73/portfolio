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

    const url = "https://hatta2.vercel.app" || "http://localhost:3005";

    const response = await fetch(`${url}/data.json`);
    const results:iProjects[] = await response.json();

    console.log(url)
    
    return {
        props: {
            projects: results
        }
    }

}