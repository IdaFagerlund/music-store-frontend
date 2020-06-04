export async function fetchGet(url) {
    let customResponse = { status: null, headers: null, data: null }
    let wasRequestSuccessful = false

    customResponse.data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Authorization": window.localStorage.getItem("token")
        },
        mode: "cors"
    })
        .then((response) => {
            wasRequestSuccessful = response.ok
            customResponse.status = response.status
            customResponse.headers = response.headers
            return response.json()
        })
        .catch((error) => { return {} })

    if (!wasRequestSuccessful) {
        throw customResponse
    }

    return customResponse
}


export async function fetchPost(url, requestBody) {
    let customResponse = { status: null, headers: null, data: null }
    let wasRequestSuccessful = false

    customResponse.data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": window.localStorage.getItem("token")
        },
        mode: "cors",
        body: JSON.stringify(requestBody)
    })
        .then((response) => {
            wasRequestSuccessful = response.ok
            customResponse.status = response.status
            customResponse.headers = response.headers
            return response.json()
        })
        .catch((error) => { return {} })

    if (!wasRequestSuccessful) {
        throw customResponse
    }

    return customResponse
}