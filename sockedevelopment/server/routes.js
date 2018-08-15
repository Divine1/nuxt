module.exports = (app) => {
    app.get("/",(req,res)=>{
        console.log("in root route")
        res.send({"data" : "value"})
    })
}