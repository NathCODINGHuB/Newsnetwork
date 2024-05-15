import styled from "styled-components";

export const BodyComponentMainContainer = styled.div`

flex-grow:1;
background-color:#040A44;
display:flex;
flex-direction:row;
justify-content:center;
align-items:flex-start;
overflow-y: hidden;
`
export const BCInnerConatainer = styled.div`
background-color:#ffffff;
width:90%;
margin-top:3%;
margin-bottom:3%;
border-radius:5px;
min-height:75vh;
padding-top:15px;
padding-bottom:15px;
display : flex;
flex-direction:row;
justify-content:center;
flex-wrap:wrap;
gap:15px;
overflow-y: scroll;
margin-top:10%;
height:110px;
`
export const LoaderContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;`