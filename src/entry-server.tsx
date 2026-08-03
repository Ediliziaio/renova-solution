import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { AppShell } from './App';

export interface RenderResult {
  html: string;
  head: string;
}

/**
 * Renderizza una singola route in HTML statico.
 * Usato solo a build time da scripts/prerender.mjs — non finisce nel bundle client.
 */
export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>
  );

  const h = helmetContext.helmet;
  const head = h
    ? [
        h.title.toString(),
        h.meta.toString(),
        h.link.toString(),
        h.script.toString(),
      ]
        .filter(Boolean)
        .join('\n    ')
    : '';

  return { html, head };
}
