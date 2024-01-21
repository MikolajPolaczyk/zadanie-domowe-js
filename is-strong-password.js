function isStrongPassword(password) {
  if (password.length < 12) {
    return false;
  }

  let hasLowercase = false;
  for (let i = 0; i < password.length; i++) {
    if (/[a-z]/.test(password[i])) {
      hasLowercase = true;
      break;
    }
  }
  if (!hasLowercase) {
    return false;
  }

  let hasUppercase = false;
  for (let i = 0; i < password.length; i++) {
    if (/[A-Z]/.test(password[i])) {
      hasUppercase = true;
      break;
    }
  }
  if (!hasUppercase) {
    return false;
  }

  let hasDigit = false;
  for (let i = 0; i < password.length; i++) {
    if (/\d/.test(password[i])) {
      hasDigit = true;
      break;
    }
  }
  if (!hasDigit) {
    return false;
  }

  let hasSpecialChar = false;
  for (let i = 0; i < password.length; i++) {
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password[i])) {
      hasSpecialChar = true;
      break;
    }
  }
  if (!hasSpecialChar) {
    return false;
  }

  return true;
}

// przyklad uzycia:

const password1 = "StrongP@ssword123";
const password2 = "weak123";

console.log(isStrongPassword(password1)); // powinno zwrocic true
console.log(isStrongPassword(password2)); // powinno zwrocic false

