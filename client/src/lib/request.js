const buildOptions = (data, accessToken) => {
    const options = {
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (accessToken) {
        options.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return options;
};

const request = async (method, url, data, accessToken) => {
    try {
        const response = await fetch(url, {
            ...buildOptions(data, accessToken),
            method
        });

        if (response.status === 204) {
            return response;
        }

        if (!response.ok) {
            // if (response.status === 403) {
            //     localStorage.removeItem('accessToken');
            // }
            
            let errorMessage;

            try {
                errorMessage = (await response.json()).message;
            } catch (error) {
                console.error('Error while parse JSON response', error);
            }

            // if (
            //     response.status === 401 && errorMessage === 'Token is missing!' ||
            //     response.status === 401 && errorMessage === 'Token has expired!' ||
            //     response.status === 403 && errorMessage === 'Problem with token verification!'
            // ) {
            //     console.error(errorMessage);
            //     window.location.href = '/logout';
            //     throw new Error(errorMessage);
            // } else {
            //     throw new Error(errorMessage || 'Unknown error');
            // }
        }

        const responseBody = await response.text();

        return responseBody ? JSON.parse(responseBody) : await response.json();

    } catch (error) {
        throw error;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');