import React, {FC} from "react";
import "./FormsControls.css";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/Validators/validators";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={`form-control ${hasError ? "error" : ""}`}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
};

export const Input: FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
};

export function createField<FormKeysType extends string>(
        placeholder: string | undefined,
        name: FormKeysType,
        validators: Array<FieldValidatorType>,
        component: FC<WrappedFieldProps>,
        props = {},
        text = ""
    ){
        return (
            <div>
                <Field placeholder={placeholder}
                       name={name}
                       validate={validators}
                       component={component}
                       {...props}/>{text}
            </div>
        )
    }