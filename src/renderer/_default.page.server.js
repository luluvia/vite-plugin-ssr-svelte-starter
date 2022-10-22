import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr"

export { render }
export { passToClient }

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps', 'routeParams']

async function render(pageContext) {
    const app = pageContext.Page.render(pageContext)
    const appHtml = app.html

    // See https://vite-plugin-ssr.com/html-head
    const { documentProps } = pageContext
    const title = (documentProps && documentProps.title) || 'Vite + Svelte + TS + SSR'
    const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr (Svelte version)'

    return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}