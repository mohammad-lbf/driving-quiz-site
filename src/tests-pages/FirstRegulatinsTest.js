import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_REGULATIONS_QUESTIONS } from '../graphql/queries';
import Test from '../components/Test';

const FirstRegulatinsTest = () => {
    const {loading , data , error} = useQuery(GET_REGULATIONS_QUESTIONS);
    return (
        <div>
            <div>
             <Test 
             loading={loading}
             data={data ? data.regulationsQuestions : data}
             error={error}
             testTitle="آزمون شماره 1 آیین نامه"
             />
        </div>
        </div>
    );
};

export default FirstRegulatinsTest;