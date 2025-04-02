import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [user, setuser] = useState({
        user_name: "",
        email: "",
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        // setuser({...user, [name]: value});
        setuser({...user, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault;
        const { data } = await axios.post(`http://localhost:8080/auth`);
        console.log("Hrllo");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="user_name" 
                    id=""                                                                           
                    value={user.user_name} 
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    name="email" 
                    id=""
                    value={user.email} 
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup