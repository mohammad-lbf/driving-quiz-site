import React , {useState , useEffect} from 'react';

const AnimatedProgress = () => {
    const[width , setWidth] = useState(100);
    useEffect(()=>{
    } , [width])
    const timer = ()=>{
        setTimeout(()=>{
            setWidth(width - 0.08333);
        } , [1000])};

        if(width > 0){
            timer();
        }

    return (
        <div style={{width:"270px"}}>
            <div className="progress">
                <div className="progress-bar bg-main-1 progress-bar-striped progress-bar-animated" role="progressbar" style={{width:`${width}%`}}></div>
            </div>
        </div>
    );
};

export default AnimatedProgress