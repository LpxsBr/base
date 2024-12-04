'use client'

import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import s from './style.module.css'

type Field = {
    type: string,
    name: any,
    default: any,
    title: string,
    required: boolean
};

type FormData = {
    [key: string]: {
        default: any,
        type: string,
        value: any,
        title: string,
        required: boolean
    }
};

export default function FormComponent({fields, setData, submit_message = 'submit', add_elements}: {
    // children: ReactNode,
    fields: Field[],
    setData: Dispatch<SetStateAction<Object>>
    submit_message: string,
  add_elements?: ReactNode
}) {

    const formRef = useRef(null);

    const [formData, setForm] = useState<FormData>({});

    useEffect(() => {
        fields.forEach((e) => {
            setForm((prev) => ({ ...prev, [e.name]: {
                default: e.default,
                title: e.title,
                type: e.type,
                required: e.required,
                value: null
            }}))
        })
        
    }, [fields])
    
    const handleChange = (event: any) => {
        event.preventDefault();

        setForm((prev) => ({...prev, [event.target.name]: {...formData[event.target.name], value: event.target.value}}))
    }

    const handleSubmit = (e: any) => {

        setData(formData)
        
        e.preventDefault();        
    }
    
    return(
        <form ref={formRef} onSubmit={handleSubmit}>
            <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: "center", gap: 22, width: "100%", maxWidth: '795px'}} className={s._form_wrp}>
                <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: "center", gap: 22, width: "100%"}} className={s.form}>
                    {
                        Object.keys(formData).map((e, key) => {
                            return (
                                <div key={key} id={''+e+key} style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", maxWidth: 350, minWidth: 250}}>
                                    <label className={s.input_label} htmlFor={''+e+'label'+key}>{formData[e].title}</label>
                                    <input name={e} onChange={handleChange} id={''+e+'label'+key} value={formData[e].value ?? ''} className={s.input_animated} required={formData[e].required} />
                                </div>
                            )
                        })
                    }
                </div>
                
                <div className={s.controll}>
                    <button style={{maxWidth: 350, minWidth: 250, height: 32}} type="submit">{submit_message}</button>
                    {add_elements}
                </div>
            </div>

        </form>
    )

}