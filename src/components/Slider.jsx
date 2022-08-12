import React from 'react'
import { Carousel, Button } from 'react-daisyui';

const Slider = () => {
  return (
    
            <div className='mt-12 mx-auto h-[10rem] w-[30rem] lg:min-w-[50%] max-h-72 min-h-72'>
                <Carousel display='sequential' className='rounded-box'>
                    <Carousel.Item
                        className='w-full h-full bg-no-repeat bg-cover'
                        src='/images/house1.jpg'
                        alt='Construction 1'
                    />
                    <Carousel.Item
                        className='w-full h-full bg-no-repeat bg-cover'
                        src='/images/house2.jpg'
                        alt='Construction 2'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/images/house3.jpg'
                        alt='Construction 3'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/images/house4.jpg'
                        alt='Construction 4'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/images/house5.jpg'
                        alt='Construction 5'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/images/house6.jpg'
                        alt='Construction 6'
                    />
                </Carousel>
            </div>
  )
}

export default Slider