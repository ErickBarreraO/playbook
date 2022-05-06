// Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.
class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name,
        this.author= author,
        this.language=language,
        this.numberOfCommits=numberOfCommits,
        this.stars=stars,
        this.forks=forks,
        this.issues_open=issues_open,
        this.issues_close=issues_close
    }
}

class Issue {
    constructor(title, repositoryNameAssociates, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title=title
        this.repositoryNameAssociates=repositoryNameAssociates
        this.status=status
        this.numberOfComments=numberOfComments
        this.labels=labels
        this.author=author
        this.dateCreated=dateCreated
        this.lastUpdated= new Date()    
    }
}

class PullRequest {
    constructor(title, branchName, dateCreated, Status, repositoryNameAssociated){
        this,title=title
        this.branchName=branchName
        this.dateCreated=dateCreated
        this.Status=Status
        this.repositoryNameAssociated=repositoryNameAssociated
    }
}

class TwitterUser {
    constructor(user, userName, bio, age){
        this.user=user
        this.userName=userName
        this.bio=bio
        this.age=age
    }
}

class Trending_Topic {
    constructor(title, likes, retwits, shares){
        this.title=title
        this.likes=likes
        this.retwits=retwits
        this.shares=shares
    }
}

class Hashtag{
    constructor(title, uses){
        this.title=title
        this.uses=uses
    }
}

class FacebookUser{
    constructor(Name, UserName, Bio){
        this.Name=Name,
        this.UserName=UserName
        this.Bio=Bio
    }
}

class FacebookPost{
    constructor(Text, Date, Likes, Comments, Shares){
        this.Text=Text
        this.Date= Date
        this.Likes=Likes
        this.Comments=Comments
        this.Shares=Shares
    }
}

class FacebookBiography extends FacebookUser{
    constructor(Name, UserName, Friends, Posts, Photos){
        super(Name, UserName)
        this.Friends=Friends
        this.Posts=Posts
        this.Photos=Photos
    }
}

class UberProfile {
    constructor(UserName, Viajes, Estrellas){
        this.UserName= UserName
        this.Viajes=Viajes,
        this.Estrellas=Estrellas
    }
}

class UberTravel extends UberProfile{
    constructor(UserName, Viajes, Estrellas, Conductor, Inicio, Destino, Costo, FormaPago, Estatus){
        super(UserName, Viajes, Estrellas)
        this.Conductor=Conductor
        this.Inicio=Inicio
        this.Destino=Destino
        this.Costo=Costo
        this.FormaPago=FormaPago
        this.Estatus=Estatus
    }
}