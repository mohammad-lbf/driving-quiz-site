import React , {useState , useEffect} from 'react';

const Timer = ({setTestFinished}) => {
    const[seconds , setSeconds] = useState(59);
    const[minutes , setMinutes] = useState(19);
    const[timeFinished , setTimeFinished] = useState(false)
    useEffect(()=>{
        if(seconds < 0){
                setSeconds(59);
        }
    } , [seconds]);


     const timer =()=>{ setTimeout(()=>{
            setSeconds(seconds - 1)
    } , 1000)};

    const timer2 = ()=>{
        setTimeout(()=>{
            setMinutes(minutes - 1)
        } , [60000])
    }

    if(minutes > 0){
        timer2()
    }

    if(!(minutes == 0 && seconds == 0)){
        timer(); 
    }else{
        setTestFinished(true)
    }
    return (
        <div className="d-flex align-items-center flex-row-reverse mx-1">
            <span>{seconds < 10 && "0"}{seconds}</span>
            <span>:</span>
            <span>{minutes < 10 && "0"}{minutes}</span>
            <span>:</span>
            <span>00</span>
        </div>
    );
};
export default Timer;