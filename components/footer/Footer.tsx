//* Import NextJS Features
import Link from 'next/link';
import Image from 'next/image';

//* Import Footer Data
import ft_data from './footer_data';

//* Import Icon
import { Dribbble, Figma, Github } from '../index';

//* Import Footer Component SCSS
import s from '../../styles/components/Footer.module.scss';

const Footer = () => {
    
    return (
        <footer className={s.ft}>

            {/* <div className={s.circle}></div> */}

            <div className={`${s.grid} container`}>

                {   ft_data.map(itm =>
                    <div className={s.ft_col} key={itm.id}>
                        <h3>{itm.title}</h3>
                        <ul>
                            {   itm.links.map((link, index) =>
                                <li key={index}>
                                    {   link.internal ? (
                                        <Link href={link.url}>
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a 
                                            href={link.url} 
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            )} 
                        </ul>
                    </div>
                )}

                <div className={s.ft_col_co}>
                    <h3>Hatta Limited.</h3>
                    <p>
                        Explore the vast world of digital on multi-platform. Mainly in user interface and design.
                    </p>
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
                    </ul>
                </div>

                {/* Image Man */}
                <div className={s.img_man}>
                    <Image 
                        src={`https://res.cloudinary.com/dltslq5fh/image/upload/v1666343734/3d/glyllwvofjk4kcbocdv4.png`}
                        alt="3D Illustration Man Standing"
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                    />
                </div>

                <div className={s.img_cat}>
                    <Image 
                        src={`https://res.cloudinary.com/dltslq5fh/image/upload/v1666353743/3d/mq7q2jgtmvytlslvjoay.png`}
                        alt="3D Illustration Cat Chilling"
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                    />
                </div>

            </div>

            {/* Foot Note */}
            <div className={s.fn_section}>
                <div className={`${s.fn_content} container`}>
                    <p>Made via <a
                            href={`https://reactjs.org/`}
                            target="_blank"
                            rel="noreferrer" 
                        >ReactJS
                        </a> & <a
                            href={`https://nextjs.org/`}
                            target="_blank"
                            rel="noreferrer" 
                        >NextJS
                        </a>
                    </p>
                    <p>© 2022 Hatta Limited. Some rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;