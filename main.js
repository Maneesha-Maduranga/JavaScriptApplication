//Friend Class

class Friend{
   
   constructor(name,age,email){
      this.name = name;
      this.age = age;
      this.email = email;
   }

}



//UI Class

class UI{

   static displayFreinds(){
      
      const friends = [
         {
            name : "Maneesha Maduranga",
            age : 23,
            email : 'Maneeshamaduranga@gmail.com'
         }
      ]

      const freind = friends;

      freind.forEach(element => {
         UI.addFriends(element)
      });

      

   }

   static addFriends(fre){
      const list = document.getElementById("friend-list");
      const row = document.createElement("tr");

      row.innerHTML = `
         <td>${fre.name}</td>
         <td>${fre.age}</td>
         <td>${fre.email}</td>
         <td><button class="btn btn-success" type="button">Delete</button></td>

      `;

      list.appendChild(row);

   }

}







//Event Display Friends

document.addEventListener("DOMContentLoaded",UI.displayFreinds);


//Event add friends

document.getElementById("freieds-form").addEventListener('submit', (e) => {

   e.preventDefault();

   const  name = document.getElementById("name").value;
   const  age = document.getElementById("age").value;
   const  emails = document.getElementById("email").value;

   const buddy = new Friend(name,age,emails)

   UI.addFriends(buddy);

});

//Event remove Friends