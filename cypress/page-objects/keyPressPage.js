const inputField = 'input[id="target"]';
const inputChecker = 'p[id="keyPressResult"]';
class KeyPressPage {
  checkTypeKey() {
    cy.get(inputField).type("K");
    cy.get(inputChecker).should("contain", "K");
  }
}

export default KeyPressPage;
