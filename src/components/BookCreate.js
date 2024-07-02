import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    // Handle input change event
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // Handle form submit event
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        onCreate(title); // Call the onCreate function with the title
        setTitle(''); // Clear the input field
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                    className="input" 
                    value={title} 
                    onChange={handleChange} 
                />
                <button className="button" type="submit">
                    Create!
                </button>
            </form> 
        </div>
    );
}

export default BookCreate;
