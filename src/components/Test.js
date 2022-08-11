import React , {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux'
import quiz from '../assets/test.png'
import Report from '../components/Report';
import Spinner from './shared/Spinner';
import Error from './shared/Error'
import AnimatedProgress from './shared/AnimatedProgress';
import Questions from './Questions';
import Timer from './shared/Timer';
import FinishIcon from '../assets/testFinish.png'

const Test = ({loading , data , error , testTitle}) => {
    const [testStarted , setTestStarted] = useState(false);
    const [testFinished , setTestFinished] = useState(false);
    const testState = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        data &&
        dispatch(
            {type:"ADD_QUESTIONS" , 
            payload:[...data]
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
                        <p id="#test-title" className="text-center text-white fs-3 mt-xl-0">{testTitle}</p>
                        <p className="fs-13 text-white text-center border-bottom pb-1"> طراح: محمد لبافی<i className="text-warning ms-1 bi bi-pen"></i></p>
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
                        {
                            data && testStarted && !testFinished &&
                            <div className="text-white w-100 d-flex flex-column align-items-center d-xl-none pb-2 border-bottom mb-1">
                                <p className="w-100 d-flex flex-row-reverse fw-200 fs-15 justify-content-center"><i className="text-warning ms-1 bi bi-alarm"></i> :زمان باقیمانده{<Timer setTestFinished={setTestFinished} />}</p>
                                <AnimatedProgress />
                                <p className="text-white mb-2 border-top pt-1 mt-4 w-100 text-center">پاسخنامه</p>
                                <div className="d-flex flex-row-reverse border-bottom pb-1 w-100 justify-content-center" style={{flexWrap:"wrap"}}>
                                    {testState.questions.map(item => <div key={item.id} className="m-1 bg-light text-center rounded" style={{width:"30px" , height:"50px" , overflow:"hidden"}}>
                                        <span className="text-secondary" style={{fontSize:"15px"}}>{item.number}</span>
                                        {item.status != "no-answer" && <div className="bg-secondary" style={{height:"30px" , width:"30px"}}></div>} 
                                    </div>)}
                                </div>
                                <button onClick={()=>setTestFinished(true)} className="mt-2 btn-main-1 border-0 py-2 px-3 rounded text-white">پایان آزمون</button>

                            </div>
                        }
                        {
                            data && testStarted && !testFinished &&
                            <div className="justify-content-center d-none d-xl-flex border-bottom pb-3 pt-0 mb-2">
                                <button onClick={()=>setTestFinished(true)} className="mt-0 btn-main-1 border-0 py-2 px-3 rounded text-white">پایان آزمون</button>
                            </div>
                        }
                        
                        {data && testStarted && !testFinished &&
                        <Questions data={data} />
                        }
                        {
                            data && testStarted && !testFinished &&
                            <div className="text-white w-100 d-flex flex-column align-items-center d-xl-none">
                                <p className="w-100 d-flex flex-row-reverse fw-200 fs-15 justify-content-center"><i className="text-warning ms-1 bi bi-alarm"></i> :زمان باقیمانده{<Timer setTestFinished={setTestFinished} />}</p>
                                <AnimatedProgress />
                                <p className="text-white mb-2 border-top pt-1 mt-4 text-center w-100">پاسخنامه</p>
                                <div className="d-flex flex-row-reverse border-bottom pb-1 justify-content-center w-100" style={{flexWrap:"wrap"}}>
                                    {testState.questions.map(item => <div key={item.id} className="m-1 bg-light text-center rounded" style={{width:"30px" , height:"50px" , overflow:"hidden"}}>
                                        <span className="text-secondary" style={{fontSize:"15px"}}>{item.number}</span>
                                        {item.status != "no-answer" && <div className="bg-secondary" style={{height:"30px" , width:"30px"}}></div>} 
                                    </div>)}
                                </div>
                                <button onClick={()=>setTestFinished(true)} className="mt-4 btn-main-1 border-0 py-2 px-3 rounded text-white">پایان آزمون</button>

                            </div>
                        }
                        {
                            data && testStarted && !testFinished &&
                            <div className="justify-content-center d-none d-xl-flex">
                                <button onClick={()=>setTestFinished(true)} className="mt-4 btn-main-1 border-0 py-2 px-3 rounded text-white">پایان آزمون</button>
                            </div>
                        }
                        {
                            testFinished &&
                            <Report />
                        }
                    </div>
                    <div  className=" py-3 px-3 col-12 pb-5 col-xl-3 d-none d-xl-flex rounded flex-column align-items-center" style={{backgroundColor:"rgb(32, 32, 32)" , Height:"75vh"}}>
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
                            <div className="text-white text-center mb-3" style={{position:"fixed" , width:"270px" , top:"100px" , left:`${window.innerWidth}`}}>
                                <p className="w-100 d-flex flex-row-reverse fw-200 fs-15 justify-content-center"><i className="text-warning ms-1 bi bi-alarm"></i> :زمان باقیمانده{<Timer setTestFinished={setTestFinished} />}</p>
                                <AnimatedProgress  />
                                <p style={{width:"270px"}} className="text-white mb-2 border-top pt-1 mt-4 text-center">پاسخنامه</p>
                                <div className="d-flex flex-row-reverse border-bottom pb-1" style={{flexWrap:"wrap" , width:"270px"}}>
                                    {testState.questions.map(item => <div key={item.id} className="m-1 bg-light text-center rounded" style={{width:"30px" , height:"50px" , overflow:"hidden"}}>
                                        <span className="text-secondary" style={{fontSize:"15px"}}>{item.number}</span>
                                        {item.status != "no-answer" && <div className="bg-secondary" style={{height:"30px" , width:"30px"}}></div>} 
                                    </div>)}
                                </div>
                            </div>
                        }
                        {
                            testFinished &&
                            <div className="d-flex flex-column align-items-center mt-5">
                                <p className="text-warning fw-bold mb-2">!آزمون پایان یافت</p>
                                <img src={FinishIcon} style={{width:"250px"}} />
                            </div>
                        }
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Test;