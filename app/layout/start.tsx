'use client'
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import FormComponent from "../components/form";
import Header from "../components/header";

export default function Start() {

    const [teste, setTeste] = useState<Object>();

    useEffect(() => {
        console.log({teste});
    }, [teste])

    const field = [
        {
            title: 'teste1',
            name: 'teste1',
            default: 1,
            type: 'number'
        },
        {
            title: 'teste2',
            name: 'teste2',
            default: '1',
            type: 'string'
        },
        {
            title: 'teste3',
            name: 'teste3',
            default: '1',
            type: 'string'
        },
        {
            title: 'teste4',
            name: 'teste4',
            default: '1',
            type: 'string'
        },
        {
            title: 'teste5',
            name: 'teste5',
            default: '1',
            type: 'string'
        },
        {
            title: 'teste6',
            name: 'teste6',
            default: '1',
            type: 'string'
        }
      ]

  return (
    <div style={{ height: "100%", width: "100vw" }}>
        <FormComponent
            submit_message="aa"
            setData={setTeste}
            fields={field}
        />
    </div>
  );
}