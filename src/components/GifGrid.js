import React from 'react';
import { useFetchGift } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGift(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>loading...</p>}
            <div className="body-card">
                {
                    images.map((img) => {
                        return(
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        )
                    })

                }
            </div>

        </>
    )
}
