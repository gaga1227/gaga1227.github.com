// custom loader config
const WebFontConfig = {
  custom: {
    families: ['NovecentoWide:n2,n3,n4,n5,n6,n7'],
    urls: ['static/font/novecentowide/font.css'],
  },
  loading: function () {
    console.debug('wf loading');
  },
  active: function () {
    console.debug('wf active');
  },
  inactive: function () {
    console.debug('wf inactive');
  },
  fontloading: function (familyName, fvd) {
    console.debug(familyName, fvd, 'loading');
  },
  fontactive: function (familyName, fvd) {
    console.debug(familyName, fvd, 'active');
  },
  fontinactive: function (familyName, fvd) {
    console.debug(familyName, fvd, 'inactive');
  },
};
if (window.WebFont) {
  window.WebFont.load(WebFontConfig);
}
