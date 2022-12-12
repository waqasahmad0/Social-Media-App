const userData= JSON.parse(localStorage.getItem("data"));

const personImg=document.getElementById('userImg').src= userData.image;
document.getElementById("name").innerHTML=`${userData.firstName} ${userData.lastName}`;
const email=  document.getElementById("userEmail").innerHTML=userData.email ; 

//console.log(person,"person-name");
// const imgFetched= newData.image;
const gender= document.getElementById("userGender").innerHTML=userData.gender;
document.getElementById("username").innerHTML=userData.username;
