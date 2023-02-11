export async function webfinger(ressource: string) {
    const response = await fetch(new URL(`/.well-known/webfinger?resource=${encodeURIComponent(ressource)}`, import.meta.env.VITE_INSTANCE_URL));
    if(response.status === 404) return null;
    return response.json();
}


export async function serverInfo() {
    const [instanceResponse, nodeInfoResponse] = await Promise.all([
        fetch(new URL('/api/v1/instance', import.meta.env.VITE_INSTANCE_URL)),
        fetch(new URL('/nodeinfo/2.1.json', import.meta.env.VITE_INSTANCE_URL)),
    ])
    const [instance, nodeInfo] = await Promise.all([instanceResponse.json(), nodeInfoResponse.json()]);

    return {
        ...instance,
        domain: new URL(instance.uri).host,
        staff: nodeInfo.metadata.staffAccounts.map((url: string) => ({ url }))
    };
}
