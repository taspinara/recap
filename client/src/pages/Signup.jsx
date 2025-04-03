import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({
        user_name: "",
        email: "",
    });
    const APIURL= import.meta.env.VITE_API_URL;

    const handleChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name)
        // setUser({...user, [name]: value});
        setUser((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${APIURL}auth`, user);
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="user_name" 
                    id="user_name"
                    value={user.user_name} 
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={user.email} 
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup