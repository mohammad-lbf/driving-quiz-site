import React from 'react';
import Question from './shared/Question'
const Questions = ({data}) => {
    // const newData = data.firstsignquestions.slice().reverse(data.firstsignquestions);
    return (
        <div className="d-flex flex-column align-items-center align-items-lg-end">
            {data.map(item => <Question key={item.id} {...item} />)}
        </div>
    );
};

export default Questions;