// npm install json-server@0.17.4
// npx json-server --watch db.json --port 3010

import {HTTP_METHOD} from '../constants'

//универсальная функция обертка для запросов на сервер :
async function fetchServer (method, { id, ...payload } = {}) {
	let url =  'http://localhost:3010/todos';

	let options = {
		method,
		headers: { 'Content-Type': 'application/json' }
	};

	if (method === HTTP_METHOD.GET) {
		if (id) {
			url += `/${id}`
		} else {
			const { searchText, isSortingAlphabet } = payload;
			const sortingParams = isSortingAlphabet
				? `_sort=title&_order=asc`
				: `_sort=id&_order=desc`
			url += `?${sortingParams}&title_like=${searchText}`
		}
	} else {
		if (method !== HTTP_METHOD.POST) {
			url += `/${id}`
		}

		if (method !== HTTP_METHOD.DELETE) {
			options.body = JSON.stringify(payload)
		}
	}

	const jsonData = await fetch(url, options)
	return await jsonData.json()
}

//CRUD:

export const requestCreateTodo = (newTodo) => fetchServer('POST', newTodo)

export const requestReadTodos = (searchText = '', isSortingAlphabet = false) => fetchServer('GET', {searchText, isSortingAlphabet})

export const requestUpdateTodo = (todoData) => fetchServer('PATCH', todoData)

export const requestDeleteTodo = (todoId) => fetchServer('DELETE', { id: todoId })

export const requestReadTodo = (id) => fetchServer('GET', { id })
