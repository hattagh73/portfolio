//* Import NextJS TS & Features */
import Image from 'next/image';

//* Import Project Details Page SCSS */
import s from '../../styles/pages/project-details/PDetailsHero.module.scss';

const PDetailsHero = () => {

    return (
        <section className={s.pj_details_hero}>
            
            <Image 
                className={s.img_hero}
                src={`https://res.cloudinary.com/dltslq5fh/image/upload/v1666973644/bg-hero/eyqldh9n0zcdv0jajkpc.svg`}
                layout='fill'
                objectFit='cover'
                priority
            />
            
            <div className={`${s.contents_overlay} container`}>
                <h1>
                    Project Title
                </h1>
                <p>sub title</p>
            </div>

        </section>
    )
}
export default PDetailsHero;