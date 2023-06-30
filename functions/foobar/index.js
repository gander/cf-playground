export function onRequest(context) {
    return new Response(JSON.stringify({index: context.params}));
}
