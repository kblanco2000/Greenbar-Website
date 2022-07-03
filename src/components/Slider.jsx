import React from 'react'
import { Carousel, Button } from 'react-daisyui';

const Slider = () => {
  return (
    
            <div className='mt-12 mx-auto h-[10rem] w-[30rem] lg:min-w-[50%] max-h-72 min-h-72'>
                <Carousel display='sequential' className='rounded-box'>
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_8.jpg'
                        alt='Construction 8'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_2.jpg'
                        alt='Construction 2'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_3.jpg'
                        alt='Construction 3'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_4.jpg'
                        alt='Construction 4'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_7.jpg'
                        alt='Construction 7'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_8.jpg'
                        alt='Construction 8'
                    />
                </Carousel>
            </div>
  )
}

export default Slider