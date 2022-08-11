import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_REGULATIONS_QUESTIONS } from '../graphql/queries';
import Test from '../components/Test';

const SecondRegulationsTest = () => {
    const {loading , data , error} = useQuery(GET_REGULATIONS_QUESTIONS);
    let newData = [];
    if(data){
        newData = data.regulationsQuestions.slice().reverse(data.regulationsQuestions).map(item => {return {...item , number:(item.number * -1) + 31}})
    }
    return (
        <div>
            <div>
             <Test 
             loading={loading}
             data={data ? newData : data}
             error={error}
             testTitle="آزمون شماره 2 آیین نامه"
             />
        </div>
        </div>
    );
};

export default SecondRegulationsTest;