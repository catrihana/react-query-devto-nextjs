import { ITodoInput } from "@models/todo"
import axios from "axios"
export const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchTodos = async () => {
    console.log('fetching...')
    let data = await axios.get(BASE_URL)

    return data.data
}

export const postTodo = async (values: ITodoInput) => {
    console.log(values)
    let data = await axios.post(
        BASE_URL,
        {
            method: 'POST',
            body: JSON.stringify({
                title: values.title,
                body: values.body,
                userId: 1
            }),
        })
    console.log(data)

    return data
}