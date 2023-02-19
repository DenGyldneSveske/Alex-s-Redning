//Making an array containing 5 strings.
const shoppingList = ["Eggs", "Milk", "Beans", "Tomatoes", "Bread"];

//Getting the element in the HTML-file with the "list" id.
const list = document.getElementById("list");

//Function that takes no parameters as input
GenerateHTMLInLoop = () => {
  //for-loop that runs from 0 to the length of the shoppingList array minus 1.
  for (let i = 0; i < shoppingList.length; i++) {
    //Create an li-element
    let listItem = document.createElement("li");

    //Setting the content of the listItem to be the corresponding element in the array.
    listItem.textContent = shoppingList[i];

    //Add listItem as a child to list.
    list.appendChild(listItem);
  }
};
