import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const Div = styled.div`
width:100vw;
height: 100vh;
background-color: rgba(0,0,0,0.7);
display: ${props => props.open ? "flex" : "none"} ;
position:fixed;
top:0;
right:300px;

z-index:110;
@media (min-width:992px){
    display:none;
}
`
const HambergurMenuModal = (props) => {
    return  ReactDOM.createPortal(
        <Div open={props.open} setOpen={props.setOpen} onClick={() => {props.setOpen(!props.open)}}>
            
        </Div> , document.getElementById("child-root")
    );
};

export default HambergurMenuModal;