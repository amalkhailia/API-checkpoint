import React from 'react'
import { Card } from "react-bootstrap";
import "./UserCard.css"

const UserCard = ({user}) => {
    return (
        <div>
    <Card className="card">
    <Card.Body>
    <Card.Title>{user.name}</Card.Title> <br/>
    <Card.Subtitle>{user.username}</Card.Subtitle><br/>
    <Card.Subtitle >{user.phone}</Card.Subtitle>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard
