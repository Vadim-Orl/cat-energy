const {src, dest, watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

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
  .pipe(browserSync.stream());
}

//Наблюдение
const watcher = () => {
  watch("source/html/**/*.html", html);
}

//Сервер
const server = ()=> {
  browserSync.init({
    server: {
      baseDir: "public/"
    }
  });

}

//Задачи
exports.html = html;
exports.watch= watcher;

//Сборка
exports.dev = series(
  html,
  parallel(watcher,server)
);
