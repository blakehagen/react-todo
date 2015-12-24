module.exports = {
    entry: "./app/app.jsx",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: /app/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=react'
            }
        ]
    }
};