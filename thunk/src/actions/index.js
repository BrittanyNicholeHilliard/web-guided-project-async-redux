import axios from 'axios'

export const GET_PERSON = 'GET_PERSON'
export const GET_PERSON_SUCCESS = 'GET_PERSON_SUCCESS'
export const GET_PERSON_ERROR = 'GET_PERSON_ERROR'

export const getPerson = () => {
    axios.get('https://randomuser.me/api')
    .then((res)=> {
        console.log(res.data.results)
    }).catch((err) => {
        console.log({err})
    })
    return {type: 'GET_PERSON', payload: {data: 'hello'}}
}

const getPersonSuccess = (person) => {
    return 
}

const getPersonError = () => {
    
}