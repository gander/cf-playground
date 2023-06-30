export function onRequest(context) {
    return new Response(JSON.stringify({catchall: context.params.catchall}))
}
