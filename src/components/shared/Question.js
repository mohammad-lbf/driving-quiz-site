import React , {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';

const Question = (props) => {
    const quizState = useSelector(state => state);
    const dispatch = useDispatch();
    const [answer , setAnswer] = useState(null);

    useEffect(()=>{
        if(answer > 0){
            if(answer == props.correctanswer){
                dispatch({
                    type:"TRUE_ANSWER",
                    payload:{
                        ...props,
                        clientAnswer:answer
                    }
                })
            }
            else{
                dispatch({
                    type:"FALSE_ANSWER",
                    payload:{
                        ...props,
                        clientAnswer:answer
                    }
                })
            }
        }
    } , [answer])

    const changeHandler = (e)=>{
        setAnswer(e.target.value);

    }
    return (
        <div className="text-white d-flex flex-column align-items-end w-100 border-bottom pb-3 mb-2">
            <div className="d-flex flex-column align-items-center align-items-lg-end mb-3">
                <div className="d-flex">
                <p className="text-center text-lg-end me-1 fw-200">{props.question}</p>
                <p className="text-center text-lg-end">.{props.number}</p>
                </div>
                <img className="rounded" style={{width:"200px" , height:"200px"}} src={props.questionimage.url} />
            </div>
            <div>
                <div className="d-flex align-items-center mb-1 flex-row-reverse">
                    <input className="cur-poin" onChange={changeHandler} type="radio" id={`option1${props.number}`} value={1}  name={`option${props.number}`}/>
                    <label className="fw-200 me-1 cur-poin fs-15" htmlFor={`option1${props.number}`}>{props.option1}</label>
                </div>
                <div className="d-flex align-items-center mb-1 flex-row-reverse">
                    <input className="cur-poin" onChange={changeHandler} type="radio" value={2} id={`option2${props.number}`}  name={`option${props.number}`}/>
                    <label className="fw-200 me-1 cur-poin fs-15" htmlFor={`option2${props.number}`}>{props.option2}</label>
                </div>
                <div className="d-flex align-items-center mb-1 flex-row-reverse">
                    <input className="cur-poin" onChange={changeHandler} type="radio" id={`option3${props.number}`} value={3} name={`option${props.number}`} />
                    <label className="fw-200 me-1 cur-poin fs-15" htmlFor={`option3${props.number}`}>{props.option3}</label>
                </div>
                <div className="d-flex align-items-center flex-row-reverse">
                    <input className="cur-poin" onChange={changeHandler} type="radio" id={`option4${props.number}`} value={4} name={`option${props.number}`} />
                    <label className="fw-200 me-1 cur-poin fs-15" htmlFor={`option4${props.number}`}>{props.option4}</label>
                </div>
            </div>
        </div>
    );
};

export default Question;