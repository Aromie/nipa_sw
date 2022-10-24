/* web proj 1 self introduction page
  
  지시사항

/ 경로에 자기 소개 페이지를 만들어주세요.

자기소개 페이지에는 다음이 포함되어야합니다:

제목(header, h1)

문단(paragraph, p)

*/

//아래 주어진 app.js 홈페이지의 첫 화면, Express 프로그램이 구동할 때 가장 처음 작동하는 페이지
//웹페이지가 요청되면 require

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser'); //
const logger = require('morgan');
const mongoose = require('mongoose');
const dayjs = require('dayjs');


/* TODO: indexRouter 연동 */ 
 

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* TODO: indexRoute 연동 */ 


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/*
app.js 페이지 구성
1. 다양한 모듈이 불러와져 있고,
2. 라우터도 불러오고
3. Express 객체를 불러오고
4. view 템플릿 셋팅 부분 : pug 렌더링 라이브러리를 사용
5. app.use함수부분 여러가지 기능을 사용할 것을 명시함 : logger, cookieParser 등
6. 라우터 내용이 담긴 경로 지정
7. 미들웨어 : 에러 핸들링
8. app을 내보내기
*/

/*
첫번째 들어갈 코드는 
const indexRouter = require("./routes");

두번째는
app.use("/",indexRouter);
*/
