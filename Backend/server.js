const http =  require("http");
const fileSystem = require("fs");
const _ = require("lodash")
const server = http.createServer((req, res) =>{
    // lodash
    // const num = _.random(0, 20);
    // console.log(num)

    const greet = _.once(() =>{
        console.log("hello");
    })

    greet();

    // 1 set header content type
    res.setHeader("Content-Type", "text/html");
    

let path = "./html";

switch (req.url) {
    case "/" :path += "/index.html";
    res.statusCode = 200 ; 
     break;

    case "/about"
    : path += "/about.html";
    res.statusCode = 200;
    break;
    case "/job":
    res.statusCode = 301;
    res.setHeader("Location", "/about");
    res.end();
    break;

    default: 
    path+= "/notFound.html";
    break;
}



fileSystem.readFile(path, (err, data)=>{
    if(err){
        console.log(err);
        res.end();
    }else{
        
        res.end(data);
    }
})
});





const port = 5000
server.listen(port, "localhost", ()=>{
    console.log("hey perry i can listen to the server");
})
