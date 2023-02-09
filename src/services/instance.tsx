export async function serverInfo() {
    const [instanceResponse, nodeInfoResponse] = await Promise.all([
        fetch(new URL('/api/v1/instance', import.meta.env.VITE_INSTANCE_URL)),
        fetch(new URL('/nodeinfo/2.1.json', import.meta.env.VITE_INSTANCE_URL)),
    ])
    const [instance, nodeInfo] = await Promise.all([instanceResponse.json(), nodeInfoResponse.json()]);

    console.log(nodeInfo);
    return {
        ...instance,
        staff: nodeInfo.metadata.staffAccounts.map((url: string) => ({ id: url.split('/').pop() }))
    };
}
