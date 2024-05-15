import styled from "styled-components";

export const HeaderContainer =  styled.div`
display:flex;
flex-directin:row;
justify-content:center;
align-items:center;
position:fixed;
top:0;
background-color:#040A44;
height:12vh;
width:100%;

`


export const HeaderContainer2 = styled.div`
width:90%;
display:flex;
flex-directin:row;
justify-content:space-between;
align-items:center;`



export const Logo = styled.h1`
color:red;
font-weight:500;
font-family:robot;

`
export const Logosub = styled.a`
color:#ffffff`


export const SearchInputContainer = styled.form`
flex-grow:1;
display:flex;
flex-directon:row;
aligin-items:center;
background-color:red;
margin-left:3%;
margin-right:3%;
padding:5px 10px 5px 10px;
border-radius:5px;
background-color:#f5f5f5;
`

export const Searchbutton = styled.button`
background-color:transparent;
border:0px;
`
export const SearchInput = styled.input`
flex-grow:1;
background-color:transparent;
border:none;
outline:none;
color:black;
font-size:20px;
`


export const SelectInput = styled.select`
width:100px;
height:40px;
margin-left:auto;
margin-right:auto;
font-size:16px;
`
export const OptionInput = styled.option`
font-size:15px;
`