import { API_KEY, API_URL, ApiEndpoints } from "@/functions/api/shared";

const fetchCharacter = (id: number) => {
    const req = new Request(`${API_URL}/${ApiEndpoints.GET_CHAR}`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    });
};
