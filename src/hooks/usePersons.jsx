import { useEffect, useState } from "react";
import { getPersons } from "../services/personService";

export function usePersons(){
    const [persons, setPersons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{

        async function loadPersons() {
            try {
                
                const data = await getPersons();

                setPersons(data);

            } catch (error) {

                console.log("Erro ao buscar pessoas", error);

            } finally {

                setLoading(false);

            }
        }

        loadPersons();

    }, [] );

    return {persons, loading};
}