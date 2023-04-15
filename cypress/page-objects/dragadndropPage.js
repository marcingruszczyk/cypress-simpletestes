import "@4tw/cypress-drag-drop";
// use of cypress drag & drop https://github.com/4teamwork/cypress-drag-drop
const elemA = "#column-a";
const elemB = "#column-b";

class DragAndDropPage {
  dragAndDropElement() {
    cy.get(elemA).drag(elemB);
  }
}
export default DragAndDropPage;
