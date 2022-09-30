class ArtGallery{
    constructor(creator){
        this.possibleArticles= { "picture":200,"photo":50,"item":250 };
this.creator = creator;
this.listOfArticles = [];
this.guests = [];
    }
    addArticle( articleModel, articleName, quantity ){
        if(!Object.keys(this.possibleArticles).includes(articleModel.toLowerCase())){
            throw new Error("This article model is not included in this gallery!");
        }
let article = this.listOfArticles.find(obj=>obj.articleName == articleName);
if(article == undefined){
    this.listOfArticles.push({articleModel: articleModel,articleName:articleName,quantity:quantity});
}else{
    if(article.articleModel == articleModel){
        article.quantity+=quantity;
    }else{
        this.listOfArticles.push({articleModel: articleModel,articleName:articleName,quantity:quantity});
    }
}
let currArticle = this.listOfArticles.find(a=>a.articleModel == articleModel);
        return `Successfully added article ${articleName} with a new quantity- ${currArticle.quantity}.`;
    }

    inviteGuest ( guestName, personality){
        let points = 50;
        let currGuest = this.guests.find(obj=>obj.guestName == guestName);
        if(currGuest == undefined){
            if(personality == "Vip"){
points = 500;
            }if(personality == 'Middle'){
                points = 250;
            }
            this.guests.push({guestName, points, purchaseArticle:0});
        }else{
            throw new Error(`${guestName} has already been invited.`);
        }
        return  `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName){
        let article = this.listOfArticles.find(obj=>obj.articleName == articleName);
        if(article == undefined || article.articleModel.toLowerCase() != articleModel){
throw new Error("This article is not found.");
        }
        if(article.quantity == 0){
            return `The ${articleName} is not available.`;
        }
        let currGuest = this.guests.find(obj=>obj.guestName == guestName);
        if(currGuest == undefined){
            return  "This guest is not invited.";
        }
        let priceOfArticle = 0;
        if(articleModel=='picture'){
            priceOfArticle=200;
        }else if(articleModel == 'item'){
            priceOfArticle = 250;
        }else{
            priceOfArticle = 50;
        }

        if(currGuest.points<priceOfArticle){
            return "You need to more points to purchase the article.";
        }else
        {
            currGuest.points -= priceOfArticle;
            article.quantity--;
            currGuest.purchaseArticle++;
        }
        return `${guestName} successfully purchased the article worth ${priceOfArticle} points.`;
    }

    showGalleryInfo (criteria){
        let output = '';
        if(criteria == 'article'){
output+="Articles information:";
for (const article of this.listOfArticles) {
    output+=`\n${article.articleModel.toLowerCase()} - ${article.articleName} - ${article.quantity}`
}
        }else if(criteria=='guest'){
            output+="Guests information:";
            for (const guest of this.guests) {
                output+=`\n${guest.guestName} - ${guest.purchaseArticle}`;
            }
        }
        return output;
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

