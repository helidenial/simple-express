const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.get('/',(req,res)=>{ console.log("Remote Address: "+req.socket.remoteAddress+"\nLogged in\n Listening at port "+port);
res.send("Remote Address: "+req.socket.remoteAddress+"\nLogged in\n Listening at port "+port);
})

app.listen(port, ()=> { 
  console.log("Example app listening at port:"+port);
})

