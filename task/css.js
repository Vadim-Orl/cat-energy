const {src, dest} = require("gulp");

//Конфигурация
const path =require("../config/path.js");
const app =require("../config/app.js");

//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");


const css = ()=> {
  return src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error =>({
        title: "SCC",
        message: error.message
      }))
    }))
    .pipe(dest(path.html.dest))
};

module.exports = html;