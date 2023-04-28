function decoder(code) {
    let decoded = '';
    let skip = 0;
  
    for (let i = 0; i < code.length; i++) {
      if (!isNaN(parseInt(code[i]))) {
        skip = parseInt(code[i]);
      } else {
        decoded += code[i + skip + 1];
        skip = 0;
      }
    }
  
    return decoded;
  }

 console.log(decoder('0h2xce5ngbrdy'))
 console.log(decoder('3vdfn')) 
  