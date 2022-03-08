import React from "react";
import styled from "styled-components";
import { IoSearch, IoClose } from "react-icons/io5";
import "../Styles/SearchBar.css"
const SearchBarContainer = styled.div`
   margin-left: 100px;
   margin-top: 0px;
   display: flex;
   flex-direction : column ;
   width: 100em;
   height: 3.8em;
   background-color: white;
   border-radius: 6px;
   box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.14);
   overflow: hidden;
   z-index:1000 ;
   
@media screen and (max-width: 768px)
{
    display: absolute;
    margin-left: 150px;
    width: 15em;
}
@media screen and (max-width: 922px) {
}
`;

const SearchInputContainer = styled.div`
    width: 100%;
    min-height: 4em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 2px 15px;
    z-index:1000 ;

`;
const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 21px;
    
    padding: 0 10px;
    color: black;
    font-weight: 500;
    border-radius: 6px;
    &focus{
        outline: none;
        &::placeholder{
            opacity: 0;
        }
    }
    &::placeholder{
        color: #c9c6c6;
        transition: all 250em ease-in-out;
    }
    z-index:1000 ;
`;
const SearchIcon = styled.span`
    color: #c9c6c6;
    font-size: 27px;
    margin-right: 10px;
    margin-top: 6px;
    vertical-align: middle;
    z-index:1000 ;
    color: white;
`

const CloseIcon = styled.span`
    color: #c9c6c6;
    font-size: 23px;
    margin-right: 10px;
    margin-top: 6px;
    vertical-align: middle;
    transition: all 200ms ease-in-out;
    cursor:pointer;
    z-index:1000 ;
    color: white;
    
    &:hover{
        color: #fff7f7
    }
`;
export function SearchBar(props){
    return <SearchBarContainer>
        <SearchInputContainer>
            <SearchIcon>
                <IoSearch/>
            </SearchIcon>
            <SearchInput placeholder="Search for a product"/>
            <CloseIcon>
                <IoClose/>
            </CloseIcon>
        </SearchInputContainer>
    </SearchBarContainer>
}

export default SearchBar;
