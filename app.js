const http = require("http")
const port = 3000


const server = http.createServer((req,res)=>{
    res.write("Hello World!!")
    res.end()
})

server.listen(port,function(err){
    if(err){
        console.log('Something Went Wrong',err)
    }else{
        console.log(`listening on port ${port}...`)
    }
})