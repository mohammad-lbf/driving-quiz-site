import React from 'react';
import { Link } from 'react-router-dom';
import Test from '../../assets/test.png'
const HomePage = () => {
    return (
        <div style={{paddingTop:"85px" , paddingBottom:"0.8rem" , backgroundColor:"rgb(20, 20, 20);"}}>
            <div className="text-white container p-3 rounded" style={{border:"1px solid rgb(48, 48, 48)" , backgroundColor:"rgb(32, 32, 32)"}}>
                <p className="text-center fw-bold fs-3">آزمون های آیین نامه</p>
                <div className="w-100 text-center">
                <img className="rounded mb-3" src={Test} width="250px" height="200px" />
                </div>
                <p className="text-center mb-0">با کلیک روی آزمون مورد نظر، وارد آزمون شوید</p>
                <div className="container text-center mt-4">
                    <div className="row text-center flex-row-reverse">
                        <div className="col-12 col-xl-4">
                            <Link to="/" className="text-decoration-none text-white">
                                <p className="bg-primary py-2 text-center rounded">
                                آزمون شماره 1 تابلوها
                                </p>
                            </Link>
                            <Link to="/" className="text-decoration-none text-white">
                                <p className="bg-primary py-2 text-center rounded">
                                آزمون شماره 2 تابلوها
                                </p>
                            </Link>
                            <Link to="/" className="text-decoration-none text-white">
                                <p className="bg-primary py-2 text-center rounded">
                                آزمون شماره 3 تابلوها
                                </p>
                            </Link>
                        </div>
                        <div className="col-12 col-xl-4">
                        
                        </div>
                        <div className="col-12 col-xl-4">
                       
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePage;