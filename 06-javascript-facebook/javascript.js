//LOOPS
var todolist = [
    "levantarme",
    "bañarme",
    "desayunar",
    "ir al trabajo",
    "renunciar"
];

//FOR LOOP
for (var f=0; f<todolist.length; f++){
    console.log("for: "+todolist[f]);
}

//WHILE LOOP
var w=0;
while(w < todolist.length){
    console.log("while: "+todolist[w]);
    w++;
}

//DO WHILE LOOP
var d=0;
do{
    console.log("do while: "+todolist[d]);
    d++;
} while(d<todolist.length);

//FOREACH LOOP
todolist.forEach(Element => console.log("For each: "+Element));

//FUNCTIONS, ARRAYS AND OBJECTS
var database = [
    {
        user:"mark",
        password:"zuckerberg"
    }
];

var posts = [
    {
        user: "Joe Satriani",
        timeline: "I love guitar"
    },
    {
        user: "Herman Li",
        timeline: "Hear this divebomb!!!!"
    },
    {
        user: "Paul Gilbert",
        timeline: "Take it away Marco!!!!"
    },
    {
        user: "Santana",
        timeline: "Samba pa ti...."
    },
];



function login(){
    var userName=prompt("User Name: ");
var userPassword=prompt("UserPassword: ");
    if(userName===database[0].user && userPassword===database[0].password){
        console.log(posts);
    }else{
        console.log("Username and/or password invalid   ");
    }
}

