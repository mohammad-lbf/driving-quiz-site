import React , {useEffect, useState} from 'react';

import { useQuery } from '@apollo/client';
import { GET_FIRST_SIGN_TEST } from '../graphql/queries';
import Question from '../components/shared/Question';
import { useSelector , useDispatch } from 'react-redux';
import Report from '../components/Report';

const FirstSignsTest = () => {
    const testState = useSelector(state => state);
    const dispatch = useDispatch();
    const {loading , data , error} = useQuery(GET_FIRST_SIGN_TEST);
    const [testStarted , setTestStarted] = useState(false);
    const [testFinished , setTestFinished] = useState(false);

        useEffect(()=>{
            data &&
            dispatch(
                {type:"ADD_QUESTIONS" , 
                payload:[...data.firstsignquestions]
            })
        } , [data])
    return (
        <div>
            <h2 className="text-center">آزمون شماره 1 تابلو ها</h2>
            {data && !testStarted && !testFinished && 
            <button onClick={()=>setTestStarted(true)} className="btn btn-primary">
                شروع آزمون
            </button>}
            {data && testStarted && !testFinished && data.firstsignquestions.map(question => <Question key={question.id} {...question} />)}
            {data && testStarted && !testFinished && <button  onClick={()=>setTestFinished(true)}>پایان آزمون</button>}
            {testFinished && <Report />}
        </div>
    );
};

export default FirstSignsTest;