const http = require('http');
const app = require('./backend/app');


/*use default evn port or custom port*/
const port = process.env.PORT||6200;
/*set port for whole application you can get by app.get()*/
app.set('port',port);
/* for case sensitive rout treat all rout lowercase*/
app.set('case sensitive routing',true);

console.log(process);
console.log("this is end");

const server = http.createServer(app);
server.on('error',(error)=>{
    if(error.syscall != 'listen'){
        throw error;
    }
    switch(error.code){
        case "EACCESS":
            console.log('permission denied');
            process.exit(1);
            break;
        case "EADDINUSE":
            console.log('address already in use');
            process.exit(1);
            break;
        default: 
            throw error;
    }
})
server.on('close',()=>{
    console.log('server close');
})
server.on('listening',()=>{
    console.log('server is listening now');
})
server.listen(port);
