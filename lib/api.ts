const API_URL = "http://127.0.0.1:8000";

export async function sendMessage(
    user_id: string,
    user_message: string
) {

    const response = await fetch(`${API_URL}/chat`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            user_id,
            user_message,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to connect to MORO");
    }

    return response.json();
}
export interface ChatResponse {
    response?: string;
    message?: string;
    output?: string;
}