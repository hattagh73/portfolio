//* Import Local Project Data
import { project_api } from '../../config';

//* Import NextJS TS & Features *//
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next';
import Head from 'next/head';

//* Import Types *//
import { iProjects } from '../../types';

//* Import Project Details Components *//
import { PDetailsHero, PDetailsAbout, PDetailsStack } from '../../components';

const ProjectDetail: NextPage<{ project: iProjects }> = ({project}) => {
    return (
        <>
            <Head>
                <title>{`P${project.p_id} | ${project.p_name} 📌`}</title>
            </Head>
            <main>
                <PDetailsHero p_pro_details={project}/>
                <PDetailsAbout p_pro_details={project} />
                <PDetailsStack p_pro_details={project} />
            </main>
        </>
    )
}
export default ProjectDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {

    const pID = context.query.p_id as string;
    
    const res = await fetch(`${project_api}/data.json`);

    const project:iProjects[] = await res.json();
    
    const result = project.find(r => r.p_id === Number.parseInt(pID))
    
    return {
        props: {
            project: result
        }
    }
    
}
