import list from "./actions/list";
import add from "./actions/add";
import get from "./actions/get";
import update from "./actions/update";
import remove from "./actions/remove";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();

  // FIXME: use your actions functions to add a new picture
  console.log("getinputscontent: " + url)
  if (url != null && url.localeCompare(""))
  {
    add(url);
    refreshGrid();
  }
  // FIXME: bonus, trim eventual whitespaces and validate content

  clearInputContents();
};

const refreshGrid = () => {
  // FIXME: use your functions to get all the elements
  const items = list();
  console.log("refreshGrid: " + items)

  const fragment = document.createDocumentFragment();

  items.forEach((value, i) => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXME: set the URL from your Picture model.
    var url = [get(i)];
    console.log(`rerfeshGrid get(${i}): ${url}`);
    imgElement.src = url;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    const pictureUpdateInputElement = clone.querySelector(
      ".picture-update-url-input"
    );

    const pictureUpdateButtonElement = clone.querySelector(
      ".picture-update-button"
    );
 
    pictureUpdateInputElement.value = value;

    // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(i);
      refreshGrid();
    });

    pictureUpdateButtonElement.addEventListener("click", () =>{    
      let url = pictureUpdateInputElement.value;
      console.log(url);
      update(i,url);
      refreshGrid();
    })

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
