const buildOptions = (data) => {
    const options = {
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const token = localStorage.getItem('accessToken');

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    return options;
};

const request = async (method, url, data) => {
    try {
        const response = await fetch(url, {
            ...buildOptions(data),
            method
        });
    
        if (response.status === 204) {
            return response;
        }
    
        if (!response.ok) {
            if (response.status === 403) {
                localStorage.removeItem('accessToken');
            }
            
            let errorMessage;

            try {
                errorMessage = (await response.json()).message;
            } catch (error) {
            }

            throw new Error(errorMessage || 'Unknown error');
        }
        
        const responseBody = await response.text();
        
        return responseBody ? JSON.parse(responseBody) : null;

    } catch (error) {
        throw error;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');