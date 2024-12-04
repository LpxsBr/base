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
            title: 'Campo 1',
            name: 'teste1',
            default: 1,
            type: 'number',
            required: true,
        },
        {
            title: 'Campo 2',
            name: 'teste2',
            default: '1',
            type: 'string',
            required: true,
        },
        {
            title: 'Campo 3',
            name: 'teste3',
            default: '1',
            type: 'string',
            required: true,
        },
        {
            title: 'Campo 4',
            name: 'teste4',
            default: '1',
            type: 'string',
            required: false,
        },
        {
            title: 'Campo 5',
            name: 'teste5',
            default: '1',
            type: 'string',
            required: false,
        },
        {
            title: 'Campo 6',
            name: 'teste6',
            default: '1',
            type: 'string',
            required: false,
        }
      ]

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
        <FormComponent
            submit_message="Enviar"
            setData={setTeste}
            fields={field}
        />
    </div>
  );
}
