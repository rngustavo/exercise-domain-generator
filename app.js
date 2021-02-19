let pronoun = ['the', 'our', 'we'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['com', 'us'];
let domains = [];
let domains2 = [];
let links = ''

//validacion de ir por buen camino
/*for (let i = 0; i < pronoun.length; i++) {
    links=  pronoun[i]+adj[i]+noun[i]+'.com';
   domains.push(links);
    
}
console.log(domains);*/


//primer forma  mediante for simple
for (let p = 0; p < pronoun.length; p++) {

    for (let a = 0; a < adj.length; a++) {

        for (let n = 0; n < noun.length; n++) {

            for (let e = 0; e < extensions.length; e++) {
                links = pronoun[p] + adj[a] + noun[n] + '.' + extensions[e];
                domains.push(links);
            }

        }

    }
}


console.log('mediante for simple');
console.log(domains);



//Segunda forma mediante forEach
pronoun.forEach((p) =>{
    adj.forEach((a) =>{
        noun.forEach((n) =>{
            extensions.forEach((e) =>{
                links = p + a + n + '.' + e;
                domains2.push(links);
            });
        });
    });
});
console.log('mediante forEach ');
console.log(domains2);