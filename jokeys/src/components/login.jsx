import { axiosWithLoginAuth } from "./utils/axiosWithLoginAuth";
import React, {useState} from 'react';
import styled from 'styled-components';


const H1 = styled.h1 `
    text-align:center;
`
const Logindiv = styled.div `
    background-color: lightblue;
    width:30%;
    text-align:center;
    margin:1% 35% 1% 35%;
`

const Login = (props) => {
    const [user, setUser] = useState({ username: '', password: ''})


    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }
     const handleSubmit = event => {
         event.preventDefault();
         axiosWithLoginAuth()
            .post("http://localhost:3300/api/auth/login", user)
            .then(result => {
            localStorage.setItem("token", result.data.token);    
            if(result.data.token){
                props.history.push("/jokes")
            }
            setUser({ username: '', password: ''})
            alert(result.data.message)
        })
    
    }

    //  console.log(name);

return (
    <>

            <H1>Login</H1>  
            <Logindiv>
                <label>Username</label>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="username" value={user.username} onChange={changeHandler}/>
                </form>
                <label>Password</label>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="password"  placeholder="Password" value={user.password} onChange={changeHandler}/>
                </form>

                <form onSubmit={handleSubmit}>
                    <button type="submit">Log In</button>
                </form>
            </Logindiv>
    </>
)
}
export default Login