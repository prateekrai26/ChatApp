const Tmessage=(username , text)=>
{
    return {
        username, 
        text,
        createdAt : new Date().getTime()
    }
}

const sendLocation=(username , url)=>
{
    return {
        username, 
        url,
        createdAt : new Date().getTime()
    }
}




module.exports = {
    Tmessage ,
    sendLocation
}