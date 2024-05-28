document.addEventListener("DOMContentLoaded", () => {

fetch('http://localhost:3003/toys')
.then((response) => response.json())
.then((json) => makeToy(json))


function makeToy(toys) {
  let collection = document.getElementById("toy-collection")
  for (let toy of toys) {
   let toyCard = document.createElement('div')
   toyCard.className = "card"
   let h2 = document.createElement('h2')
   h2.innerHTML = toy.name
   let image = document.createElement('img')
   image.className = "toy-avatar"
   let sum = document.createElement('p')
   let button = document.createElement('button')
   button.className = "like-btn"
   button.id == toy.id
   sum.innerHTML = toy.likes
   image.src = toy.image
   toyCard.appendChild(h2)
   toyCard.appendChild(image)
   toyCard.appendChild(sum)
   toyCard.appendChild(button)
   collection.appendChild(toyCard)
  }


  
}







})





