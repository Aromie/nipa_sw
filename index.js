const {Router}= require("express");

const router = Router();

router.get('/', (req,res) => {
    //특정 페이지 return => pug를 이용해서 생성(렌더링)한다
    res.render('index') //result에서 render를 사용하면 쉬움. 인자는 index
    
});

module.exports = router //app.js 에는 이 index.js 라우터 내용이 없다 이것을 불러오기 위해서 
                        //이 페이지에서 exports 해줌 -> 라우터를 내보내 하면
                        // app.js에서 require("express") 실행되면 라우터가 실행되고
                        //라우터가 실행되면 index 인자를 찾아 pug 템플릿 렌더링
