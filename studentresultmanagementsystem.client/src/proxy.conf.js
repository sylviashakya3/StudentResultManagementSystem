const PROXY_CONFIG = [
  //{
  //  context: [
  //    "/weatherforecast",
  //  ],
  //  target: "https://localhost:7244",
  //  secure: false
  //},
  {
    "/api/*": {
      "target": "http://localhost:7244",
      "secure": false,
      "loglevel": "debug",
      "changeOrigin": true
    }
  }
]

module.exports = PROXY_CONFIG;
