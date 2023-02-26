import pack from './../../package.json';
import { store, get } from '../helpers/storage';
import { IAccount } from '../types/IAccount';

async function createApp(): Promise<{ clientId: string, clientSecret: string}> {
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
        clientSecret: json.client_secret,
    }
}

async function getToken(clientId: string, clientSecret: string, username: string, password: string): Promise<string> {
    const response = await fetch(new URL('/oauth/token', import.meta.env.VITE_INSTANCE_URL), {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            grant_type: "password",
            username,
            password,
            client_id: clientId,
            client_secret: clientSecret,
            scopes: "read write follow"
        })
    });
    const json = await response.json();
    store({
        accessToken: json.access_token,
    });
    return json.access_token
}

async function revokeToken(clientId: string, clientSecret: string, token: string): Promise<void> {
    await fetch(new URL('/oauth/token', import.meta.env.VITE_INSTANCE_URL), {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            token,
        })
    });
    store({
        accessToken: undefined,
    });
}

export async function verifyToken(token: string): Promise<IAccount> {
    const response = await fetch(new URL('/api/v1/accounts/verify_credentials', import.meta.env.VITE_INSTANCE_URL), {
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });
    return response.json();
}

export async function auth(username: string, password: string) {
    let { clientId, clientSecret } = get();
    if(!clientId || !clientSecret) {
        const app = await createApp();
        clientId = app.clientId;
        clientSecret = app.clientSecret;
    }
    const accessToken = await getToken(clientId, clientSecret, username, password);
    return verifyToken(accessToken);
}

export async function account(id: string) {
    const response = await fetch(new URL(`/api/v1/accounts/${id}`, import.meta.env.VITE_INSTANCE_URL))
    return response.json();
}
