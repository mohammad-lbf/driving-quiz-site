import {gql} from '@apollo/client'

export const GET_FIRST_SIGN_TEST = gql`
query {
  firstsignquestions {
    id
    number
    option1
    option2
    option3
    option4
    question
    correctanswer
    questionimage {
      url
    }
  }
}


`