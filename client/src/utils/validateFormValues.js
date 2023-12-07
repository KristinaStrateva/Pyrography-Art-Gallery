export default function validateFormValues(values) {
    if ('username' in values && 'email' in values && 'password' in values && 'repeatPass' in values) {
        const username = values.username;
        const email = values.email;
        const password = values.password;
        const repeatPass = values.repeatPass;

        username === '' && (() => { throw new Error('Username is required!') })();
        username.length < 8 && (() => { throw new Error('Username must be at least 8 characters!') })();
        username.length > 15 && (() => { throw new Error('Username must be less than 15 characters!') })();
        !/^[a-zA-Z0-9_., -]+$/.test(username) && (() => { throw new Error('Username can contain only lowercase, uppercase, numbers, "_", ".", ",", " " and "-" symbols!') })();

        email === '' && (() => { throw new Error('Email is required!') })();
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email) && (() => { throw new Error('Invalid email!') })();

        password === '' && (() => { throw new Error('Password is required!') })();
        password.length < 8 && (() => { throw new Error('Password must be at least 8 characters!') })();
        !/^[a-zA-Z0-9!#$%^&()-_+=?.,;:{}[\]|]+$/.test(password) && (() => { throw new Error('Password can contain only lowercase, uppercase, numbers and the following symbols: !#$%^&()-_+=?.,;:{}[]|') })();

        password !== repeatPass && (() => { throw new Error('Passwords don\'t match!') })();
    }

    if ('email' in values && 'password' in values) {
        const email = values.email;
        const password = values.password;

        email === '' && (() => { throw new Error('Email is required!') })();
        password === '' && (() => { throw new Error('Password is required!') })();
    }

    if ('name' in values && 'imageUrl' in values && 'description' in values) {
        const name = values.name;
        const imageUrl = values.imageUrl;
        const description = values.description;

        name === '' && (() => { throw new Error('Name is required!') })();
        name.length < 3 && (() => { throw new Error('Name must be at least 3 characters!') })();
        name.length > 40 && (() => { throw new Error('Name must be less than 40 characters!') })();
        !/^[a-zA-Z0-9_., -]+$/.test(name) && (() => { throw new Error('Name can contain only lowercase, uppercase, numbers, "_", ".", ",", " " and "-" symbols!') })();

        imageUrl === '' && (() => { throw new Error('Image URL is required!') })();
        !/^(https?:\/\/)([a-zA-Z0-9-._~:/?#[\]'*,;=%]+)$/.test(imageUrl) && (() => { throw new Error('Image URL have to begin with "http://" or "https://" and cannot contain any of the following symbols: !\();@&+$,') })();

        description === '' && (() => { throw new Error('Description is required!') })();
        description.length < 10 && (() => { throw new Error('Description must be at least 10 characters!') })();
        description.length > 150 && (() => { throw new Error('Description must be less than 150 characters!') })();
        !/^[a-zA-Z0-9_., -]+$/.test(description) && (() => { throw new Error('Description can contain only lowercase, uppercase, numbers, "_", ".", ",", " " and "-" symbols!') })();

    }

    return null;
}