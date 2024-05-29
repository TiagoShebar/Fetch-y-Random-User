import { useEffect, useState } from "react"
import UsersView from "./"

const UsersList = () => {

    const paginaApi = "https://randomuser.me/api/?results=5";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(paginaApi)
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.log(error))
    }, [])
    
    return (
        <UsersView users={users}/>
    )
}

export default UsersList
