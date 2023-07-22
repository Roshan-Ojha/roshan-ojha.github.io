/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    // images: {
    //     loader:'akamai',
    //     path:'',
    // },

    // assetPrefix:"./",  


    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })

        return config
    },

}

module.exports = nextConfig
