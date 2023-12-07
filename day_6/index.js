"use strict";
//declaration of variable and dom elements;
let wishlist = [];
const addBtn = document.getElementById("addItemButton");
const itemName = document.getElementById("newWishlistItem");
const itemDescription = document.getElementById("wishlistItemDescription");
const wishlistDisplay = document.getElementById("wishlistDisplay");

//add item function
const addItem = function () {
	if (!itemName.value) return;
	const wishlistItem = {
		name: itemName.value,
		description: itemDescription.value || "This is cool for Christmass",
	};
	wishlist.push(wishlistItem);
	//  displayWishlist(wishlist)
	itemDescription.value = "";
	itemName.value = "";
	console.log(wishlist);
	renderWishlist();
};

addBtn.addEventListener("click", addItem);

const renderWishlist = function () {
	wishlistDisplay.innerHTML = "";
	wishlist.forEach((item) => {
		const wishItemhtml = `<div
		class="wishlist-item"
		tabindex="0"
		role="listitem"
		aria-label="Wishlist Item "
	>
		<div class="wishlist-item-content">
			<h2>${item.name}</h2>
			<p>Description: ${item.description}</p>
			<p>
				Purchase Link:
				<a href="https://example.com/toy-car" target="_blank">
					Buy Now
				</a>
			</p>
		</div>
		<button class="wishlist-item-button" aria-label="Remove from Wishlist" onclick='deleteTask("${item.name}")' >
			Remove
		</button>
	</div>`;
		wishlistDisplay.insertAdjacentHTML("afterbegin", wishItemhtml);
	});
};
const deleteTask = function (itemName) {
	console.log(wishlist);
	wishlist = wishlist.filter((item) => item.name !== itemName);
	renderWishlist();
};
