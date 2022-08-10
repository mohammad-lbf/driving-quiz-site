const initialState = {
    questions:[],
    noAnswers: [],
    corrects:[],
    incorrects:[]
}
export const testReducer = (state=initialState , action)=>{
switch(action.type){
    case "ADD_QUESTIONS":
        return{
            ...state,
            questions:[...action.payload.map(item => {return {...item , status:"no-answer" , clientAnswer:"0"}} )],
            noAnswers:[...action.payload]
        }
        case "TRUE_ANSWER":
            if(!state.corrects.find(item => item.id == action.payload.id)){
                state.corrects.push(action.payload)
            }
            const questionscorrectIndex = state.questions.findIndex(item => item.id == action.payload.id);
            state.questions[questionscorrectIndex].clientAnswer = action.payload.clientAnswer
            state.questions[questionscorrectIndex].status = "correct";
            return{
                questions:[...state.questions],
                noAnswers:state.noAnswers.filter(item => item.id != action.payload.id),
                corrects: [...state.corrects],
                incorrects: state.incorrects.filter(item => item.id !== action.payload.id)
            }
        case "FALSE_ANSWER":
           const questionIncorrectsIndex = state.incorrects.findIndex(item => item.id == action.payload.id);
           const questionsIncorrectIndex = state.questions.findIndex(item => item.id == action.payload.id)
           questionIncorrectsIndex >= 0 ? 
           state.incorrects[questionIncorrectsIndex].clientAnswer = action.payload.clientAnswer :
           state.incorrects.push(action.payload);
           state.questions[questionsIncorrectIndex].clientAnswer = action.payload.clientAnswer
            state.questions[questionsIncorrectIndex].status = "incorrect";
           return{
               ...state,
               questions:[...state.questions],
               noAnswers:state.noAnswers.filter(item => item.id != action.payload.id),
               corrects:state.corrects.filter(item => item.id != action.payload.id),
               incorrects:[...state.incorrects],
           }
        case "RESET":
            return{
                 questions:[],
                 noAnswers: [],
                 corrects:[],
                 incorrects:[]
            }
        default: 
           return {...state}
}
}