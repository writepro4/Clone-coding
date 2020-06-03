import routes from "./Routers/router";

export const localsMiddleware =(req, res, next)=>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    //다음 함수로 넘어가기위해 next()사용
    next();
}