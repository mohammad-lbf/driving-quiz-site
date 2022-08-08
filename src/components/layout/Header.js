import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Header = () => {
    const Header = styled.div`
    position:fixed;
    top:0;
    border-bottom: 2px solid rgb(48, 48, 48);
    background-color: rgb(32, 32, 32);
    a{
        border:2px solid rgb(32, 32, 32);
        transition: all 0.3s;
        &:hover{
            border-bottom:2px solid #dc3545;
            transform: translateX(-5px);
        }
    }
    `
    return (
        <Header className="d-flex align-items-center justify-content-between  w-100 py-3 px-3">
            <Link to="/" className="fs-4 fw-bold text-decoration-none">
            <span className="text-warning">LBF</span>
            <span className="text-white">Driving</span>
            </Link>
            <div style={{marginLeft:"80px"}} className="d-none d-lg-flex align-items-center flex-row-reverse">
                <Link className="text-decoration-none text-warning mx-2" to="/">آزمون آیین نامه</Link>
                <Link className="text-decoration-none text-warning mx-2" to="/weblog">مقالات</Link>
                <Link className="text-decoration-none bg-danger text-white px-2 py-1 border-0 rounded mx-2" to="/aboutproject">درباره پروژه</Link>
                <Link className="text-decoration-none text-warning mx-2" to="/aboutus">درباره ما</Link>
            </div>
            <div style={{backgroundColor:"#f1f1f1"}} className="p-2 text-muted d-none d-lg-flex rounded flex-row-reverse">
            <i className="bi bi-search"></i>
            <input className="border-0 text-end me-1" style={{backgroundColor:"#f1f1f1" , outline:"none"}} type="text" placeholder="...جستجو" />
            </div>
        </Header>
    );
};

export default Header;