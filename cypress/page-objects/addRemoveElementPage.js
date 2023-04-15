const addButton = 'button[onclick="addElement()"]';
const deleteButton = 'button[class="added-manually"]';

class AddRemoveElementPage {
  addNewElement() {
    cy.get(addButton).click();
    cy.get(deleteButton).should("be.visible");
  }

  deleteElement() {
    cy.get(deleteButton).click();
    cy.get(deleteButton).should("not.exist");
  }
}

export default AddRemoveElementPage;
