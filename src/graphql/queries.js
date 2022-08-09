import {gql} from '@apollo/client'

export const GET_FIRST_SIGN_TEST = gql`
query {
  firstsignquestions (last:30) {
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
export const GET_TESTS = gql`
query MyQuery {
  tests {
    id
    slug
    testName
    testPhoto {
      url
    }
  }
}
`