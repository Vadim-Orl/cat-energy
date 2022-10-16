const {src, dest} = require("gulp");

//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude =require("gulp-file-include");
const htmlmin =require("gulp-htmlmin");
const size =require("gulp-size");


const html = ()=> {
  return src("source/html/*.html")
  .pipe(plumber({
    errorHandler: notify.onError(error =>({
      title: "HTML",
      message: error.message
    }))
  }))
  .pipe(fileInclude())
  .pipe(size({title: "До сжатия"}))
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(size({title: "после сжатия"}))
  .pipe(dest("./public"))
}

module.exports = html;