var skillCounter = 1, experienceCounter = 1;

// var personalInfoNext = document.getElementById('personalInfoNext');
var personalInfoSection = document.getElementById('personalInfoSection').style.display = "block";
var educationalInfoSection = document.getElementById('educationalInfoSection').style.display = "none";
var workExperienceInfoSection = document.getElementById('workExperienceInfoSection').style.display = "none";
var cvTemplate = document.getElementById('cvPrint').style.display = "none";
var cvName = document.getElementById('cvName');
var cvPhone = document.getElementById('cvPhone');
var cvEmail = document.getElementById('cvEmail');
var cvLocation = document.getElementById('cvLocation');
var cvProfession = document.getElementById('cvProfession');
var cvWebsite = document.getElementById('cvWebsite');
var cvAboutDesp = document.getElementById('cvAboutDesp');
var cvObjectiveDesp = document.getElementById('cvObjectiveDesp');
var cvEducationDesp = document.getElementById('cvEducationDesp');






function personalInfoDisplay() {

  // personalInfoSection.style.display ="none";
  $("#personalInfoSection").fadeOut();
  $("#educationalInfoSection").fadeIn();

  var name = cvName.value;
  var phone = cvPhone.value;
  var email = cvEmail.value;
  var location = cvLocation.value;
  var proffesion = cvProfession.value;
  var about = cvAboutDesp.value;
  var website = cvWebsite.value;



  console.log(about);
  var aboutDescription = document.getElementById('aboutDescription').innerHTML = about;
  var cvGmail = document.getElementById('tGmail').innerHTML = email;
  var tLocation = document.getElementById('tLocation').innerHTML = location;
  var tWebsite = document.getElementById('tWebsite').innerHTML = website;
  var tNumber = document.getElementById('tNumber').innerHTML = phone;
  var tName = document.getElementById('tName').innerHTML = name;
  var tProfession = document.getElementById('tProfession').innerHTML = proffesion;

}
function educationalInfoDisplay() {
  $("#educationalInfoSection").fadeOut();
  $("#workExperienceInfoSection").fadeIn();

  var objective = cvObjectiveDesp.value;
  var education = cvEducationDesp.value;

  var tObjectiveDescription = document.getElementById('tObjectiveDescription').innerHTML = objective;
  var tEducationDescription = document.getElementById('tEducationDescription').innerHTML = education;

}
function workExperienceInfoDisplay() {

  $("#workExperienceInfoSection").fadeOut();
  $("#cvPrint").fadeIn();


  var experienceData = document.getElementById('experienceData');
  var skillsData = document.getElementById('skillsData');


  for (let i = 1; i <= experienceCounter; i++) {
    experienceData.innerHTML += ` <h3 id="experienceCvTitle` + i + `">Netroots</h3>
  <p id="experienceCVDetail`+ i + `">Ipsam velit ducimus repellendus quam quos sapiente numquam. Expedita suscipit
    quis reprehenderit, a, quo,
    rerum aliquam consequatur adipisci quaerat placeat facilis quia.
  </p>`;




  }
  for (let i = 1; i <= skillCounter; i++) {


    skillsData.innerHTML += `<div class="skill">
  <h6 id="cvSkillTitle`+ i + `">HTML</h6>
  <div class="progress">
    <div class="progress-bar" id="cvSkillBar`+ i + `" role="progressbar" aria-valuenow="0" style="width: 0%" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
</div>`;


  }


  for (let i = 1; i <= experienceCounter; i++) {
    var cvPosition = document.getElementById("cvPosition" + i).value;
    var cvExperienceDesp = document.getElementById("cvExperienceDesp" + i).value;
    document.getElementById("experienceCvTitle" + i).innerHTML = cvPosition;
    document.getElementById("experienceCVDetail" + i).innerHTML = cvExperienceDesp;
  }

  for (let i = 1; i <= skillCounter; i++) {
    var cvSkill = document.getElementById("cvSkill" + i).value;
    var cvSkillExpertise = document.getElementById("cvSkillExpertise" + i).value;
    document.getElementById("cvSkillTitle" + i).innerHTML = cvSkill;
    document.getElementById("cvSkillBar" + i).style.width = cvSkillExpertise + "%";
    console.log(cvSkill + "  =   " + cvSkillExpertise);
  }

setTimeout(()=>{window.print()}, 2000);


}

function addExperience() {

  experienceCounter++;

  var divExperience = document.getElementById("addExperienceFields");
  var addExperienceBtn = document.getElementById("addExperienceBtn");
  var fieldsExperience = " <div class='mb-3'>\
  <label for='exampleInputPassword1' class='form-label'>Position</label>\
  <input type='text' class='form-control' name='cvPosition"+ experienceCounter + "' id='cvPosition" + experienceCounter + "' />\
</div>\
<div class='form-group mb-3'>\
  <label for='exampleFormControlTextarea1'>Experience Description*</label>\
  <textarea class='form-control' rows='3' name='cvExperienceDesp"+ experienceCounter + "' id='cvExperienceDesp" + experienceCounter + "' required></textarea>\
</div>";
  console.log(fieldsExperience);
  if (experienceCounter <= 2) {
    divExperience.innerHTML += fieldsExperience;
    addExperienceBtn.style.display = "none";
  }


}


function addSkills() {

  skillCounter++;

  var divSkills = document.getElementById("addSkillsCv");
  var addSkillBtn = document.getElementById("addSkillBtn");
  var fieldsSkills = `<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Skill Title `+ skillCounter + `</label>
  <input type="text" class="form-control" name="cvSkill`+ skillCounter + `" id="cvSkill` + skillCounter + `" />
</div>
<div class="form-group mb-3">
  <label for="exampleFormControlTextarea1">Sill `+ skillCounter + ` Expertise</label>
  <input type="range" class="form-control"  name="cvSkillExpertise`+ skillCounter + `" id="cvSkillExpertise` + skillCounter + `" min="0" max="100" />
</div>`;

  if (skillCounter <= 5) {
    divSkills.innerHTML += fieldsSkills;
    if (skillCounter == 5) {
      addSkillBtn.style.display = "none";
    }
  }

  console.log("Skill Counter = " + skillCounter)

}



