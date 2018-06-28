
var template= document.getElementById('template').innerHTML;
console.log(template);

var users =[
    {
        name:"levhita",
        description: "blablab blablab blab blah",
        img:"https://img00.deviantart.net/df62/i/2017/222/9/5/katarina___lol_by_sciamano240-dbh9jao.jpg"
    },{
        name:"levhita",
        description: "blablab blablab blab blah",
        img:"https://img00.deviantart.net/df62/i/2017/222/9/5/katarina___lol_by_sciamano240-dbh9jao.jpg"
    },{
        name:"levhita",
        description: "blablab blablab blab blah",
        img:"https://img00.deviantart.net/df62/i/2017/222/9/5/katarina___lol_by_sciamano240-dbh9jao.jpg"
    }
];

console.log(users);

var usersElement = document.getElementById('users');
users.forEach(function(user){
    var llenada= fillTemplate(template, user);
    usersElement.innerHTML=usersElement.innerHTML+llenada;
    
});





function fillTemplate(template, data) {
    for(var index in data){
        var value = data[index];
        template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
    };
    return template;
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}