import { useState } from "react";

export const useForm = (initalvalue = {}) => {

    const [formState, setFormState] = useState(initalvalue);

    const reset = () => {
        setFormState(initalvalue)
    }

    const handleInputChange = ({target}) => {

        
        console.log(target.name)
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return [formState, handleInputChange, reset];
}