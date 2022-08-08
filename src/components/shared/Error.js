import React from 'react';
import ErrorPic from '../../assets/error-pic.webp'
const Error = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div style={{width:"fit-content"}} className="bg-main-1 py-3 px-5 rounded d-flex flex-column align-items-center">
            <img className="mb-3" style={{width:"150px"}} src={ErrorPic} />
            <p className="text-warning">خطا در برقرای ارتباط</p>
        </div>
        </div>
    );
};

export default Error;