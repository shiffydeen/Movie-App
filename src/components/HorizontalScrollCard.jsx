import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const HorizontalScrollCard = ({data = [], heading, trending, media_type}) => {

    const containerRef = useRef();

    const handleNext = () => {
        containerRef.current.scrollLeft +=300
    }

    const handlePrevious = () => {
        containerRef.current.scrollLeft -=300
    }

  return (
    <div className='container mx-auto px-3 my-5'>
        <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white capitalize'>{heading}</h2>
        <div className='relative'>
            <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none'>
                {
                data.map((data, index) => {
                    return (
                        <Card key={data.id+"heading"+index} data={data} index={index+1} trending={trending} media_type={media_type}/>
                    )
                })
                }
            </div>

            <div className='absolute top-0 hidden lg:flex justify-between items-center w-full h-full'>
                <button onClick={handlePrevious} className='bg-white rounded-full p-1 text-black -ml-2 z-10'>
                    <FaAngleLeft />
                </button>
                <button onClick={handleNext} className='bg-white rounded-full p-1 text-black -mr-2 z-10'>
                    <FaAngleRight />
                </button>
            </div>

        </div>
    </div>
  )
}

export default HorizontalScrollCard
