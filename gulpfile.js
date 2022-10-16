const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

//задачи
const clear = require("./task/clear.js");
const html = require("./task/html.js");


//Наблюдение
const watcher = () => {
  watch("source/html/**/*.html", html).on("all", browserSync.reload);
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

//Сборка
exports.dev = series(
  clear,
  html,
  parallel(watcher,server)
);
