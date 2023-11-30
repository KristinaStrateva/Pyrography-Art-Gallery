import { useState } from "react";

export default function useForm(initialValues, submitHandler) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name in values) {
            setValues(state => ({
                ...state,
                [name]: value,
            }));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit
    }
}