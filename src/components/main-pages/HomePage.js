import { useQuery } from '@apollo/client';
import React , {useEffect} from 'react';
import { GET_TESTS } from '../../graphql/queries';
import Error from '../shared/Error';
import Spinner from '../shared/Spinner';
import TestCard from '../shared/TestCard';
import { useDispatch } from 'react-redux';

const HomePage = () => {
    const {loading , data , error} = useQuery(GET_TESTS);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:"RESET"})
    } , []);
    useEffect(()=>{
        scrollTop()
    } , [])
        const scrollTop = ()=>{
            window.scrollTo({
                top:-100,
                left:-100,
                behavior:'smooth'
            })
        }
    return (
        <div style={{paddingTop:"85px" , paddingBottom:"0.65rem" , backgroundColor:"rgb(20, 20, 20)" }}>
            <div className="text-white container p-3 rounded" style={{border:"1px solid rgb(48, 48, 48)" , backgroundColor:"rgb(32, 32, 32)" , minHeight:"75vh"}}>
                <p className="text-center fw-bold fs-3 mb-4">آزمون های آیین نامه</p>
                {error && <Error />}
                {data && <>
                <div className="w-100 text-center">
                </div>
                <p className="text-center mb-0 fw-200">با کلیک روی آزمون مورد نظر، وارد آزمون شوید</p>
                        </>}
                <div className="container text-center mt-5">
                    <div className="row text-center flex-row-reverse justify-content-center">
                        {loading && <Spinner />}
                        {data && data.tests.map(item => <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center">
                                <TestCard {...item} />
                            </div>)}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePage;