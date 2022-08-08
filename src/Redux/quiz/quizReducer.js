let initialState = {
                     questions:[],
                    corrects:[],
                    incorrects:[],
                    noAnswers:[],
}

const statusChecker = (questions)=>{
    const correctQuestions = questions.filter(item => item.status == "correct");
    const incorrectQuestions = questions.filter(item => item.status == "incorrect");
    const noAnswerQuestions = questions.filter(item => item.status == "no-answer");
    return {correctQuestions , incorrectQuestions , noAnswerQuestions}
}

export const quizReducer = (state = initialState , action)=>{
    switch(action.type){
        case "ADD_QUESTIONS":
            return {
                questions:action.payload.questions,
                corrects:action.payload.corrects,
                incorrects:action.payload.incorrects,
                noAnswers:action.payload.noAnswers
            }
        case "ANSWERING":
            let currentQuestionI = state.questions.findIndex(item => item.id == action.payload.id);
            // state.questions[currentQuestionI].clientanswer = action.payload.answer;
            // state.questions[currentQuestionI].questionstatus = action.payload.status;
            return{
                ...state,
                questions:[...state.questions , 
                state.questions[currentQuestionI] = {name:"mohammad"}
                ],
                corrects: [...statusChecker(state.questions).correctQuestions],
                incorrects: [...statusChecker(state.questions).incorrectQuestions],
                noAnswers: [...statusChecker(state.questions).noAnswerQuestions]
            } 
            console.log(state.questions[currentQuestionI].questionstatus);
            console.log(state)
            return{
                ...state
            }
        case "RESET":
            return{
                questions:[],
                corrects:[],
                incorrects:[],
                noAnswers:[],
            }    
        default : return state    
    }
}