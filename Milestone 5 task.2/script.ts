document.getElementById('resumeform')?.addEventListener('submit', function(event){
   event.preventDefault();

   const profilePictureinput = document.getElementById('profilePicture') as HTMLInputElement
   const nameElement = document.getElementById('name') as HTMLInputElement;
   const emailElement = document.getElementById('email') as HTMLInputElement;
   const phoneElement = document.getElementById('phone') as HTMLInputElement
   const educationElement = document.getElementById('education') as HTMLInputElement;
   const experienceElement = document.getElementById('experience') as HTMLInputElement;
   const skillsElement = document.getElementById('skills') as HTMLInputElement;

   const usernameElement = document.getElementById("username") as HTMLInputElement;

   if (profilePictureinput && nameElement && emailElement && phoneElement && educationElement && 
      experienceElement && skillsElement)
      
      {
   
   const name = nameElement.value;
   const email = emailElement.value;
   const phone = phoneElement.value;
   const education = educationElement.value;
   const experience = experienceElement.value;
   const skills = skillsElement.value;

   const username = usernameElement.value;
   const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

   const profilePictureFile = profilePictureinput.files?.[0]
   const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) :'';


   const resumeOutput =`
   <h2>Resume</h2>

   ${profilePictureURL ?`<img src="${profilePictureURL} alt="profile Picture" class="profilePicture">` : ""}
   <p><strong>Name:</strong><span id="edit-name" class="editable"> ${name}</span> </p>
   <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email}</span> </p>
   <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone}</span> </p>
   
   <h3>Education</h3>
   <p id="edit-education" class="editable">${education}</p>
   <h3>Experience</h3>
   <p id="edit-experience" class="editable">${experience}</p>
   <h3>Skills</h3>
   <p id="edit-skills" class="editable">${skills}</p>
   `;

   
   const resumeOutputElement = document.getElementById('resumeOutput');
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    resumeOutputElement.classList.remove("hidden");

    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttonsContainer";
    resumeOutputElement.appendChild(buttonsContainer);

    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download as PDF";
    downloadButton.addEventListener("click", () => {
      window.print();
    });

    buttonsContainer.appendChild(downloadButton);

    const shareLinkButton = document.createElement("button");
    shareLinkButton.textContent = "Copy Shareable Link";
    shareLinkButton.addEventListener("click", async () => {

      try {
         const shareLinkButton = `https://yourdomain.com/resume/${name.replace(/\s+/g, "_")}_cv.html`;

         await navigator.clipboard.writeText(shareLinkButton);
         alert("shareable link copied to Clipboard!");
      }catch(error){
         console.error("Failed to copy Link:", error);
         alert("Failed to copy Link to clipboaerd. please try again.");
      }
    });
    buttonsContainer.appendChild(shareLinkButton);


    
   } else {
      console.error("Resume output container not found");
     }
     
      
     
      
     }else {
      console.error("Form elements are missing.");
     }
   
});
   
   



             

