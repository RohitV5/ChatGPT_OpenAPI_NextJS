interface Message {
    text:string,
    createdAt:Timestamp;
    user:{
        _id:string,
        name:string,
        avatar:string
    }
}