const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:3000",
    secure: false,
    ws: true,
  },
];

module.exports = PROXY_CONFIG;
