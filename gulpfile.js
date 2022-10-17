const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();
const path = require("./config/path.js");

//задачи
const clear = require("./task/clear.js");
const html = require("./task/html.js");
const scss = require("./task/scss.js");


//Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
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
exports.scss= scss;


//Сборка
exports.dev = series(
  clear,
  parallel(scss, html),
  parallel(watcher,server)
);
