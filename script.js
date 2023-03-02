let $elForm = document.getElementById("form");
let $elBoxf = document.getElementById("boxf");
let $elBoxm = document.getElementById("boxm");
let $elGender = document.getElementById("gender");

let $elUserLastName = document.getElementById("userLastName");
let $elUserFirstName = document.getElementById("userFirstName");
let $elUseEmail = document.getElementById("useEmail");
let $elUserPhoneNum = document.getElementById("userPhoneNum");
let $elUserCountry = document.getElementById("userCountry");
let $elUserCity = document.getElementById("userCity");
let $elUserGenderMale = document.getElementById("userGenderMale");
let $elUserGenderFemale = document.getElementById("userGenderFemale");
let $elUserPassword = document.getElementById("userPassword");
let $elUserConifirmPassword = document.getElementById("userPasswordConifirm");

$elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let FirstName = $elUserFirstName.value.trim();
    let LastName = $elUserLastName.value.trim();
    let Email = $elUseEmail.value.trim();
    let PhoneNum = $elUserPhoneNum.value.trim();
    let UserCountry = $elUserCountry.value.trim();
    let UserCity = $elUserCity.value.trim();
    let GenderMale = $elUserGenderMale.value.trim();
    let GenderFemale = $elUserGenderFemale.value.trim();
    let Password = $elUserPassword.value.trim();
    let ConifirmPassword = $elUserConifirmPassword.value.trim();

    console.log(GenderMale);

    if (Password !== ConifirmPassword) {
        alert("Sizning kodingiz tasdqilanmadi!");
        $elUserPassword.value = null;
        $elUserConifirmPassword.value = null;
    }

    if (GenderMale == "on") {
        $elBoxm.innerHTML += ` 
    <li class="itemm">
        <p>First Name:${FirstName} </p>
        <p>Last Name:${LastName}</p>
        <p>Email:${Email}</p>
        <p>Phone Namber:${PhoneNum}</p>
        <p>Country:${UserCountry}</p>
        <p>City:${UserCity}</p>
        <p>Gender:Male</p>
        <p>Password:${Password}</p>
    </li>
    `;
    } else {
        $elBoxf.innerHTML += ` 
    <li class="itemf">
        <p>First Name:${FirstName} </p>
        <p>Last Name:${LastName}</p>
        <p>Email:${Email}</p>
        <p>Phone Namber:${PhoneNum}</p>
        <p>Country:${UserCountry}</p>
        <p>City:${UserCity}</p>
        <p>Gender:Famele</p>
        <p>Password:${Password}</p>
    </li>
    `;
    }

    $elUserFirstName.value = null;
    $elUserLastName.value = null;
    $elUseEmail.value = null;
    $elUserPhoneNum.value = null;
    $elUserCountry.value = null;
    $elUserCity.value = null;
    $elUserGenderMale.value = null;
    $elUserGenderFemale.value = null;
    $elUserPassword.value = null;
    $elUserConifirmPassword.value = null;
});