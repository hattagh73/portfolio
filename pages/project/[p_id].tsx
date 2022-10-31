//* Import NextJS TS & Features *//
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next';
import Head from 'next/head';

//* Import Types *//
import { iProjects } from '../../types';

//* Import Project Details Components *//
import { PDetailsHero, PDetailsAbout } from '../../components';

const Project: NextPage<{ project: iProjects }> = ({project}) => {
    // console.log(project[0].p_name)
    return (
        <>
            <Head>
                <title>Project Details</title>
            </Head>
            <main>
                <PDetailsHero p_pro_details={project}/>
                <PDetailsAbout p_pro_details={project} />
            </main>
        </>
    )
}
export default Project;

export const getServerSideProps: GetServerSideProps = async (context) => {

    const pID  = Number.parseInt(context.query.p_id);
    const response = await fetch(`http://localhost:3000/data.json`);
    const results:iProjects[] = await response.json();
    
    const result = results.find(r => r.p_id === pID);

   console.log(result)
    return {
        props: {
            project: result
        }
    }

}