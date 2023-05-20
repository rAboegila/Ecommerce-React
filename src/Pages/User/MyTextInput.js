import React from 'react'
import { useField } from "formik";

export default function MyTextInput({ label, ...props }){
    const [field, meta] = useField(props);
  return (

      <>
        <div className="form-group mb-3">
          <label htmlFor={props.id || props.name}>{label}</label>
          <input className="text-input form-control" {...field} {...props} />
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </div>
      </>
    );
}
