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
export const GET_REGULATIONS_QUESTIONS = gql`

query MyQuery {
  regulationsQuestions(last: 30) {
    id
    number
    option1
    option2
    option3
    option4
    question
    questionimage {
      url
    }
    correctanswer
  }
}
`
export const GET_BLOGS_INFO = gql`
query{
  articles {
    coverPhoto {
      url
    }
    date
    id
    slug
    title
    content {
      html
    }
    author {
      name
      authorPhoto {
        url
      }
    }
  }
}
`
export const GET_BLOG_INFO = gql`
query MyQuery($slug:String!) {
  article(where: {slug: $slug}) {
    author {
      name
      authorPhoto {
        url
      }
    }
    content {
      html
    }
    coverPhoto {
      url
    }
    date
    title
  }
}


`