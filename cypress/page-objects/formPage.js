const firstName = 'input[id="fname"]';
const lastName = 'input[id="lname"]';
const submit = 'input[id="formSubmitButton"]';
class FormPage {
  positiveFormSubmit() {
    cy.get(firstName).type("Marcin").should("have.value", "Marcin");
    cy.get(lastName).type("Test").should("have.value", "Test");
    cy.get(submit).click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("success");
    });
  }
}

export default FormPage;
