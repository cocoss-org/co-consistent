const withPurgeCss = require("next-purgecss")
const withImages = require("next-images")

module.exports = withImages(
    withPurgeCss({
        images: {
            loader: "custom",
        },
        basePath: "/co-vectorize",
        assetPrefix: "/co-vectorize",
        eslint: {
            ignoreDuringBuilds: true,
        },
        pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
        trailingSlash: true,
        purgeCssPaths: ["pages/**/*", "components/**/*"],
        purgeCss: {
            safelist: ["body", "html"],
        },
    })
)
