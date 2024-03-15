// api/CreateTypeOfArtworkAsync.js

import { AsyncResponse } from "../lib/Interface";
import { URL } from "./Url";

export async function CreateTypeOfArtworkAsync(formData : any, token : any) {
    try {
        const response = await fetch(`https://${URL}/typeofartworkapi/SaveTypeOfArtwork`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        if (!response.ok) {
            throw await response.text();
        }

        if (response.status === 200) {
            const data = await response.text();
            const responseData: AsyncResponse<string> = {
                status: "SUCCESS",
                data: data
            };
            return responseData;
        } else {
            const data = await response.text();
            const responseData: AsyncResponse<string> = {
                status: "FAIL",
                error: data
            };
            return responseData;
        }
    } catch (error) {
        const responseData: AsyncResponse<string> = {
            status: "FAIL",
            error: "Error"
        };
        return responseData;
    }
}
