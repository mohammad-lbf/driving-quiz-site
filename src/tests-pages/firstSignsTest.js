import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FIRST_SIGN_TEST } from '../graphql/queries';
import Test from '../components/Test';

const FirstSignsTest = () => {
    const {loading , data , error} = useQuery(GET_FIRST_SIGN_TEST);
    return (
        <div>
             <Test 
             loading={loading}
             data={data}
             error={error}
             testTitle="آزمون شماره 1 تابلو ها"
             />
        </div>
    );
};

export default FirstSignsTest;