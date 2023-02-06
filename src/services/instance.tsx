export async function serverInfo() {
    const response = await fetch(new URL('/api/v1/instance', import.meta.env.VITE_INSTANCE_URL));
    return response.json();
}