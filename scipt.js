const form = document.querySelector(".form");
    
    const usercont = document.querySelector(".user-cont");
    const userinput = document.querySelector(".username");
    const userp1 = document.querySelector(".p-1");

    const emailcont = document.querySelector(".email-cont");
    const emailinput = document.querySelector(".emaili");
    const emailp2 = document.querySelector(".p-2");

    const passcont = document.querySelector(".pass-cont");
    const passinput = document.querySelector(".password");
    const userp3 = document.querySelector(".p-3");

    const confpasscont = document.querySelector(".confpass-cont");
    const confpassinput = document.querySelector(".confirmpass");
    const userp4 = document.querySelector(".p-4");

    const togglebtn = document.querySelector(".toggle");

    function isValidateuser(data) {
      if (
        userinput.value.length === 0 ||
        userinput.value.toLowerCase() === "username"
      ) {
        userp1.innerText = "username is error";
      } else if (userinput.value.length <= 6 || userinput.value.length >= 20) {
        userp1.innerText = "username is small or too large";
      } else {
        return true;
      }
      return false;
    }

    function isValidateEmail(data) {
      if (emailinput.value.length === 0 || !emailinput.value.includes("@")) {
        emailp2.innerText = "email is missing @";
      } else return true;

      return false;
    }

    function isValidatePassword(data) {
      if (passinput.value.length === 0 || passinput.value.length < 8) {
        userp3.innerText = "password is small";
      } else return true;

      return false;
    }

    function isvalidateconfirmpass(data) {
      var password = passinput.value;
      var confirmPassword = confpassinput.value;

      if (password !== confirmPassword) {
        userp4.innerText = "Passwords do not match!";
        // return false;
      } else if (confirmPassword.length === 0) {
        userp4.innerText = "Passwords length is small!";
      } else {
        return true;
      }
      return false;
    }

    function handlesubmit(e) {
      e.preventDefault();

      const validateusername = isValidateuser(userinput.value);
      const validatepass = isValidatePassword(passinput.value);
      const validateemail = isValidateEmail(emailinput.value);
      const validateconfirmpass = isvalidateconfirmpass(confpassinput.value);

      if (
        validateusername &&
        validatepass &&
        validateemail &&
        validateconfirmpass
      ) {
        console.log("form submited");
        console.log(
          "Username:",
          userinput.value,
          "\nEmail:",
          emailinput.value,
          "\nPassword:",
          passinput.value,
          "\nConfirmPassword:",
          confpassinput.value
        );
      } else {
        console.log("form datas are not filled properly");
      }
    }

    togglebtn.addEventListener("click", () => {
      var password = passinput;
      var confirmPassword = confpassinput;
      if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
        toggbtn.innerText = "Hide Text";
      } else {
        password.type = "password";
        confirmPassword.type = "password";
        toggbtn.innerText = "Show Text";
      }
    });

    form.addEventListener("submit", handlesubmit);
    
