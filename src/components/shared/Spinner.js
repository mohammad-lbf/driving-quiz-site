import React from 'react';

const Spinner = () => {
    return (
        <div className="w-100 d-flex justify-content-center mt-5">
            <div className="p-4 rounded bg-main-1" style={{width:"fit-content"}}>
            <div className="spinner-grow text-warning" role="status">
                 <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-warning">...لطفا صبور باشید</p>
        </div>
        </div>
    );
};

export default Spinner;