module.exports =  {
    resolve:{
        fallback:{ 
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            path: require.resolve("path-browserify"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify/browser")
        }
    }
}