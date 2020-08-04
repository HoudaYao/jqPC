const gulp = require("gulp");
gulp.task("copy-html", function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
    
})

gulp.task("images", function(){
    return gulp.src("images_i/*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
   
})

//处理js  对于使用框架编写的代码，就不要再进行压缩和合并这些操作
gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
    
})

//处理数据源
gulp.task("data", function(){
    return gulp.src(["*.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
    
})
gulp.task("php", function(){
    return gulp.src("*.php")
    .pipe(gulp.dest("dist/php"))
    .pipe(connect.reload());
})

gulp.task("build", ["copy-html", "images", "scripts", "data","sass","scssAll","php"], function(){
    console.log("项目建立成功");
})

//scss
const sass = require("gulp-sass");//编译
const minifyCSS = require("gulp-minify-css");//压缩
const rename = require("gulp-rename");//重命名

gulp.task("sass", function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scssAll", function(){
    return gulp.src("stylesheet/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
// 监听

gulp.task("watch", function(){
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("*.{jpg,png}", ["images"]);
    gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
    gulp.watch(["*.json", "!package.json"], ["data"]);
    gulp.watch("stylesheet/index.scss", ["sass"]);
    gulp.watch(["stylesheet/*.scss"], ['scssAll']);
    gulp.watch("*.php", ['php']);
})
// cnmp i gulp-connect -D 连接服务器的额插件

const connect = require("gulp-connect");

gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:"8888",
        livereload:true
    })
})
//同时启动服务器和任务
gulp.task("default", ["watch", "server"]);