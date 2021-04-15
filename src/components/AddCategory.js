import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(InputValue.trim().length > 2){
            setCategories(category => [InputValue, ...category])
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <input
                    type='text'
                    placeholder='Search...'
                    value={InputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
