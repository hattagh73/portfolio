//* Import NextJS TS & Features *//
import Image from 'next/image';

//* Import Types *//
import { iPropProjectDetails } from '../../types';

//* Import Project Details Page SCSS *//
import s from '../../styles/pages/project-details/PDetailsHero.module.scss';

const PDetailsHero = ({p_pro_details}:iPropProjectDetails) => {

    return (
        <section className={s.pj_details_hero}>

            {/* Hero Background Image */}
            <Image 
                className={s.img_hero}
                src={`https://res.cloudinary.com/dltslq5fh/image/upload/v1666973644/bg-hero/eyqldh9n0zcdv0jajkpc.svg`}
                alt={`Image Hero Background`}
                layout='fill'
                objectFit='cover'
                priority
            />
            
            {/* Hero Project Titles */}
            <div className={`${s.contents_overlay} container`}>
                <p>{p_pro_details.p_category}</p>
                <h1>{p_pro_details.p_name}</h1>
            </div>

        </section>
    )
}
export default PDetailsHero;