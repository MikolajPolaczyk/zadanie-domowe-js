function createPassword() {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const allCharacters =
    lowercaseLetters + uppercaseLetters + digits + specialCharacters;

  let password = '';

  password +=
    lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  password +=
    uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
  password += digits.charAt(Math.floor(Math.random() * digits.length));
  password +=
    specialCharacters.charAt(
      Math.floor(Math.random() * specialCharacters.length)
    );

  for (let i = password.length; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
}

// przykladowe uzycie:

const password1 = createPassword();
const password2 = createPassword();

console.log(password1); 
console.log(password2); 

