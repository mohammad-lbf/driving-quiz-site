import React from 'react';
import Question from './shared/Question'
const Questions = ({data}) => {
    return (
        <div className="d-flex flex-column align-items-center align-items-lg-end">
            {data.firstsignquestions.map(item => <Question key={item.id} {...item} />)}
        </div>
    );
};

export default Questions;