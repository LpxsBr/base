'use client'

import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";

type Field = {
    type: string,
    name: any,
    default: any,
    title: string
};

type FormData = {
    [key: string]: {
        default: any,
        type: string,
        value: any,
        title: string
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
                type: e.type,
                value: null
            }}))
        })

        console.log({formData})
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
        <form ref={formRef}>
            <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap'}}>
                {
                    Object.keys(formData).map((e, key) => {
                        return (
                            <div key={key} id={''+e+key} style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start"}}>
                                <label htmlFor={''+e+'label'+key}>{formData[e].title}</label>
                                <input name={e} onChange={handleChange} id={''+e+'label'+key} value={formData[e].value ?? ''} />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button onClick={handleSubmit}>{submit_message}</button>
                {add_elements}
            </div>
        </form>
    )

}