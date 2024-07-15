
The code below ensures that students who are using CodeGrade will get credit
for the code-along in Canvas; you can disregard it.
require("./helpers.js");

document.addEventListener("DOMContentLoaded", () => {
  // Selecting the necessary elements
  const toyCollection = document.getElementById('toy-collection');
  const newToyBtn = document.getElementById('new-toy-btn');
  const toyFormContainer = document.querySelector('.container');
  const toyForm = document.querySelector('.add-toy-form');

  // Toggle the toy form display
  newToyBtn.addEventListener('click', () => {
    toyFormContainer.style.display = toyFormContainer.style.display === 'block' ? 'none' : 'block';
  });

  // Handle the form submission
  toyForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const toyName = event.target.name.value;
    const toyImage = event.target.image.value;

    // Create a new toy card
    const toyCard = document.createElement('div');
    toyCard.className = 'card';
    
    const toyNameElement = document.createElement('h2');
    toyNameElement.textContent = toyName;
    
    const toyImageElement = document.createElement('img');
    toyImageElement.src = toyImage;
    toyImageElement.className = 'toy-avatar';
    
    const toyLikes = document.createElement('p');
    toyLikes.textContent = '0 Likes';
    
    const likeButton = document.createElement('button');
    likeButton.className = 'like-btn';
    likeButton.textContent = 'Like ❤️';

    // Append elements to the card
    toyCard.appendChild(toyNameElement);
    toyCard.appendChild(toyImageElement);
    toyCard.appendChild(toyLikes);
    toyCard.appendChild(likeButton);

    // Append the card to the toy collection
    toyCollection.appendChild(toyCard);

    // Reset the form
    toyForm.reset();
  });
});

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });
});
