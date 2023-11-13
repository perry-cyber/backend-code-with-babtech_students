// const { Console } = require("console");
const fileSystem = require("fs");



const readStream = fileSystem.createReadStream("./docs/blog.txt", {encoding: "utf8"})
const writeStream = fileSystem.createWriteStream("./docs/blog1.txt")


// readStream.on("data", (chunk) =>{
//     console.log("...NEW DATA...")
//     // console.log(chunk)
//     writeStream.write('\n New Chunk \n')
//     writeStream.write(chunk)
//     console.log("done.!");
// })

//pipe method
readStream.pipe(writeStream);

