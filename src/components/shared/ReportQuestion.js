import React from 'react';

const ReportQuestion = ({number ,question ,questionimage , option1 , option2 , option3 , option4 , status , correctanswer , clientAnswer}) => {
    return (
        <div className="border-bottom pb-2 mb-2">
            <div className="d-flex flex-column align-items-end ">
                <div className="d-flex fw-200 flex-row-reverse align-items-start mb-3">
                    <p className="ms-1 mb-0">.{number}</p>
                    <p style={{direction:"rtl"}} className="mb-0">{question}</p>
                </div>
                <div className={`d-flex flex-row-reverse fs-15 py-1 px-3 rounded mb-2
                 ${status == "no-answer" && "text-main-1"}
                 ${status == "correct" && "text-light"}
                 ${status == "incorrect" && "text-light"}
                 ${status == "incorrect" && "bg-danger"}
                 ${status == "correct" && "bg-success"}
                 ${status == "no-answer" && "bg-warning"}`}>
                <p className="mb-0 ms-1">:وضعیت پاسخ</p>
                <p className="mb-0">
                    {status == "no-answer" && "بدون پاسخ"}
                    {status == "correct" && "درست"}
                    {status == "incorrect" && "نادرست"}
                </p>
                  </div>
                {questionimage && <img className="rounded" style={{width:"200px" , height:"200px"}} src={questionimage.url} />}
            </div>
            <div className="d-flex flex-column align-items-end py-2">
                <div className={`d-flex mb-1 py-1 px-3 rounded flex-row-reverse align-items-center fs-13
                                ${correctanswer == "1" && "bg-success"}
                                ${clientAnswer == "1" && status == "incorrect" && "bg-danger"}
                                `}>
                    <p className="ms-1 mb-0">.گزینه 1</p>
                    <p className="mb-0">{option1}</p>
                </div>
                <div className={`d-flex mb-1 py-1 px-3 rounded flex-row-reverse align-items-center fs-13
                                ${correctanswer == "2" && "bg-success"}
                                ${clientAnswer == "2" && status == "incorrect" && "bg-danger"}
                                `}>
                    <p className="ms-1 mb-0">.گزینه 2</p>
                    <p className="mb-0">{option2}</p>
                </div>
                <div className={`d-flex mb-1 py-1 px-3 rounded flex-row-reverse align-items-center fs-13
                                ${correctanswer == "3" && "bg-success"}
                                ${clientAnswer == "3" && status == "incorrect" && "bg-danger"}
                                `}>
                    <p className="ms-1 mb-0">.گزینه 3</p>
                    <p className="mb-0">{option3}</p>
                </div>
                <div className={`d-flex mb-1 py-1 px-3 rounded flex-row-reverse align-items-center fs-13
                                ${correctanswer == "4" && "bg-success"}
                                ${clientAnswer == "4" && status == "incorrect" && "bg-danger"}
                                `}>
                    <p className="ms-1 mb-0">.گزینه 4</p>
                    <p className="mb-0">{option4}</p>
                </div>
            </div>
        </div>
    );
};

export default ReportQuestion;