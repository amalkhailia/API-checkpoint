import React, {useState,useEffect} from 'react';
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import  "./UsersList.css";

const UsersList = () => {
    const [ListUsers, setstateListUsers] = useState([])
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{setstateListUsers(response.data)})
   
}, [])
    return (
        <div className="userList">
            {ListUsers.map((user)=> <UserCard user={user} key={user.id}/>)}
        </div>
    )
}

export default UsersList
