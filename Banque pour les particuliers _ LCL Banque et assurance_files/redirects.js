(function () {
  /*
   * Code below is meant to redirect user to its previous market website (pro, entreprise, bp)
   * We can't do it in SSR API because all routes are potentially cached by browser or RP,
   * so it is not called every time. So we do this redirect here in browser side.
   *
   * Note that we can't register it in angular.json "scripts" either, because we
   * need the code to be executed in the <head> and not at the end of the <body>.
   * Otherwise, the static page (from SSR and cached by the Browser) will be already rendered.
   */

  function getCookieRegEx(name) {
    const escapedName = name.replace(/([.\\+\-*:\/?!|^${}()\[\]])/g, '\\$1');
    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
  }

  function getCookie(cookies, name) {
    const encodedName = encodeURIComponent(name);
    const regEx = getCookieRegEx(encodedName);
    const cookieParts = regEx.exec(cookies);

    if (cookieParts) {
      return decodeURIComponent(cookieParts[1]);
    }
    return null;
  }

  /* RSI-1527 Remove HomePage Cookie
   *const lclgen = getCookie(document.cookie, 'lclgen');
   */

  /*
   * Note that `MARKET_REDIRECTIONS` and `getMarketUrlFromMarketCookie` are also defined in:
   *    `src/app/common/constants/redirects.ts`
   */

  /*
  *RSI-1527 Remove HomePage Cookie
  const MARKET_REDIRECTIONS = [
    {
      cookie: 'professionnels',
      url: '/professionnel',
    },
    {
      cookie: 'entreprises',
      url: '/entreprise',
    },
    {
      cookie: 'banque-privee',
      url: '/banque-privee',
    },
  ];

  function getMarketUrlFromMarketCookie(cookie) {
    const redirection = MARKET_REDIRECTIONS.find(function (item) {
      return item.cookie === cookie;
    });
    if (redirection) {
      return redirection.url;
    }
  }

  if (window.location.pathname === '/' && lclgen) {
    const redirectUrl = getMarketUrlFromMarketCookie(lclgen);
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }

*/
})();
