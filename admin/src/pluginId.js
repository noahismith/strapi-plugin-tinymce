const pluginPkg = require("../../package.json");

const pluginId = pluginPkg.name.replace(/^(@noahismith\/strapi-)plugin-/i, "");

module.exports = pluginId;
