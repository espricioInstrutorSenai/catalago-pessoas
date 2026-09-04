import { useEffect, useState } from "react";
import { getPersonById } from "../services/personService";

export function usePersonById(id){
    const [person, setPerson] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{

        async function loadPerson() {
            try {
                
                const data = await getPersonById(id);

                setPerson(data);

            } catch (error) {

                console.log("Erro ao buscar pessoas", error);

            } finally {

                setLoading(false);

            }
        }

        if(id) loadPerson();

    }, [id] );

    return {person, loading};
}