import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    const Footer = styled.div`
    border-top: 2px solid rgb(48, 48, 48);
    background-color: rgb(32, 32, 32);
    a{
        border-bottom:2px solid rgb(32, 32, 32);
        transition: all 0.3s;
        &:hover{
            border-bottom:2px solid #dc3545;
            transform:translateX(5px);
        }   
    }
    .footer-logo{
        border-bottom:2px solid #dc3545;
    } 
    `
    return (
        <div style={{backgroundColor: "rgb(32, 32, 32)"}} className="d-flex flex-column align-items-center w-100">
                <Footer className=" py-3 px-lg-4 d-flex flex-column w-100 flex-lg-row align-items-center justify-content-sm-between align-items-center">
            <div className="d-flex flex-column align-items-center mb-3 mb-lg-0">
            <Link to="/" className="fs-1 fw-bold text-decoration-none footer-logo mb-2">
            <span className="text-warning">LBF</span>
            <span className="text-white">Driving</span>
            </Link>
            <p style={{fontSize:"15px"}} className="text-warning mb-1">محمد لبافی</p>
            <p style={{fontSize:"15px"}} className="footer-logo text-warning pb-1">برنامه نویس فرانت اند</p>
            </div>
            <div className="d-flex flex-column align-items-center align-items-lg-end footer-logo mb-5 mb-lg-0">
                <Link className="text-decoration-none text-warning my-1" to="/">آزمون آیین نامه</Link>
                <Link className="text-decoration-none text-warning my-1" to="/">مقالات</Link>
                <Link className="text-decoration-none bg-danger text-white my-1 px-2 py-1 border-0 rounded" to="/">درباره پروژه</Link>
                <Link className="text-decoration-none text-warning my-1" to="/">درباره ما</Link>
            </div>
            <div className="d-flex flex-column align-items-center">
            <p style={{fontSize:"15px"}} className="fw-bold text-warning">ما را در فضای مجازی دنبال کنید</p>
            <div className="d-flex align-items-center">
                <div style={{width:"50px" , height:"50px"}} className="rounded-circle mx-2 d-flex justify-content-center bg-danger align-items-center text-white">
                <i className="bi bi-instagram"></i>
                </div>
                <div style={{width:"50px" , height:"50px"}} className="rounded-circle mx-2 d-flex justify-content-center bg-danger align-items-center text-white">
                <i className="bi bi-telegram"></i>
                </div>
                <div style={{width:"50px" , height:"50px"}} className="rounded-circle mx-2 d-flex justify-content-center bg-danger align-items-center text-white">
                <i className="bi bi-twitter"></i>
                </div>
            </div>
            </div>
        </Footer>
        <div style={{backgroundColor: "rgb(32, 32, 32)" , borderTop:"2px solid rgb(48, 48, 48)"}} className=" text-warning text-center py-3 fw-bold w-100">
            محفوظ است LBFDriving تمامی حقوق برای
            <p style={{fontSize:"13px"}} className="mt-2 mb-1 text-danger">محمد لبافی - 1401</p>
        </div>
        </div>
        
    );
};

export default Footer;