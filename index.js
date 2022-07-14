export default {
    async fetch(request) {
        const requestURL = new URL(request.url);
        const path = requestURL.pathname.split('/redirect')[1];
        const location = redirectMap.get(path);
        if (location) {
            return new Response.redirect(location, 301);
        }
        return new Response("unknown");
    }
}
