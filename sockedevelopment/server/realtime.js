module.exports = (io) =>{
    
    io.on('connection', function(socket){
        console.log('a user connected');
    
        socket.emit('usermessage',{"data" : "ef"});
        
        socket.on('USER_MESSAGE',function(data){
        console.log("USER_MESSAGE ",data)
        });
        
        socket.on('disconnect', function(){
        console.log('user disconnected');
        });
    });
}