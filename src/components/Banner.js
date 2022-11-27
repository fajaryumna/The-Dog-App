import React from 'react';

import Image from '../assets/house-banner.png';

const Banner = () => {
    return (
        <section className='h-full max-h-[640px] mb-4 xl:mb-24'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <h1 className='text-4xl lg:text-[48px] font-semibold leading-none mb-6'>
                        Find Your Favorite Dog on Our Website
                    </h1>
                    <p className='max-w-[480px]'>
                        This application is supported by  <span className='text-violet-700'>                                 <a
                            href="https://thedogapi.com"
                            className="text-indigo-600 active:text-orange-400"
                        >the Dog API
                        </a></span> which provides several lists of dog breeds
                    </p>
                </div>
                <div className='hidden flex-1 lg:flex items-end'>
                    <img src={Image} alt='' />
                </div>
            </div>
        </section>
    );
};

export default Banner;