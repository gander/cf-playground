export function onRequest(context) {
    return new Response(JSON.stringify({name: context.params.name}));
}
