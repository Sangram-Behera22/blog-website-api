import app from "./app.js"

app.listen(process.env.PORT,function(){
    console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`);
})