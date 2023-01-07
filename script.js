const fs = require("fs");
   

fs.readFile("user.json", function(err, data) {
      
    if (err) throw err;
   
    const json = JSON.parse(data);
      
});


  

const user1 = require("./user.json");

let user = {
    userId: 8,
    firstName: "New1",
    lastName: "User2",
    phoneNumber: "9898989884",
    emailAddress: "New.user1@learningcontainer.com"
};

user1.users.push(user);
   
fs.writeFile("user.json", JSON.stringify(user1), err => {
     
    if (err) throw err; 
   
    console.log("Done writing"); 
});