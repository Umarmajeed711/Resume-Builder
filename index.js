function get() {
  /// name
  let name = document.querySelector("#name").value;
  document.querySelector(".name").innerText = name;

  // Profile
  let profile = document.querySelector("#userInfo").value;
  document.querySelector("#profile").innerText = profile;

  // contact
  let contact = document.querySelector("#contact").value;
  document.querySelector("#Contact").innerText = contact;

  // email
  let email = document.querySelector("#email").value;
  document.querySelector("#Email").innerText = email;

  // Address
  let address = document.querySelector("#address").value;
  document.querySelector("#Address").innerText = address;

  // Education Details

  // University name
  let uniName = document.querySelector("#uni").value;
  document.querySelector("#university").innerText = uniName;

  //// University Degree
  let unidegree = document.querySelector("#unidegree").value;
  document.querySelector("#uniD").innerText = unidegree;

  // University CGPA
  let unigrade = document.querySelector("#uniGrade").value;
  document.querySelector("#uniG").innerText = unigrade;

  //college Details

  //  college name
  let collegeName = document.querySelector("#college").value;
  document.querySelector("#coll").innerText = collegeName;

  //// college degree
  let collegedegree = document.querySelector("#collegedegree").value;
  document.querySelector("#collDegree").innerText = collegedegree;

  // college grade
  let collegegrade = document.querySelector("#collegeGrade").value;
  document.querySelector("#collGrade").innerText = collegegrade;

  //School Details

  //  School name
  let schoolName = document.querySelector("#school").value;
  document.querySelector("#schName").innerText = schoolName;

  //// School degree
  let schooldegree = document.querySelector("#schooldegree").value;
  document.querySelector("#schDegree").innerText = schooldegree;

  // School grade
  let schoolgrade = document.querySelector("#schoolGrade").value;
  document.querySelector("#schGrade").innerText = schoolgrade;

  // Skills Details

  let skill1 = document.querySelector("#skill1").value;
  document.querySelector("#skillOne").innerText = skill1;

  let skill2 = document.querySelector("#skill2").value;
  document.querySelector("#skillTwo").innerText = skill2;

  let skill3 = document.querySelector("#skill3").value;
  document.querySelector("#skillThree").innerText = skill3;

  let skill4 = document.querySelector("#skill4").value;
  document.querySelector("#skillFour").innerText = skill4;

  let skill5 = document.querySelector("#skill5").value;
  document.querySelector("#skillFive").innerText = skill5;

  // Language Details

  let language1 = document.querySelector("#language1").value;
  document.querySelector("#firstLang").innerText = language1;

  let language2 = document.querySelector("#language2").value;
  document.querySelector("#secondLang").innerText = language2;


  let language3 = document.querySelector("#language3").value;
  document.querySelector("#thirdLang").innerText = language3;


  // Image 
  let forImage = document.querySelector("#input1").files[0]
  console.log(forImage)
  let dummyUrl = URL.createObjectURL(forImage);
  document.querySelector("#upload").innerHTML = `<img src="${dummyUrl}" width="200px" height="200px"/>`


 
  
  // Experience

  let experience = document.querySelector("#Experience").value;
  document.querySelector("#experience").innerText = experience;
}



// function upload(){

//   let forImage = document.querySelector("#input1").files[0]
//   console.log(forImage)
//   let dummyUrl = URL.createObjectURL(forImage);
//   document.querySelector("#upload").innerHTML = `<img src="${dummyUrl}" width="200px" height="200px"/>`
// }









