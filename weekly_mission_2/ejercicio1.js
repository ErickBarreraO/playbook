// Ejercicio 1.1
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}
   
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

// Ejercicio 1.2 
const Issue = {  
  title: "Semana 2",
  repositoryNameAssociated: "Weekly_Mission_2",
  status: "Open",
  numberOfComments: 60,
  labels: ["Bugs", "Code", "learning"],
  author: "ErickBarreraO",
  dateCreated: "Abril 2022",
  lastUpdated: "Mayo 2022",
  getTitleandAuthor: function(){
    return `${this.title} por ${this.author} ` 
  },
  getGeneralInfo: function(){
    return `Este Issue fue creado en ${this.dateCreated} por ${this.author} y su útima actualización fue en ${this.lastUpdated}`
  }
}

console.log("Titulo del Issue y autor del Issue:" + Issue.getTitleandAuthor())
console.log("Información General: " + Issue.getGeneralInfo())

//Ejercicio 1.3
const PullRequest = {
  title: "Ejercicios Semena 2",
  branchName: "Entrega de ejecicios",
  dateCreated: "Abril 2022",
  Status: "Pendiente",
  repositoryNameAssociated: "Launch X",
  getStatus: function(){
    return `Status: ${this.Status}`
  },
  getTitleAndAuthor(){
    return `Título del PR: ${this.title} Autor: ${this.author}`
  }
}

console.log("Status del PR " + PullRequest.getStatus())
console.log("Autor y Título:" + PullRequest.getTitleAndAuthor())

// Twitter 
  
  // 1. User

const User = {
  user: "Erick",
  username: "@GhostlyGremlin",
  bio: "Hola soy Erick y estoy aprendiendo programación gracias a Launch X",
  age: 25
}

  // 2. Trending Topic

const Trending_Topic = {
  title: "Launch X",
  likes: 10000,
  retwits: 7500,
  shares: 5000, 
}

  // 3. Hashtag

const Hashtag = {
  title: "Programación",
  uses: 10000,
}

// Facebook
  // 1. User
const Profile = {
  Name: "Erick Barrera",
  UserName: "Erick ",
  Bio: "Hola, mi nombre es Erick y estoy aprendiendo progrmación gracias a Launch X",
  getName: function(){
    return `Hello, I am ${this.Name} and I'm in Facebook`
  },
}
console.log("Ejemplo de usuario de Facebook")
console.log(Profile.getName())

  // 2. Post
const Post = {
  Text: "Mi primera publicación en facebook",
  Date: "Abril 19, 2022",
  Likes: 200,
  Comments: 50, 
  Shares: 25
}
  // 3. Biography
const Biography = {
  UserName: "Erick Barrera",
  Friends: 2000,
  Posts: 60,
  Photos: 20,
}
//Uber
  // 1. Profile
const User_Profile = {
  UserName: "Erick Barrera",
  Viajes: 50,
  Estrellas: 5
}

  // 2. Travel

const Travel = {
  UserName: "Erick Barrera",
  Conductor: "Checo Pérez",
  Inicio: "Av. Insurgentes 530",
  Destino: "Alameda Central",
  Costo: 200,
  FormaPago: "Efectivo",
  Estatus: "En progreso"
}