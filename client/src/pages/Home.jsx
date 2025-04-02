import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);
  const APIURL= import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${APIURL}users`);
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);
  

  return (
    <div>
      {users?.map((e) => (
        <>
          <p>{e.user_name}</p>
          <p>{e.email}</p>
        </>
      ))}
    </div>
  )
}

export default Home