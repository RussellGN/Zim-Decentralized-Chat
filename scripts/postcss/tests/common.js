const postcss = require("postcss");

module.exports.createTestRunner = function (plugin) {
   return async function run(input, output, opts = {}, assert) {
      let result = await postcss([plugin(opts)]).process(input, { from: undefined });
      assert.strictEqual(result.css.replaceAll(/\s/g, ""), output.replaceAll(/\s/g, ""));
      assert.strictEqual(result.warnings().length, 0);
   };
};
