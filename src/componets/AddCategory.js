import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategory }) => {
    const [value, setValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim().length > 2) {
            setCategory((category) => [value, ...category ]);
            setValue("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                type="text"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory