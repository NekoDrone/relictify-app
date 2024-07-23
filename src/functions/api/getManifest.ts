import { API_KEY, API_URL, Endpoints } from "@/functions/api/shared";

const getCharactersManifest = async () => {
    const req = new Request(
        `${API_URL}/${Endpoints.GET_CHARS}`,
        { headers: { 
            'Content-Type': 'application/json' ,
            'Authorization': `Bearer ${API_KEY}`
        } },
    )
    return (await fetch(req)).json();
}

const getManifest = async () => {
    return {
        characters: await getCharactersManifest(),
    };
}