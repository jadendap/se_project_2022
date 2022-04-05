import React from 'react'
import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #b8b3b3;
    border-radius: 50%;

`
const Slider = () => {
  return (
   <Container>
       <Arrow>
        <ArrowLeftOutlined/>

       </Arrow>
       <Arrow>
        <ArrowRightOutlined/>

       </Arrow>

   </Container>
  )
}

export default Slider