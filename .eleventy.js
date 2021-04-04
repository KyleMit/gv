

module.exports = function(eleventyConfig) {

    // static passthroughs
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    // add filters
    eleventyConfig.addFilter("cssmin", require("./plugins/clean-css.js") );
    eleventyConfig.addNunjucksAsyncFilter("jsmin", require("./plugins/clean-js.js"))

    return {
        dir: {
            includes: "assets",
            layouts: "layouts"
        },

        // By default markdown files are pre-processing with liquid template engine
        // https://www.11ty.io/docs/config/#default-template-engine-for-markdown-files
        markdownTemplateEngine: "njk",
    };
};
