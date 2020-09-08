// webpack 是基于nodejs的
const path = require('path')
module.exports = {
  //上下文 项目打包的相对路径
  // context: process.cwd(), 必须是绝对路劲
  //入口 字符串 数组 对象
  // entry: "./src/index.js",
  entry: ["./src/index.js", "./src/other.js"],
  //出口
  output: {
    //构建的文件资源放在哪？ 必须是绝对路径
    path: path.resolve(__dirname, "./dist"),
    //构建文件资源叫啥?
    filename: "main.js",
  }
}