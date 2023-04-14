const plugin = require("tailwindcss/plugin");

const tableCaption = plugin(function ({ addUtilities }) {
  addUtilities({
    ".caption-bottom": {
      "caption-side": "bottom",
    },
  });
});

module.exports = tableCaption;
