var name = "Shaun Jackson"
var bio = {
	"name" : "Shaun Jackson",
	"role" : "Web Developer",
	"contacts" : {"mobile" : "(253) 219-7502", "email" : "washyu@hotmail.com", "github" : "https://github.com/washyu", "localtion" : "Puyallup, WA, US"},
	"pictureURL" : "images/me.jpg",
	"skills" : ["C#", "Javascript", "HTML", "CSS", "Windows", "SQL", "Visual Studio", "GIT"]
};

var work = {
	"jobs" : [
		{
			"employer": "Microsoft",
			"title": "Service Ops",
			"location" : "Redmond, WA, US",
			"dates": "2009-2014",
			"description": "Ran manual and automated tests against new builds to verify build quality. Worked with developers and testers to resolve any issues that arose during tests. "
		},
		{
			"employer": "Volt (Microsoft)",
			"title": "Software Test Engineer III",
			"location" : "Redmond, WA, US",
			"dates": "2006-2009",
			"description": "Ran the performance test framework against new builds of Hyper-V. Verified performance numbers across builds.  Worked with the developers and testers to resolve any issue that arose during the tests."	
		},
		{
			"employer": "Volt (Microsoft)",
			"title": "SDET I",
			"location" : "Redmond, WA, US",
			"dates": "2004-2006",
			"description": "Ran the testing framework against new builds to verify build quality.  Wrote test plans and coded automation tests with in the automation framework. Worked with developers to verify the cause of test failures. In event failures were caused by specification changes, modified the test content. "	
		},
		{
			"employer": "Volt (Microsoft)",
			"title": "Software Test Engineer",
			"location" : "Redmond, WA, US",
			"dates": "2004-2005",
			"description": "Ensured that third-party devices and systems passed all of Microsoft’s requirements before they received a “Build for Windows” logo."	
		},
	]

}

var education = {
    "schools": [
        {
            "name": "DeVry",
            "city": "Federal Way, WA, US",
            "degree": "BS",
            "major": "Computer Information Systems",
            "gradYear": 2004
        }
    ],
    "onlineCources": [
        {
            "title": "Javascript Syntax",
            "school": "Udacity",
            "dates": 2015,
            "url": "Http://www.udacity.com/course/ud804"
        }
    ]
}

var projects = {
	"projects": [
		{
			"title" : "",
			"dates" : "",
			"description" : "",
			"images" : ["https://fakeurl.net/somthing.jpg"]
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);

if(bio.skills.lenght > 0)
{
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill){
		var formatedSkill = HTMLskills.replace("%data%", skill);
		$("#skills").append(formatedSkill);
	});
}

if(work.jobs.length > 0)
{
	work.jobs.forEach(function(job) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedDate = HTMLworkDates.replace("%data%", job.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	});
}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);


$("#main").append(internationalizeButton);

function inName(name) {
	var internationalName = name;
	var splitName = internationalName.split(" ");
		console.log(splitName);
	var firstName = splitName[0].toLowerCase();
	var lastName = splitName[1].toUpperCase();
	console.log(splitName);
	internationalName = firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName;
	return internationalName;
}