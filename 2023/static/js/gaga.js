/**
 * onDOMContentLoaded
 * Called when DOM is fully loaded and parsed but NOT waiting for resources e.g. images, stylesheets, frames, or async assets
 * @param {function} callback
 */
function onDOMContentLoaded(callback) {
  if (
    document.readyState === 'interactive' ||
    document.readyState === 'complete'
  ) {
    setTimeout(callback, 1);
  } else {
    window.addEventListener('DOMContentLoaded', callback);
  }
}

/**
 * onWindowLoad
 * Called when DOM is fully loaded with resources but not necessarily for any async assets
 * @param {function} callback
 */
function onWindowLoad(callback) {
  if (document.readyState === 'complete') {
    setTimeout(callback, 1);
  } else {
    window.addEventListener('load', callback);
  }
}

/**
 * init site
 */
onWindowLoad(() => {
  console.debug('[onWindowLoad] cb called');
  initLiveBg();
});
