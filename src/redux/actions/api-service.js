export async function fetchGet(url) {
    let customResponse = { status: null, headers: null, data: null }
    let wasRequestSuccessful = false

    customResponse.data = await fetch(`http://ec2-3-133-85-180.us-east-2.compute.amazonaws.com:8080${url}`, {
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

    customResponse.data = await fetch(`http://ec2-3-133-85-180.us-east-2.compute.amazonaws.com:8080${url}`, {
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