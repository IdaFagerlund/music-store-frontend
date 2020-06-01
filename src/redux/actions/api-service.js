const SERVER_BASE_URL = process.env.NODE_ENV === 'development' ? "http://localhost:8080" : "https://somethingelse.com"


export async function fetchGet(url) { //TODO: update to work more like fetchPost
    const response = await fetch(`${SERVER_BASE_URL}${url}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Authorization": window.localStorage.getItem("token")
        },
        mode: "cors"
    })
    if (!response.ok) {
        throw response
    }
    return response
}

export async function fetchPost(url, requestBody) {
    let customResponse = { status: null, headers: null, data: null }
    let wasRequestSuccessful = false;

    customResponse.data = await fetch(`${SERVER_BASE_URL}${url}`, {
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

