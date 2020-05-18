/* var myName = "Lucy";
var funThouhgts = "my name is " + myName  + " and I AM AWESOME";
funThouhgts = funThouhgts.replace("AWESOME", "FUN"); 
$("#main").append(funThouhgts);
*/

var myName = "Lucy Newman";
var myRole = "Web Master";
var skills = ["HTML", "CSS", "Python"];

var formattedRole = HTMLheaderRole.replace("%data%", myRole);
var formattedName = HTMLheaderName.replace("%data%", myName);
skills = HTMLskills.replace("%data%", skills);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#workExperience").append(skills[1]);






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