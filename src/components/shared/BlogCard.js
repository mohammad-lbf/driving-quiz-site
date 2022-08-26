import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    width:280px;
    overflow-x: hidden;
    &:hover{
        .cover-photo{
            transform:scale(1.06);
            
        }
    }
    .cover-photo{
        width:280px;
        height: 170px;
        transition: all 0.4s;
    }
    
    `

const BlogCard = ({coverPhoto , author , slug , title}) => {
    return (
        <Card className="rounded mb-3 d-flex flex-column align-items-center bg-main-1">
            <div className="d-flex justify-content-end w-100 py-2 px-2 align-items-center">
                <p className="mb-0 fs-13 text-warning me-2">{author.name}</p>
                <img className="rounded-circle" style={{width:"40px" , height:"40px"}} src={author.authorPhoto.url} />
            </div>
            <img className="cover-photo" src={coverPhoto.url} />
            <p className="mt-3">{title}</p>
            <Link to={`/weblog/${slug}`} className="btn btn-warning text-main-1 mt-1 fs-15 mb-3">مطالعه مقاله</Link>
        </Card>
    );
};

export default BlogCard;