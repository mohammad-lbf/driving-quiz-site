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
        <div>
            <p>{props.question}</p>
            <img src={props.questionimage.url} />
            <div>
                <div>
                    <input onChange={changeHandler} type="radio" value={1}  name={`option${props.number}`}/>
                    <label htmlFor={1}>{props.option1}</label>
                </div>
                <div>
                    <input onChange={changeHandler} type="radio" value={2}  name={`option${props.number}`}/>
                    <label htmlFor={2}>{props.option2}</label>
                </div>
                <div>
                    <input onChange={changeHandler} type="radio" value={3} name={`option${props.number}`} />
                    <label htmlFor={3}>{props.option3}</label>
                </div>
                <div>
                    <input onChange={changeHandler} type="radio" value={4} name={`option${props.number}`} />
                    <label htmlFor={4}>{props.option4}</label>
                </div>
            </div>
            {answer == props.correctanswer && <p>{answer}</p>}
        </div>
    );
};

export default Question;