class DataPickerPage {
  typeCorrectData() {
    cy.get("#start").type("2023-01-01").should("have.value", "2023-01-01");
  }
}
export default DataPickerPage;
