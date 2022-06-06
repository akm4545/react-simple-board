const asyncRequestBase = async (method, url, body) => {
    let response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
            body: JSON.stringify(body),
    });
    response = await response.json();
    
    return response;
};

export default asyncRequestBase;