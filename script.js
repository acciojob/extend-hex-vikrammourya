const extendHex = (shortHex) => {
  // write your code here
	let i = shortHex.length -3 , isCapital = false ;
	let output ="#" ;
	while(i<shortHex.length){
		let ascicode = shortHex[i].charcodeAt(0);
		if(ascicode>=65 && ascicode <= 90){
			isCapital= true ;
		}

		output = output+shortHex[i]+shortHex[i];
	}

	return isCapital? output.toUpperCase() : output ;
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
