import React from 'react';
import { useSelector , useDispatch } from 'react-redux';

const Report = () => {
    const {questions , noAnswers , corrects , incorrects} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <p>آزمون پایان یافت</p>
            <div>
                <p> {questions.length} : تعداد کل سوالات</p>
                <p>{corrects.length} : تعداد پاسخ های درست</p>
                <p>{incorrects.length} : تعداد پاسخ های نادرست</p>
                <p>{noAnswers.length} : تعداد سوالات بدون پاسخ</p>
                <p> وضعیت  : {incorrects.length > 4 ? "مردود" : "قبول"}</p>
            </div>
        </div>
    );
};

export default Report;