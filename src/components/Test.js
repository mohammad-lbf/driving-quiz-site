import React , {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux'
import quiz from '../assets/test.png'
import Report from '../components/Report';
import Spinner from './shared/Spinner';
import Error from './shared/Error'
import AnimatedProgress from './shared/AnimatedProgress';
import Questions from './Questions';

const Test = ({loading , data , error , testTitle}) => {
    const [testStarted , setTestStarted] = useState(false);
    const [testFinished , setTestFinished] = useState(false);
    const testState = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        data &&
        dispatch(
            {type:"ADD_QUESTIONS" , 
            payload:[...data.firstsignquestions]
        })
    } , [data]);
    useEffect(()=>{
        scrollTop()
    } , [testStarted , testFinished])
        const scrollTop = ()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })
        }
    return (
        <div style={{paddingTop:"85px" , paddingBottom:"0.65rem"}}>
            <div className="container">
                <div className="row justify-content-xl-between gy-2 gy-xl-0">
                    <div className="col-12 col-xl-8 rounded py-3 px-3" style={{backgroundColor:"rgb(32, 32, 32)" , minHeight:"75vh"}}>
                        <p id="#test-title" className="text-center text-white fs-3 mt-xl-5">{testTitle}</p>
                        {!testStarted && <div>
                            <p className="text-center text-white fs-13 fw-200 lh-lg" >بعد از آزمون، حتما پاسخ های خود را تحلیل کرده و اشتباهات خود را بررسی کنید</p>
                        <p className="text-center text-white fs-13 fw-200">زمان دریافت کارنامه: بلافاصله پس از آزمون</p>
                        <p className="text-center text-white fs-13 fw-200">موفق باشید</p>
                            </div>}
                        {loading && <Spinner /> }
                        {error && <Error />}
                        {data && !testStarted &&
                        <div className="text-center mt-3 d-xl-none">
                        <img style={{width:"250px"}} className="rounded mb-3" src={quiz} />
                    <p className="fs-15 text-white ">تعداد سوالات: 30 سوال<i className="text-warning ms-2 bi bi-card-list"></i></p>
                          <p className="fs-15 text-white">زمان آزمون: 20 دقیقه<i className="text-warning ms-1 bi bi-alarm"></i></p>
                          <p className="fs-15 text-white"> طراح: محمد لبافی<i className="text-warning ms-1 bi bi-pen"></i></p>
                          <button onClick={()=>setTestStarted(true)} className="btn-main-1 text-white rounded border-0 p-2 fs-15 mt-3">شروع آزمون</button>
                    </div>
                        }
                        
                        {data && testStarted && !testFinished &&
                        <Questions data={data} />
                        }
                        {
                            data && testStarted && !testFinished &&
                            <div className="text-white w-100 text-center d-xl-none">
                                <p>زمان باقیمانده: 00:00:00<i className="text-warning ms-1 bi bi-alarm"></i></p>
                                <AnimatedProgress />
                                <p className="text-white mb-2 border-top pt-1 mt-4">پاسخنامه</p>
                                <div className="d-flex flex-row-reverse border-bottom pb-1 ">
                                    {testState.questions.map(item => <div key={item.id} className="m-1 bg-light text-center rounded" style={{width:"30px" , height:"50px" , overflow:"hidden"}}>
                                        <span className="text-secondary" style={{fontSize:"15px"}}>{item.number}</span>
                                        {item.status != "no-answer" && <div className="bg-secondary" style={{height:"30px" , width:"30px"}}></div>} 
                                    </div>)}
                                </div>
                                <button onClick={()=>setTestFinished(true)} className="mt-4 btn-main-1 border-0 py-2 px-3 rounded text-white">پایان آزمون</button>

                            </div>
                        }
                    </div>
                    <div className=" py-3 px-3 col-12 col-xl-3 d-none d-xl-flex rounded flex-column align-items-center" style={{backgroundColor:"rgb(32, 32, 32)" , Height:"75vh"}}>
                        {loading && <Spinner /> }
                        {error && <Error />}
                        {data && !testStarted &&
                        <div className="text-center mt-3">
                        <img className="w-75 rounded mb-3" src={quiz} />
                    <p className="fs-15 text-white ">تعداد سوالات: 30 سوال<i className="text-warning ms-2 bi bi-card-list"></i></p>
                          <p className="fs-15 text-white">زمان آزمون: 20 دقیقه<i className="text-warning ms-1 bi bi-alarm"></i></p>
                          <p className="fs-15 text-white"> طراح: محمد لبافی<i className="text-warning ms-1 bi bi-pen"></i></p>
                          <button onClick={()=>setTestStarted(true)} className="btn-main-1 text-white rounded border-0 p-2 fs-15 mt-3">شروع آزمون</button>
                    </div>
                        }
                        {
                            data && testStarted && !testFinished &&
                            <div className="text-white w-100 text-center ">
                                <p>زمان باقیمانده: 00:00:00<i className="text-warning ms-1 bi bi-alarm"></i></p>
                                <AnimatedProgress />
                                <p className="text-white mb-2 border-top pt-1 mt-4">پاسخنامه</p>
                                <div className="d-flex flex-row-reverse border-bottom pb-1 ">
                                    {testState.questions.map(item => <div key={item.id} className="m-1 bg-light text-center rounded" style={{width:"30px" , height:"50px" , overflow:"hidden"}}>
                                        <span className="text-secondary" style={{fontSize:"15px"}}>{item.number}</span>
                                        {item.status != "no-answer" && <div className="bg-secondary" style={{height:"30px" , width:"30px"}}></div>} 
                                    </div>)}
                                </div>

                                <button onClick={()=>{setTestFinished(true)}} className="mt-4 btn-main-1 border-0 py-2 px-3 rounded text-white">پایان آزمون</button>
                            </div>
                        }
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Test;