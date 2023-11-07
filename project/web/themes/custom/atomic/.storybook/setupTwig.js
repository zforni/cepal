const { resolve } = require('path');
const twigDrupal = require('twig-drupal-filters');
const twigBEM = require('bem-twig-extension');
const twigAddAttributes = require('add-attributes-twig-extension');

module.exports.namespaces = {
  atoms: resolve(__dirname, '../', 'patterns/atoms'),
  molecules: resolve(__dirname, '../', 'components/molecules'),
  organisms: resolve(__dirname, '../', 'components/organisms'),
  templates: resolve(__dirname, '../', 'components/templates'),
};

/**
 * Configures and extends a standard twig object.
 *
 * @param {Twig} twig - twig object that should be configured and extended.
 *
 * @returns {Twig} configured twig object.
 */
module.exports.setupTwig = function setupTwig(twig) {
  twig.cache();
  twigDrupal(twig);
  twigBEM(twig);
  twigAddAttributes(twig);

  return twig;
};
