import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";

const ModifyPassword = ({ id, onModified }) => {
    const [newPass, SetNewPass] = useState("");

    const {setCustomersHandle } = useContext(CustomersContext);

    const changeNewPassHandler = (event) => {
        SetNewPass(event.target.value);
    }

    const onModifiedHandler = () => {
        if (newPass === "") {
            toast.error("Por favor, complete el campo", {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        onModified(false);
        let url = `https://www.apimarber.somee.com/marber/ClientController/ModifyPassById/${id}`;
        fetch(url, {
            method: "PUT",
            mode: "cors",
            refer: "*",
            body: JSON.stringify(newPass),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => setCustomersHandle(response))
            .catch((error) => console.log(error));

        toast.success("Contraseña modificado con éxito", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <div>
            <input placeholder="nueva contraseña" onChange={changeNewPassHandler} />
            <button onClick={onModifiedHandler}>Confirmar contraseña</button>
        </div>
    );
};

export default ModifyPassword;
