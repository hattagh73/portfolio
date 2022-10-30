//* Import Tech Data
import tech_data from './tech_data';

//* Import NextJS Features
import Image from 'next/image';

//* Import HomeHero SCSS
import s from '../../styles/pages/home/HomeTech.module.scss';

const HomeTech = () => {
    
    return (
        <section className={s.tech_section}>
            <div className={`container`}>

                <div className={s.tech_grid}>

                    <div className={s.tech_col1}>
                        <h1 className={s.title}>Technology <span>Stack</span></h1>
                        <p>A list of familiar <span>technology stack</span> in web development</p>
                    </div>

                    <div className={s.tech_col2}>
                        {   tech_data && tech_data.tech_data.map(tech =>
                            <div className={s.card} key={tech.id}>
                                <div className={s.card_content}>
                                    <h1>{tech.title.toUpperCase()}</h1>
                                    <ul>
                                        {   tech && tech.stacks.map((stack, index) =>
                                            <li key={index}>{stack}</li>
                                        )}
                                    </ul>
                                </div>
                                <Image 
                                    className={s.img_mesh}
                                    alt="Background image mesh gradients"
                                    src={tech.img}
                                    layout="fill"
                                    priority
                                />
                                <Image 
                                    className={s.img_noise}
                                    alt="Background image noise"
                                    src={`https://res.cloudinary.com/dltslq5fh/image/upload/v1666447460/mesh-grad/ylao1jrrmf1e5wzkvpj5.png`}
                                    layout="fill"
                                    priority
                                />
                            </div>
                        )}

                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default HomeTech;