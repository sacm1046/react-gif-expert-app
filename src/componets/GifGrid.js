import React from 'react'
import GiftGridItem from './GiftGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeInUp'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GiftGridItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
