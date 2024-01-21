function createId() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

// przykladowe uzycie:

const id1 = createId();
const id2 = createId();

console.log(id1);
console.log(id2);

  
  