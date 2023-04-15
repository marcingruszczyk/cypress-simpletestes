const loginField = 'input[id="ba_username"]';
const passwordField = 'input[id="ba_password"]';
const loginButton = 'button[onclick="onLoginSubmit()"]';
const loggedInMessage = "#loggedInMessage";
const invalidCredentialsError = "#loginFormMessage";
class BasicauthPage {
  emptyLoginAuth() {
    cy.get(loginButton).click();
    cy.get(invalidCredentialsError).should("be.visible");
  }
  negativeLoginAuth() {
    cy.get(loginField).type("admin").should("have.value", "admin");
    cy.get(passwordField).type("test").should("not.have.value", "admin");
    cy.get(loginButton).click();
    cy.get(invalidCredentialsError).should("be.visible");
  }
  positiveLoginAuth() {
    cy.get(loginField).clear();
    cy.get(passwordField).clear();
    cy.get(loginField).type("admin").should("have.value", "admin");
    cy.get(passwordField).type("admin").should("have.value", "admin");
    cy.get(loginButton).click();
    cy.get(loggedInMessage).should("be.visible");
  }
}

export default BasicauthPage;
