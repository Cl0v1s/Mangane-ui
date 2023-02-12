import pack from './../../package.json';
import { store, get } from '../helpers/storage';

async function createApp(): Promise<{ clientId: string}> {
    const response = await fetch(new URL('/api/v1/apps', import.meta.env.VITE_INSTANCE_URL), {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            client_name: pack.name,
            redirect_uris: 'urn:ietf:wg:oauth:2.0:oob',
            scopes: "read write follow"
        })
    });
    const json = await response.json();
    store({
        clientId: json.client_id,
        clientSecret: json.client_secret,
    })
    return {
        clientId: json.client_id,
    }
}

export async function auth(username: string, password: string) {
    let { clientId } = get();
    if(!clientId) {
        clientId = (await createApp()).clientId;
    }
}



export async function account(id: string) {
    const response = await fetch(new URL(`/api/v1/accounts/${id}`, import.meta.env.VITE_INSTANCE_URL))
    return response.json();
}
