var work = { 
    "jobs" : [
       {
         "name": "UCC",
         "city": "Kingston",
         "degree": "BSC",
         "major": "I.T."
       },
       {
         "name": "Jago",
         "city": "Spanish Town",
         "degree": "CXC",
         "major": "Science"
       }
     ]
   }
   
   
   var project = { 
     "freelance" : [
       {
         "name": "UCC",
         "city": "Kingston",
         "degree": "BSC",
         "major": "I.T."
       },
       {
         "name": "Jago",
         "city": "Spanish Town",
         "degree": "CXC",
         "major": "Science"
       }
     ]
   }
   

   
var weirdObject = {
	"property": "Time for an astronomy lesson!",
	"property1": "Cameron's minor in college was astronomy",
	"property-2": "The 4 Galilean largest moons of Jupiter are:",
	"property 3": "Io, Ganymede, Callisto, Europa",
	"property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
	" property": "The Sun contains 99.87% of the mass of the entire solar system",
	"property()": "There are 5 dwarf planets in our solar system:",
	"property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
	"8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
console.log(weirdObject.property$);
console.log(weirdObject['property$']);
// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = true;
var bracketNotation1 = true;

// property-2
var dotNotation2 = false;
var bracketNotation2 = true;

// property 3
var dotNotation3 = false;
var bracketNotation3 = true;

// property$
var dotNotation4 = true;
var bracketNotation4 = true;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = true;

// property()
var dotNotation6 = false;
var bracketNotation6 =  true;

// property[]
var dotNotation7 = false;
var bracketNotation7 = true;

// 8property
var dotNotation8 = false;
var bracketNotation8 = true;
   
   /* var myName = "Lucy";
   var funThouhgts = "my name is " + myName  + " and I AM AWESOME";
   funThouhgts = funThouhgts.replace("AWESOME", "FUN"); 
   $("#main").append(funThouhgts);
   */ 
   
   /*
   var myName = "Lucy Newman";
   var myRole = "Web Master";
   var skills = ["HTML", "CSS", "Python"];
   
   var formattedRole = HTMLheaderRole.replace("%data%", myRole);
   var formattedName = HTMLheaderName.replace("%data%", myName);
   skills = HTMLskills.replace("%data%", skills);
   
   
   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName);
   $("#workExperience").append(skills[0]);
   
   
   var intro = {};
   intro.name = "Lucy Newman";
   
   var formattedName = HTMLheaderName.replace("%data%", intro.name);
   $("#header").prepend(formattedName);
   
   
   var workObj = {};
   workObj.position = "Web Master";
   workObj.employer = "JBDC";
   
   var position = HTMLworkEmployer.replace("%data%", workObj.employer);
   var employer = HTMLworkTitle.replace("%data%", workObj.position);
   
   $("#workExperience").append(employer);
   $("#workExperience").append(position);
   
   
   var education = { 
     "schools" : [
       {
         "name": "UCC",
         "city": "Kingston",
         "degree": "BSC",
         "major": "I.T."
       },
       {
         "name": "Jago",
         "city": "Spanish Town",
         "degree": "CXC",
         "major": "Science"
       }
     ]
   }
   
   
   
   
   $("#workExperience").append(employer);
   $("#workExperience").append(position);
   
   
   //$("#workExperience").append(workObj[employer]);
   */
   
   
   
   
   
   // Creating an object using object literal notation
   /*
   var bio = {
     "name" : "Lucy Newman",
     "age" : 32,
     "role" : "Web Master",
     "contact" : {
       "tel" : "888-555-6645",
       "email" : "me@mail.com"
     },
     "welcomeMessage" : "Faith in love",
     "skills" : ["HTML", "CSS", "Python"],
     "pic" : "images/fry.jpg"
   
   }
   
   $("#header").append(bio.name);
   $("#header").append(bio.age);
   $("#header").append(bio.role);
   $("#header").append(bio.contact.tel);
   */
   
   
   
   /*
   var text = "audacity";
   
   var udacityizer = function(string) {
     // Right now, the variable string === "audacity"
     // Manipulate string to make it equal to "Udacity"
     // Your code goes here!
   
     firstString = string.slice(1, 2).toUpperCase();
     string = firstString + string.substr(2);
   
     //string = string.substr(1).toUpperCase();
   
     return string;
   };
   
   // Did your code work? The line below will tell you!
   console.log(udacityizer(text));
   
   var sampleArray = [0,0,7];
   
   var incrementLastArrayElement = function(_array) {
       var newArray = [];
       // Your code should make newArray equal to an array that has the same
       // values as _array, but the last number has increased by one.
       
       // For example:
       // _array = [1, 2, 3];
       // turns into:
       // newArray = [1, 2, 4];
       
       // Your code goes in here!
   
       newArray = _array.slice(0);
   
       var removeNum = newArray.pop();
   
       newArray.push(removeNum + 1);
   
      //	newArray = newArray.push("1");
   
       // Don't delete this line!
       return newArray;
   };
   
   // Did your code work? The line below will tell you!
   console.log(incrementLastArrayElement(sampleArray));
   
   */