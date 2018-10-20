let villain = {
	name:"Jeff",
	catchPhrase:'"You will never get away!"',
	greatestCrime:"not doing his homework",
};

let hacker = {
	name:"Bobby",
	nickName:"Bob",
	catchPhrase:'"Mission Failed. We will do better next time."',
	archenemy:villain.name
};

console.log(
`Hey, this is ${villain.name}.
His most famous catchphrase is ${villain.catchPhrase}.
His greatest crime is ${villain.greatestCrime}.
	
This other guy is ${hacker.name}.
Some people call him ${hacker.nickName}. 
His most famous catchphrase is ${hacker.catchPhrase}. 
His archenemy is ${hacker.archenemy}.`);