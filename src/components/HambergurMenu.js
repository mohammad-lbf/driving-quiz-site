import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Div = styled.div`
background-color: #324376;
color:#fff;
border:1px solid rgb(48, 48, 48);
width:300px;
height:100vh;
position:fixed;
top:0;
right:0;
z-index:105;
transition: all 0.3s;
a{
    text-decoration: none;
    color:#fff;
    transform: none !important;
}
transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"};
`

const HambergurMenu = (props) => {
    const clickHandler = () =>{
        props.setOpen(false)
    }
    return (
         <Div className="d-flex d-lg-none flex-column pt-5 px-3" open={props.open}>
                <div className="d-flex flex-column align-items-center mt-3 border-bottom pb-1">
                    <Link to="/" onClick={()=>clickHandler()} className="fs-4 p-0 lh-0 fw-bold text-decoration-none border-0 mb-3">
                        <span className="text-warning">LBF</span>
                        <span className="text-white">Driving</span>
                    </Link>
                    <Link className="border-0 my-2" to="/" onClick={()=>clickHandler()}>
                        <div style={{width:"240px"}} className="bg-warning text-main-1 py-2 rounded text-center">
                            <p className="mb-0">آزمون آیین نامه</p>
                        </div>
                    </Link>
                    <Link className="border-0 my-2" to="/weblog" onClick={()=>clickHandler()}>
                        <div style={{width:"240px"}} className="bg-warning text-main-1 py-2 rounded text-center">
                            <p className="mb-0">مقالات</p>
                        </div>
                    </Link>
                    <Link className="border-0 my-2" to="/aboutproject" onClick={()=>clickHandler()}>
                        <div style={{width:"240px"}} className="bg-danger text-white py-2 rounded text-center">
                            <p className="mb-0">درباره پروژه</p>
                        </div>
                    </Link>
                    <Link className="border-0 my-2" to="/aboutus" onClick={()=>clickHandler()}>
                        <div style={{width:"240px"}} className="bg-warning text-main-1 py-2 rounded text-center">
                            <p className="mb-0">درباره ما</p>
                        </div>
                    </Link>
                </div>
                <div className="border py-3 rounded text-center fs-13 mt-3">
                     <p className="mb-2">:طراح و توسعه دهنده پروژه</p>
                     <p className="mb-2">محمد لبافی</p>
                     <Link onClick={()=>clickHandler()} to="/" className="mt-2 btn btn-primary border-0 fs-13 py-1 px-2 rounded">درباره توسعه دهنده</Link>
                </div>
        </Div>
    );
};

export default HambergurMenu;