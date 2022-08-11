import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HambergurMenuOpener from '../HambergurMenuOpener';
const Header = ({open , setOpen}) => {
    const Header = styled.div`
    position:fixed;
    top:0;
    border-bottom: 2px solid rgb(48, 48, 48);
    background-color: rgb(32, 32, 32);
    z-index:20;
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
            <HambergurMenuOpener open={open} setOpen={setOpen} />
            <div className="d-none d-lg-flex align-items-center flex-row-reverse">
                <Link className="text-decoration-none text-warning mx-2" to="/">آزمون آیین نامه</Link>
                <Link className="text-decoration-none text-warning mx-2" to="/weblog">مقالات</Link>
                <Link className="text-decoration-none bg-danger text-white px-2 py-1 border-0 rounded mx-2" to="/aboutproject">درباره پروژه</Link>
                <Link className="text-decoration-none text-warning mx-2" to="/aboutdeveloper">درباره ما</Link>
            </div>
        </Header>
    );
};

export default Header;