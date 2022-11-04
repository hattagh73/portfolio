//* Import NextJS Features *//
import Image from 'next/image';
import Link from 'next/link';

//* Import Swiper Core & Modules & Styles *//
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

//* Import Types *//
import { iPropProjects } from '../../types';

//* Import HomeHero SCSS *//
import s from '../../styles/pages/home/HomeProject.module.scss';

const HomeProject = ({ p_projects }:iPropProjects) => {
    
    return (
        <section className={`${s.pj_section} container`}>
            
            <h2 className={s.main_title}>
                List <span>Project</span>
            </h2>

            <p className={s.main_desc}>
                A list of my previous and recent projects
            </p>

            {   p_projects && (
                <Swiper
                    className={s.swiper}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={10}
                    // centeredSlides={true}
                    // loop
                    
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                    }}
                    
                >
                   {    p_projects.map((p, index) =>
                        
                        <SwiperSlide key={p.p_id} className={s.slide}>
                            <Link href={`/project/${p.p_id}`}>
                                <a>
                                    <div className={s.card}>
                                        
                                        <div className={s.card_title}>
                                            <h3>{p.p_name}</h3>

                                            {/* Circle Shape */}
                                            <div 
                                                className={`${s.circle} ${ index % 2 === 0 ? `${s.c_tl}` : `${s.c_br}` }`}
                                            >
                                            </div>
                                        </div>

                                        <p>{p.p_category}</p>
                                        
                                    </div>
                                </a>
                            </Link>
                        </SwiperSlide>
                        
                    )}
                </Swiper>
            )}
            
        </section>
    )
}
export default HomeProject;
