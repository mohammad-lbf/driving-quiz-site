import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_REGULATIONS_QUESTIONS } from '../graphql/queries';
import Test from '../components/Test';

const ThirdRegulationsQuestions = () => {
    const {loading , data , error} = useQuery(GET_REGULATIONS_QUESTIONS);
    
    const theFirst10 = data ? data.regulationsQuestions.slice(0 , 10).map(item => {
        return{...item , number:item.number + 10}
    }) : data;
    const theSecond10 = data ? data.regulationsQuestions.slice(10 , 20).map(item => {
        return{...item , number:item.number - 10}
    }) : data;
    const theThird10 = data ? data.regulationsQuestions.slice(20 , 30) : data;
    return (
        <div>
            <div>
             <Test 
             loading={loading}
             data={data ? [...theSecond10 , ...theFirst10 , ...theThird10] : data}
             error={error}
             testTitle="آزمون شماره 3 آیین نامه"
             />
        </div>
        </div>
    );
};

export default ThirdRegulationsQuestions;

// ThirdRegulationsQuestions