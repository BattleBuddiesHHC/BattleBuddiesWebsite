function Loading(){
	var load = document.getElementById('loader');
	load.remove();
}

function MainBtnClick(btn){
	if(btn == 0){
		$( "#centerframe" ).load( "./Resources/Loads/Home.html" );
		$( "#leftframe" ).load( "./Resources/Loads/Empty.html" );
		$( "#rightframe" ).load( "./Resources/Loads/Empty.html" );
	}else if(btn == 1){
		$( "#centerframe" ).load( "./Resources/Loads/Forms.html" );
		$( "#leftframe" ).load( "./Resources/Loads/LeftFrame/FormChoice.html" );
		$( "#rightframe" ).load( "./Resources/Loads/Empty.html" );
	}else if(btn == 2){
		$( "#centerframe" ).load( "./Resources/Loads/Career.html" );
		$( "#leftframe" ).load( "./Resources/Loads/LeftFrame/CareerChoices.html" );
		$( "#rightframe" ).load( "./Resources/Loads/RightFrame/CandidateSubmit.html" );
	}else if(btn == 3){
		$( "#centerframe" ).load( "./Resources/Loads/Info.html" );
		$( "#leftframe" ).load( "./Resources/Loads/LeftFrame/InfoSide.html" );
		$( "#rightframe" ).load( "./Resources/Loads/RightFrame/InfoLocation.html" );
	}else if(btn == 4){
		$( "#centerframe" ).load( "./Resources/Loads/Services.html" );
		$( "#leftframe" ).load( "./Resources/Loads/LeftFrame/ServicesSide.html" );
		$( "#rightframe" ).load( "./Resources/Loads/RightFrame/ServicesDesc.html" );
	}
}

function sendEmailComplaint(){
    var email = 'battlebuddiesoa@outlook.com';
    var subject = "Website Complaint";
    var emailBody = "Name: " + document.getElementById("name").value + "%0D%0A" + "Phone Number: " + document.getElementById("phone").value + "%0D%0A" + "Complaint: " + document.getElementById("message").value;
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
}

function sendEmailScheduleChange(){
    var email = 'battlebuddiesoa@outlook.com';
    var subject = "Website Schedule Change Need";
    var emailBody = "Name: " + document.getElementById("name").value + "%0D%0A" + "Phone Number: " + document.getElementById("phone").value + "%0D%0A" + "Schedule Change Needs: " + document.getElementById("message").value;
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
}

function sendEmailJob(){
    var email = 'battlebuddiesoa@outlook.com';
    var subject = "Website Applicant";
    var emailBody = "Name: " + document.getElementById("name").value + "%0D%0A" + "Phone Number: " + document.getElementById("phone").value + "%0D%0A" + "Email: " + document.getElementById("email").value + "%0D%0A" + "Position: " + document.getElementById("positions").value;
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
}

function Login(){
	if(document.getElementById("uname").value == "Battle"){
		if(document.getElementById("psswd").value == "Buddies"){
			document.getElementById("Employee").innerHTML = "<h2>Select a Form</h2>";
			$( "#empformbtn" ).remove();
			$( "#rightframe" ).load( "./Resources/Loads/RightFrame/Forms.html" );
			document.getElementById("dropdownadd").innerHTML = "<a onclick=\"openCareer(event, 'Complaint')\">Complaint</a><a onclick=\"openCareer(event, 'ClientSchedule')\">Schedule Change</a><a onclick=\"openCareer(event, 'DailyCare')\">Daily Care</a><a onclick=\"openCareer(event, 'Communication')\">Communication</a><a onclick=\"openCareer(event, 'Financial')\">Financial</a><a onclick=\"openCareer(event, 'Incident')\">Incident</a>";
		}else{
			document.getElementById("lgnerr").innerHTML = "Wrong username or password";
		}
	}else{
		document.getElementById("lgnerr").innerHTML = "Wrong username or password";
	}
}

function Startup(){
	Loading();
	MainBtnClick(0);
}
