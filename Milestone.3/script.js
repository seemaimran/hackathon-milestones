var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureinput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureinput && nameElement && emailElement && phoneElement && educationElement &&
        experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n   <h2>Resume</h2>\n   ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"profile Picture\" class=\"profilePicture\">") : "", "\n   <p><strong>Name:</strong> ").concat(name_1, " </p>\n   <p><strong>Email:</strong> ").concat(email, " </p>\n   <p><strong>Phone:</strong> ").concat(phone, " </p>\n   <h3>Education</h3>\n   <p>").concat(education, "</p>\n   <h3>Experience</h3>\n   <p>").concat(experience, "</p>\n   <h3>Skills</h3>\n   <p>").concat(skills, "</p>\n   ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = resumeOutput;
        }
        else {
            console.error('The resume output element are missing');
        }
        ;
    }
    else {
        console.error('No or more output element are missing');
    }
    ;
});
