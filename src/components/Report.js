import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ReportQuestion from './shared/ReportQuestion'
const Report = () => {
    const {questions , noAnswers , corrects , incorrects} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="d-flex flex-column align-items-center text-light w-100 mt-3">
            <p className="text-light w-100 text-center">آزمون پایان یافت</p>
            <div style={{flexWrap:"wrap"}} className="text-center fs-15 w-100 d-flex flex-row-reverse justify-content-center align-items-center">
                <p style={{width:"250px"}} className="py-1 mx-sm-2 px-3 rounded bg-light text-dark"> {questions.length} : تعداد کل سوالات</p>
                <p style={{width:"250px"}} className="py-1 mx-sm-2 px-3 rounded bg-success">{corrects.length} : تعداد پاسخ های درست</p>
                <p style={{width:"250px"}} className="py-1 mx-sm-2 px-3 rounded bg-danger">{incorrects.length} : تعداد پاسخ های نادرست</p>
                <p style={{width:"250px"}} className="py-1 mx-sm-2 px-3 rounded bg-warning text-main-1">{noAnswers.length} : تعداد سوالات بدون پاسخ</p>
                <p style={{width:"250px"}} className="py-1 mx-sm-2 px-3 rounded bg-main-1"> وضعیت  : {corrects.length < 26 ? "مردود" : "قبول"}</p>
            </div>
            <Link className="text-decoration-none btn btn-primary text-light py-1 px-3 rounded" to="/">بازگشت به صفحه اصلی</Link>
            <div className="w-100 text-end my-3">
                <p className="fw-200 text-center w-100 fs-4 py-3 border-bottom border-top ">:پاسخنامه سوالات</p>
                {questions.map(item => <ReportQuestion {...item} /> )}
            </div>
        </div>
    );
};

export default Report;