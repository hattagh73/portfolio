//* Import NextJS Features
import Image from 'next/image';
import Link from 'next/link';

//* Import Icon Components
import { Figma, Dribbble, Github } from '../index';

//* Import HomeHero SCSS
import s from '../../styles/pages/home/HomeHero.module.scss';

const HomeHero = () => {
    return (
        <section className={s.hero_section}>
            <div className={`${s.hero_contain} container`}>
                <figure className={s.figure}>
                    <div className={s.img_me}>
                        <Image 
                            src = {`https://res.cloudinary.com/dltslq5fh/image/upload/v1666367734/3d/oyngf2luqjpwefskoiw9.jpg`}
                            alt="Man jumping"
                            priority
                            layout="fill"
                            quality={60}
                        />
                    </div>
                    <figcaption>
                        <ul>
                            <li>
                                <a 
                                    href={`https://dribbble.com/hattalimited`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Dribbble />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={`https://dribbble.com/hattalimited`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Figma />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={`https://github.com/hattagh73`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Github />
                                </a>
                            </li>
                            {/* <li>
                                <a href='/res.pdf' target="_blank" download>Click to download</a>
                            </li> */}
                        </ul>
                        <h3>Hatta Limited.</h3>
                        <p>
                            <span>UI Design. </span>
                            <span>Web Design. </span>
                            <span>Tester</span>
                        </p>
                    </figcaption>
                </figure>
                {/* <Link href={`/project/1`}>Details</Link> */}
            </div>
        </section>
    )
}
export default HomeHero;