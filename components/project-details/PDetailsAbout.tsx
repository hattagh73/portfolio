//* Import NextJS TS & Features
import Image from 'next/image';

//* Import Project Details Page SCSS
import s from '../../styles/pages/project-details/PDetailsAbout.module.scss';

const PDetailsAbout = () => {
    
    return (
        <section className={s.about_section}>

            <div className={`${s.about_grid} container`}>
                <div className={s.about_col1}>
                    <h2 className={s.about_title}>About Project</h2>
                    <ul className={s.desc_wrap}>
                        <li className={s.desc_item}>Description 1</li>
                        <li className={s.desc_item}>Description 2</li>
                        <li className={s.desc_item}>Description 3</li>
                    </ul>
                </div>
                <div className={s.about_col2}>
                    <div className={s.circle}>
                        <Image 
                            className={s.img_about}
                            src={`https://res.cloudinary.com/dltslq5fh/image/upload/v1667065567/3d/luzn2x8oamxvie6s0b8j.png`}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default PDetailsAbout;