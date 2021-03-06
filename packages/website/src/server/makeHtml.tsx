import {
  createAssetElements,
} from 'express-isomorphic/utils';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { logger } from 'jege/server';
import { MakeHtml } from 'express-isomorphic';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import IsomorphicState from './IsomorphicState';
import ServerApp from '@@src/server/ServerApp';
import { StaticContext } from '@@src/universal/contexts/StaticContext';

const log = logger('[eldeni.github.io]');

const isProd = process.env.NODE_ENV === 'production';
const HARDCODED_STATIC_URL = process.env.HARDCODED_STATIC_URL as string;

const ogImageUrls = {
  '/g/music': '/g/assets/music-1.jpg',
  default: '/g/assets/elden-2-reduced.jpg',
};

const makeHtml: MakeHtml<IsomorphicState> = async ({
  host,
  protocol,
  serverState,
  url,
}) => {
  log('makeHtml(): protocol: %s, host: %s, url: %s', protocol, host, url);

  const { socketPath, socketPort, state } = serverState;
  const {
    assets,
    publicPath,
  } = state;
  const serverStyleSheet = new ServerStyleSheet();

  const reactAssetElements = createAssetElements(assets, publicPath);
  const {
    blogData,
    builtAt,
    contentData,
    latestCommitHash,
    repositoryUrl,
  } = serverState.state;
  const isomorphicData = {
    blogData,
    builtAt,
    contentData,
    latestCommitHash,
    repositoryUrl,
  };
  const staticContext: StaticContext = {};

  const element = (
    <ServerApp
      isomorphicData={isomorphicData}
      requestUrl={url}
      serverStyleSheet={serverStyleSheet}
      staticContext={staticContext}
    />
  );

  const reactAppInString = await renderToString(element);
  const styleTags = serverStyleSheet.getStyleTags();

  let {
    metaDescription,
    metaImageUrl,
    metaTitle,
  } = staticContext;

  if (metaImageUrl === undefined) {
    metaImageUrl = ogImageUrls[(
      Object.keys(ogImageUrls)
        .find((urlKey) => url.startsWith(urlKey))
      || 'default'
    )] as string;
  }

  const fullHost = isProd ? HARDCODED_STATIC_URL : (protocol + '://' + host);
  metaImageUrl = metaImageUrl.startsWith('/') ? fullHost + metaImageUrl : metaImageUrl;
  metaTitle = metaTitle ? metaTitle : contentData.general.name;
  metaDescription = metaDescription
    ? metaDescription
    : contentData.general.introduction.p1;

  const html = template({
    fontAwesomeCss: dom.css(),
    isomorphicData,
    metaDescription,
    metaImageUrl,
    metaTitle,
    reactAppInString,
    reactAssetElements,
    socketPath,
    socketPort,
    styledComponentsStyleElements: styleTags,
  })
    .replace(/[\r\n]+/gm, '');

  return html;
};

function template({
  fontAwesomeCss,
  isomorphicData,
  metaDescription,
  metaImageUrl,
  metaTitle,
  reactAppInString,
  reactAssetElements,
  socketPath,
  socketPort,
  styledComponentsStyleElements,
}) {
  return `
<html>
  <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161485149-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-161485149-1');
    </script>
    <link rel="icon" type="image/x-icon" href="/g/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,700|Work+Sans:400,500,700,800,900&display=swap" rel="stylesheet">
    <style>${fontAwesomeCss}</style>
    ${styledComponentsStyleElements}
    <script>window['ISOMORPHIC_DATA']=${JSON.stringify(isomorphicData)}</script>

    <title>Elden Park</title>
    <meta charset="UTF-8">
    <meta name="title" content="${metaTitle}" />
    <meta property="og:title" name="title" content="${metaTitle}"/>
    <meta name="description" content="${metaDescription}">
    <meta property=”og:description” content=”${metaDescription}” />
    <meta name="image" content="${metaImageUrl}" />
    <meta property="og:image" content="${metaImageUrl}" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  </head>
  <body>
    <div id="app-root">${reactAppInString}</div>
    ${reactAssetElements}
    ${socket(socketPort, socketPath)}
  </body>
</html>
`;
}

function socket(socketPort, socketPath) {
  return isProd
    ? ''
    : `
      <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.dev.js"></script>
      <script>
        if (window.io) {
          var socket = io('http://localhost:${socketPort}', {
            path: '${socketPath}'
          });
          socket.on('express-isomorphic', function ({ msg }) {
            console.warn('[express-isomorphic] %s', msg);
          });
        }
      </script>
    `;
}

export default makeHtml;
