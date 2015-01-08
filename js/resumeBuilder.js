var bio = {
	"name" : "Shaun Jackson",
	"role" : "Web Developer",
	"contacts" : {"mobile" : "(253) 219-7502", "email" : "washyu@hotmail.com", "github" : "https://github.com/washyu", "localtion" : "Puyallup, WA"},
	"pictureURL" : "images/me.jpg",
	"welcomeMessage" : "Hello World",
	"skills" : ["C#", "Javascript", "HTML", "CSS", "Windows", "SQL", "Visual Studio", "GIT"]
};

var work = {

};

var education = {

};

work.position = "Service Ops";
work.employer = "Microsoft";
work.yearsWorked = "10";
work.city = "Redmond";

education["name"] = "DeVry";
education["yearsAttended"] = "3";
education["city"] = "Federal Way";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#header").append(formattedWelcomeMsg);
$("#main").append(work["position"]);
$("#main").append(education.name);

