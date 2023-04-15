const iFrame = "iframe";
const button1 = "#simpleButton1";
const button2 = "#simpleButton2";
const messageAfterClickButton = "#whichButtonIsClickedMessage";

const getIFrameContent = () => {
  return cy
    .get(iFrame)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
};

class IframePage {
  button1() {
    getIFrameContent().find(button1).click();
    getIFrameContent()
      .find(messageAfterClickButton)
      .should("have.text", "Button 1 was clicked!");
  }

  button2() {
    getIFrameContent().find(button2).click();
    getIFrameContent()
      .find(messageAfterClickButton)
      .should("have.text", "Button 2 was clicked!");
  }
}

export default IframePage;
