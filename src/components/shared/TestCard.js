import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TestCard = ({testName , testPhoto , slug}) => {
    const Card = styled.div`
    width:280px;
    overflow-x: hidden;
    &:hover{
        img{
            transform:scale(1.06);
            
        }
    }
    img{
        width:280px;
        height: 170px;
        transition: all 0.4s;
    }
    p{
        text-decoration:none;
    }
    
    `
    return (
        <>
            <Card style={{backgroundColor:"transparent"}} className="rounded mb-3 d-flex flex-column align-items-center">
            <div className="bg-main-1 pb-3">
                <img className="mb-3" src={testPhoto.url} />
                <div className="text-end px-2">
                <p className="fs-15 text-white ">{testName}<i className="text-warning ms-2 bi bi-card-list"></i></p>
                <p className="fs-13 text-white">زمان آزمون: 20 دقیقه<i className="text-warning ms-1 bi bi-alarm"></i></p>
                </div>
                <Link to={`/${slug}`} className="btn btn-warning text-main-1">ورود به آزمون</Link>
            </div>
            </Card>
        </>
    );
};

export default TestCard;