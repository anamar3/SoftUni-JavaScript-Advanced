class Story {
    constructor(title,creator ){
            this.title = title;
            this.creator = creator;
            this._comments = [];
            this._likes =[];
        }

        get likes (){
if(this._likes.length == 0){
    return `${this.title} has 0 likes`;
}
if(this._likes.length == 1){
    return`${this._likes[0]} likes this story!`;
}

return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }

        like (username){
            if(this._likes.includes(username)){
                throw new Error("You can't like the same story twice!");

            }

            if(username == this.creator){
                throw new Error("You can't like your own story!");
            }

this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }

        dislike (username){
            if(!this._likes.includes(username)){
                throw new Error("You can't dislike this story!");
            }
            let index = this._likes.indexOf(username);
this._likes.splice(index,1);
            return `${username} disliked ${this.title}`;
        }
        comment (username, content, id){
            let currComment = this._comments.find(x=>x.Id == id);
let count = 1;
            if(currComment == undefined || id == undefined){
                this._comments.push({Content:content, Username:username,Id:this._comments.length+1,Replies: []});
                return`${username} commented on ${this.title}`;
            }
if(currComment.Replies.length != 0){
    count = currComment.Replies.length+1;
}
            currComment.Replies.push({Id: `${id}.${count}`, Username:username,Content:content});
return "You replied successfully";
        }

        toString(sortingType){
            let output = [];
            output.push(  `Title: ${this.title}`);
            output.push(`Creator: ${this.creator}`);
            output.push(`Likes: ${this._likes.length}`);
output.push('Comments:');
if(this._comments.length == 0){
    return output.join(`\n`);
}

            let sortedComments = [];
            if(sortingType == 'asc'){
sortedComments = this._comments.sort((a,b)=>a.Id-b.Id)
sortedComments.forEach(c=>c.Replies.sort((a,b)=>a.Id -b.Id));
            }else if(sortingType == 'desc'){
                sortedComments = this._comments.sort((a,b)=>b.Id - a.Id)
sortedComments.forEach(c=>c.Replies.sort((a,b)=>b.Id -a.Id));
            }else if(sortingType == 'username'){
                sortedComments = this._comments.sort((a,b)=>a.Username.localeCompare(b.Username))
            sortedComments.forEach(c=>c.Replies.sort((a,b)=>a.Username.localeCompare(b.Username)))
            }

         
            for (const comment of sortedComments) {
                output.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);
             
                    if(comment.Replies.length !=0){
                     for (const reply of comment.Replies) {
                         output.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`);
                     }          
                    
                     }


            }
        //    for (let i = 0; i < sortedComments.length; i++) {
        //    if(sortedComments[i].Replies.length !=0){
        //     for (const reply of sortedComments[i].Replies) {
        //         output.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`);
        //     }          
        //    }
        //     }

            return output.join(`\n`);
        }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
