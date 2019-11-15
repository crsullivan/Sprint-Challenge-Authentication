import React, {useState, useEffect} from 'react';
import { axiosWithLoginAuth } from "./utils/axiosWithLoginAuth";
import styled from 'styled-components';

const Page = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
`

const Joke = styled.div `
    background-color: lightblue;
    width:30%;
    text-align:center;
    margin:1%;
`

const H1 = styled.h1 `
    text-align:center;
`

const MainPage = () => {
    const [authors, setAuthors] = useState([]) 
    useEffect(() => {
        axiosWithLoginAuth()
            .get('http://localhost:3300/api/jokes')
            .then(res => {
                console.log(res)
                setAuthors(res.data);
            })
            .catch(error => {
                console.error('server error', error);
            });
    },[])
    return (
        <>
            <H1>Jokes!!!</H1>
                <Page>
                    {authors.map(q => {
                        return(
                            <Joke key={q.id}>
                                <h2>{q.joke}</h2>
                                <h3>{q.id}</h3>
                            </Joke>
                        )
                    })}
                </Page>
        </>
    )
}
export default MainPage;