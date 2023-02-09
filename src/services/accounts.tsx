export async function account(id: string) {
    const response = await fetch(new URL(`/api/v1/accounts/${id}`, import.meta.env.VITE_INSTANCE_URL))
    return response.json();
}
