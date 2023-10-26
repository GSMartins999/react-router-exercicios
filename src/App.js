import HomePage from "./pages/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

    const getAllUsers = () => {
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
      {headers: {Authorization: "giovanni-souza-krexu"}})
      .then((response)=> {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      })
    }

    useEffect(() => {
      getAllUsers()
    }, [])

  return (
    <ChakraProvider>
      {
      users.map((user) => {
        return <HomePage key={user.name} name={user.name} id={user.id}/>
      })
      } 
    </ChakraProvider>
  );
}

export default App;
