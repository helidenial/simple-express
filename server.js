const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{ console.log(req.socket.remoteAddress+"Logged in");
res.send('Hello World! at: ' + req.socket.remoteAddress);
})

app.listen(port, ()=> { 
  console.log("Example app listening at port:"+port);
})

