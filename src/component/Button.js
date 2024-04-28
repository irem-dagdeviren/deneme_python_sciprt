import React, { useState } from 'react';
import axios from 'axios';

const Button = () => {
    const [url, setUrl] = useState(''); // State to store the URL input
    const [result, setResult] = useState(null); // State to store the result

    const handleChange = (event) => {
        setUrl(event.target.value); // Update the URL state with the input value
    };

    const handleClick = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/run-python-code?url=${encodeURIComponent(url)}`);
            setResult(response.data); // Set the result in the state
        } catch (error) {
            console.error('Error executing Python code:', error);
        }
    };

    return (
        <div>
            <input type="text" value={url} onChange={handleChange} placeholder="Enter URL" />
            <button onClick={handleClick}>
                Run Python Code
            </button>
            <pre>{JSON.stringify(result, null, 2)}</pre> {/* Display the result in a formatted JSON string */}
        </div>
    );
};

export default Button;
