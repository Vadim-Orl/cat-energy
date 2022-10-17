const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();
const path = require("./config/path.js");

//задачи
const clear = require("./task/clear.js");
const html = require("./task/html.js");
const css = require("./task/css.js");


//Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.css.watch, css).on("all", browserSync.reload);
};


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
exports.clear= clear;
exports.css= css;


//Сборка
exports.dev = series(
  clear,
  parallel(css, html),
  parallel(watcher,server)
);
