// variable declarations
const h1Element = document.querySelector("h1");
const displayPairElement = document.getElementById("displayPair");
const friendNameInput = document.getElementById("friendName");
const addFriendBtn = document.getElementById("addFriends");
const getSanctaBtn = document.getElementById("getSancta");
const listHeading = document.getElementById("listHead");
const friends = [];
const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];
const sanctaVault = {};

//interactivity configurations
addFriendBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (friendNameInput.value) friends.push(friendNameInput.value);

	friendNameInput.value = "";
});

getSanctaBtn.addEventListener("click", (e) => {
	e.preventDefault();

	listHeading.setAttribute("tabindex", "-1");
	if (friends.length === 0) generateSecretSantaPairs();
	if (friends && friends.length === 1) alert("whooo add more friends please");
	if (friends.length > 1) generateSecretSantaPairs(friends);
});

//the main function that assigns a Sancta
function generateSecretSantaPairs(arr = people) {
	displayPairElement.textContent = "";
	//randomizing the array
	const randomizedArray = [...arr];
	for (let i = randomizedArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[randomizedArray[i], randomizedArray[j]] = [
			randomizedArray[j],
			randomizedArray[i],
		];
	}

	//assigning the randomized array to form an object
	while (randomizedArray.length) {
		const reciever = randomizedArray[0];
		const giver =
			randomizedArray.length % 2 !== 0 && randomizedArray.length === 1
				? "a nightout with Beyonce!"
				: randomizedArray[randomizedArray.length - 1];
		displayPairElement.insertAdjacentHTML(
			"beforeend",
			`<li tabindex= ${0}>${reciever} your christmass gift box will come from ${giver}</li>`
		);
		randomizedArray.shift();
		randomizedArray.pop();
		sanctaVault[giver] = reciever;
	}
	friends.length = 0;
	people.length = 0;
	console.log(sanctaVault);
}
