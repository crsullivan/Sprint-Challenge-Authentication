import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const H1 = styled.h1 `
    text-align:center;
`
const Regdiv = styled.div `
    background-color: lightblue;
    width:30%;
    text-align:center;
    margin:1% 35% 1% 35%;
`

const Registration = (props) => {
    const [user, setUser] = useState({ "username": '', "password": ''})

const changeHandler = event => {

    event.preventDefault();
    setUser({...user, [event.target.name]: event.target.value })
}


const handleSubmit = event => {
    event.preventDefault();

    // axiosLoginAuth()
    axios
        .post("http://localhost:3300/api/auth/register", user)
        .then( result => {
            
                 props.history.push("/login")
            
            })
            .catch(error => {
                console.log(error)
                alert("Username already exists please login to continue", error)
            })
            setUser({
                username: '', password: ''
            })
    }

    return (
        <>
            <H1>Register</H1>
            <Regdiv>
                <label>Username</label>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="username" value={user.username} onChange={changeHandler}/>
                </form>
                <label>Password</label>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="password"  placeholder="Password" value={user.password} onChange={changeHandler}/>
                </form>

                <form onSubmit={handleSubmit}>
                    <button type="submit">Start Now</button>
                </form>
            </Regdiv>
        </>
    )
    
}
    
export default Registration;