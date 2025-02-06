import React from 'react'
import { useSelector } from 'react-redux'

const BannerHome = () => {

    const bannerData = useSelector(state => state.movieoData.bannerData)
    const imageURL = useSelector(state => state.movieoData.imageURL)

    console.log("banner Home", bannerData)
  return (
    <section className='w-full h-full'>
        <div className="flex">
            {
                bannerData.map((data, index) => {
                    return (
                        <div key={index} className='w-full h-full'>
                            <div>
                                <img src={imageURL+data.backdrop_path} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
       
    </section>
  )
}

export default BannerHome


// style={{minWidth: "100%", minHeight: "100%"}}