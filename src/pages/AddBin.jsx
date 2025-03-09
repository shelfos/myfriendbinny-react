import React from 'react';
import { useState } from 'react';

const AddBin = () => {
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Bin Name:
                <input
                    type="text"
                    name="binName"
                    value={inputs.binName || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Bin Description:
                <input
                    type="text"
                    name="binDescription"
                    value={inputs.binDescription || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />     

        </form>
    )
}

export default AddBin;
