const addQuestions = (payload)=>{
    return {type:"ADD_QUESTIONS" , payload:payload}
}
const answering = (payload)=>{
    return {type:"ANSWERING" , payload:payload}
}
const reset = (payload)=>{
    return {type:"RESET" , payload:payload}
}
export {addQuestions , answering , reset}