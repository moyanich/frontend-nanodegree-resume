var bio = { 
		"name": "Moya",
		"role": "Web Master",
		"welcomeMessage": "Faith in love",
		"biopic": "images/fry.jpg",
		"contacts" : [
			{
			"mobile" : "888-555-6645",
			"email" : "me@mail.com",
			"github" : "me@github.com",
			"twitter": "me@twitter.com",
			"location": "France"
			}

		],
		"skills" : ["HTML", "CSS", "Python"],
		"contacts" : ""
}

var education = { 
	"schools" : [
		{
			"name": "UCC",
			"city": "Kingston",
			"degree": "BSC",
			"major": "I.T."
		},
		{
			"name": "UCC",
			"city": "Kingston",
			"degree": "BSC",
			"major": "I.T."
		}
	],

	"onlineCourses" : [
		{
			"title": "Javascript",
			"school" : "Udacity",
			"dates": "2020-05-25",
			"url": "www.udacity.com"
		}
	]
}


var work = { 
	"jobs" : [
		{
			"employer": "J Turn",
			"title": "Web Master",
			"location": "Paris",
			"dates": "2018-25-05",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet leo augue. Vivamus non lectus tellus. Etiam iaculis velit nec risus sollicitudin, sit amet sagittis ipsum eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lectus velit, porta vitae libero ac, gravida tristique purus. Ut dui tellus, pellentesque a euismod at, consectetur a dolor. Nulla quis blandit quam. Ut quis mauris feugiat magna lobortis pulvinar ac vel libero."
		},
		{
			"employer": "Butterfly Inc",
			"title": "Web Developer",
			"location": "Tehron",
			"dates": "2016-04-25",
			"description" : "Nulla at imperdiet lacus. Proin eget rhoncus augue. Ut semper, justo vel tempus mollis, augue elit luctus est, quis tristique lorem lacus quis est. Nunc eget dictum erat, at pulvinar nibh. Morbi lacinia lacus nec mollis suscipit. Pellentesque faucibus a mi eget tincidunt. Nullam facilisis, lectus vitae blandit lacinia, lectus nunc bibendum quam, vel accumsan leo nisi eget nulla. Praesent ac dolor velit. Curabitur libero dui, tincidunt vitae est ac, sodales efficitur odio. Ut venenatis porttitor elit ac aliquet. Mauris euismod faucibus auctor. Vestibulum lacus orci, tempus et enim ut, ornare malesuada urna. Curabitur sit amet risus aliquet, facilisis mi eu, aliquam nibh. Mauris pharetra mattis vehicula."
		}
	]
}


var projects = { 
	"projects" : [
		{
			"title": "Charity",
			"dates": "2019-02-28",
			"description" : "Website",
			"images" : ["images/fry.jpg", "images/fry.jpg"]
		},
		{
			"title": "Charity2",
			"dates": "2020-02-28",
			"description" : "Website 2",
			"images" : ["images/fry.jpg", "images/fry.jpg"]
		}
	]
}



var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPic);



var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);




if (bio['skills'].length > 0) {
	$("#header").append(HTMLskillsStart);

	/* OPTION 1
		//  create variable to store the array of skills
		var skills = bio['skills'];
		// Access the values in the array
		for (var i = 0; i < skills.length; i++) {
			
			// format the values 
			var newSkills = HTMLskills.replace("%data%", skills[i]);

			//append skill
			$('#skills').append(newSkills);
		} 
	*/

	/* OPTION  2 */
	// Access the values in the array
	for (var i = 0; i < bio['skills'].length; i++) {
		// format the values and replace the %data%
		var newSkills = HTMLskills.replace("%data%", bio['skills'][i]);
		//append skill



		$('#skills').append(newSkills);
	}

	/* OPTION  3 - FOR IN LOOP*/
	/*
	for(skill in bio.skills) {
		var newSkills2 = HTMLskills.replace("%data%", bio.skills[skill]);
		//append skill
		$('#skills').append(newSkills2);
	}
	*/
}

if (work['jobs'].length > 0) {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer =  HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle =  HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployeerTitle =  formattedEmployer + formattedTitle;

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);



		//append work
		$('.work-entry:last').append(formattedEmployeerTitle);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append( formattedDescription);
	}
}