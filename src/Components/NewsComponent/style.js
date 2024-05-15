import styled from 'styled-components'

export const NCMainContainer = styled.div`
background-color:#f5f5f5;
padding:15px;
border-radius:12px;
display:flex;
flex-direction:column;
align-items:center;
width:300px;
height:450px
box-shadow:box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const NewsImageEl = styled.img`
width:90%;

max-height:400px;
border-radius:8px;`
export const NewsHeaderEl = styled.h1`
text-align:left;
align-self:flex-start;
font-size:25px;
font-family:Roboto,sans-serif;
color:#040A44;
`
export const NewsContent = styled.p`
color:black;
text-align:left;

`
export const NewsButton = styled.button`
aligen-self:flex-end;
margin-top:auto;
margin-right:auto;
border:none;
background-color:transparent;
color:red;
`