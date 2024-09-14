(function () {
  // This script tries to prevent (or at least minimize) the "flickering" effect when the SSR content is rendered.
  // It hides the Angular components potentially targeted by the personalization.
  // This has to be done as soon as possible, and ideally before the first page rendering.

  var ENCRYPTED_ID_REPER_KEY = 'cookie_personnalisation_LCL';
  var INTERACT_TARGET_COMPONENTS = ['slice-super-hero'];

  var hasEncryptedIdReper = new RegExp(ENCRYPTED_ID_REPER_KEY + '\\s*=\\s*[^;]+').test(document.cookie);
  if (!hasEncryptedIdReper) {
    return;
  }

  var components = document.querySelectorAll(INTERACT_TARGET_COMPONENTS.join(','));
  Array.prototype.forEach.call(components, hideComponent);

  function hideComponent(element) {
    element.style.opacity = '0';
  }
})();
