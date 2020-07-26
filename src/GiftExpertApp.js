import React, { useState } from 'react'
import AddCategory from './componets/AddCategory'
import GifGrid from './componets/GifGrid'

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    /*     const handleAdd = () => {
            setCategories([
                ...categories,
                'HanterXHanter'
            ])
        } */

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategory={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp
