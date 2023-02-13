const fileInput = document.getElementById("resumeFile"); 
let skillsDataArray = [];
const submit = () => { 
    var myHeaders = new Headers(); myHeaders.append("Authorization", "Bearer a8fecbb82790a2f3b90a0b6af4d73594604e6f23");
     console.log(fileInput.files[0]);
      var formdata = new FormData(); 
      formdata.append("file", fileInput.files[0]); 
      var requestOptions = { method: "POST", 
      headers: myHeaders,
       body: formdata, 
       redirect: "follow", };
       fetch("https://api.affinda.com/v2/resumes",
        requestOptions).then((response) => response.json())
        .then((result) => { 
        console.log(result.data.skills)
        let skillsData = result.data.skills;
        console.log("skillsData",skillsData)
        for(item of skillsData){
          skillsDataArray =  [...skillsDataArray,item.name]
        }
        console.log("filtered data",skillsDataArray)

            const email = [result][0].data.emails ?[result][0].data.emails[0]:null; 
            const linkedin = [result][0].data.linkedin; 
            const fname = [result][0].data.name.first;
            const lname = [result][0].data.name.last; 
            const mobile = [result][0].data.phoneNumbers[0]; 
            const city = [result][0].data.location.city;
            const state = [result][0].data.location.state;
            const postalCode = [result][0].data.location.postalCode;
            const country = [result][0].data.location.country;
            const education = [result][0].data.education[0].organization;
            const qualification = [result][0].data.education[0].accreditation.education;
            const secondary = [result][0].data.education[2].organization;
            const secondaryGrade = [result][0].data.education[2].grade ? [result][0].data.education[2].grade.value : null ;
            const highSchool = [result][0].data.education[3] ? [result][0].data.education[3].organization : null ;
            const highSchoolGrade = [result][0].data.education[3] ? [result][0].data.education[3].grade.value : null;
            const startDate = [result][0].data.education[0].dates?[result][0].data.education[0].dates.startDate :null;
            const completionDate = [result][0].data.education[0].dates?[result][0].data.education[0].dates.completionDate:null;
            const skills = [result][0].data.skills[0].name;
            // console.log(fname, lname, email, mobile,city,state,postalCode,country,education,qualification,secondary,
            //   secondaryGrade,highSchool,highSchoolGrade,startDate,completionDate,linkedin,skills
            //   ) 
           
            document.getElementById("fname").value = fname; 
            document.getElementById("lname").value = lname;
            document.getElementById("email").value = email; 
            document.getElementById("linkedin").value = linkedin;
            document.getElementById("mobile").value = mobile;
            document.getElementById("city").value = city;
            document.getElementById("state").value = state;
            document.getElementById("postalCode").value = postalCode;
            document.getElementById("country").value = country;
            document.getElementById("education").value = education;
            document.getElementById("qualification").value = qualification;
            document.getElementById("secondary").value = secondary;
            document.getElementById("secondaryGrade").value = secondaryGrade;
            document.getElementById("highSchool").value = highSchool;
            document.getElementById("highSchoolGrade").value = highSchoolGrade;
            document.getElementById("startDate").value = startDate;
            document.getElementById("completionDate").value = completionDate;
            document.getElementById("skills").value = skillsDataArray.join(", ");
            
             })
            .catch((error) => console.log("error", error)); };

// const email = [result][0].data.emails[0];

// const resume = document.querySelector('#resume');
// const parsedResume = document.querySelector('#parsedResume');

// resume.addEventListener('change', function(event) {
//   const file = event.target.files[0];
//   const reader = new FileReader();

//   reader.onload = function(event) {
//     const text = event.target.result;
//     const lines = text.split('\n');
//     let name = '';
//     let email = '';
//     let education = '';
//     let workExperience = '';

//     for (const line of lines) {
//       if (line.toLowerCase().includes('name')) {
//         name = line.split(':')[1].trim();
//       } else if (line.toLowerCase().includes('email')) {
//         email = line.split(':')[1].trim();
//       } else if (line.toLowerCase().includes('education')) {
//         education = line.split(':')[1].trim();
//       } else if (line.toLowerCase().includes('work experience')) {
//         workExperience = line.split(':')[1].trim();
//       }
//     }

//     parsedResume.innerHTML = `
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Education: ${education}</p>
//       <p>Work Experience: ${workExperience}</p>
//     `;
//   };

//   reader.readAsText(file);
// });
