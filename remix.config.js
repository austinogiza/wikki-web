// module.exports = {
//   ignoredRouteFiles: [".*"],
//   // appDirectory: "app",
//   // assetsBuildDirectory: "public/build",
//   // serverBuildPath: "build/index.js",
//   // publicPath: "/build/",
//   // devServerPort: 8002
// }

//node server
// module.exports = {
//   server: "./server.js",
//   ignoredRouteFiles: [".*"],
//   devServerBroadcastDelay: 1000,
//   // appDirectory: "app",
//   // assetsBuildDirectory: "public/build",
//   // serverBuildPath: "build/index.js",
//   // publicPath: "/build/",
//   // devServerPort: 8002
// }
//netlify
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "netlify/functions/server/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
}
