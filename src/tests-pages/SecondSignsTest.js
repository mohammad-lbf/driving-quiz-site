import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FIRST_SIGN_TEST } from '../graphql/queries';
import Test from '../components/Test';

const SecondSignsTest = () => {
    const {loading , data , error} = useQuery(GET_FIRST_SIGN_TEST);
    const newData = data.firstsignquestions.slice().reverse(data.firstsignquestions).map(item => {return {...item , number:(item.number * -1) + 31}})
    return (
        <div>
            <div>
             <Test 
             loading={loading}
             data={data ? newData : data}
             error={error}
             testTitle="آزمون شماره 2 تابلو ها"
             />
        </div>
        </div>
    );
};

export default SecondSignsTest;