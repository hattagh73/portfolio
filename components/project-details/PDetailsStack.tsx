//* Import NextJS TS & Features *//
import Image from 'next/image';

//* Import Types *//
import { iPropProjectDetails } from '../../types';

//* Import Project Details Page SCSS *//
import s from '../../styles/pages/project-details/PDetailsStack.module.scss';

const PDetailsStack = ({p_pro_details}:iPropProjectDetails) => {

    return (
        <section className={s.stack_section}>
            
            <div className={`${s.stack_grid} container`}>

                <h1>Technology Stack</h1>

                <div className={s.circle}>
                    <Image 
                        className={s.img_about}
                        src={`https://res.cloudinary.com/dltslq5fh/image/upload/v1667236904/3d/cm5tquavwsvebrqowews.png`}
                        alt={`3D Image Man And Desktop`}
                        layout='fill'
                        objectFit='contain'
                        priority
                    />
                </div>

                {   p_pro_details && p_pro_details.p_stack ? (
                        <ul className={s.stack_icons_wrapper}>
                            {   p_pro_details.p_stack.map((item, index) =>
                                <li key={index}>
                                    <Image 
                                        className={s.img_about}
                                        alt={`Technology Icons`}
                                        src={item}
                                        width={34}
                                        height={34}
                                        priority
                                    />
                                </li>
                            )}
                        </ul>
                    ) : (
                        <p className={s.text_no_stack}>No data added because the project is not involving any tech stack.</p>
                    )
                }

            </div>
        </section>
    )
}
export default PDetailsStack;