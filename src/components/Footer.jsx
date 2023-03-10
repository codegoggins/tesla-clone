import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100%;
  background-color:#171a20;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media(max-width:500px){
     flex-direction: column;
     gap: 1rem;
  }
  `;

const Text = styled.span`
  font-weight: 400;
  color:white;
  font-size: 1rem;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
        <Link to='/'>
        <Text>Tesla-Clone 2023</Text>
        </Link>
        <Text>
        <a href="https://github.com/codegoggins/tesla-clone" target='_blank' rel='noreferrer'>
        ©codegoggins
        </a>
        </Text>
        <Text>
        <a href="https://github.com/codegoggins" target='_blank' rel='noreferrer'>
        Github
        </a>
        </Text>
    </Container>
  )
}

export default Footer