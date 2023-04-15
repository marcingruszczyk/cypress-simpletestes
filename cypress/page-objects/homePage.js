import Urls from "./urls";

const inputsHeader = "#inputs-header";
const checkboxHeader = "#checkbox-header";
const dropdownListHeader = "#dropdownlist-header";
const hoversHeader = "#hovers-header";
const basicAuthHeader = "#basicauth-header";
const formHeader = "#form-header";
const keyPressHeader = "#keypresses-header";
const addRemoveElementHeader = "#addremoveelements-header";
const statusCodesPageHeader = "#statuscodes-header";
const iframeHeader = "#iframe-header";
const dataPickerHeader = "#datepicker-header";
const dragAndDropHeader = "#draganddrop-header";
class HomePage {
  clickInputsTab() {
    cy.get(inputsHeader).click();
  }
  clickCheckboxTab() {
    cy.get(checkboxHeader).click();
  }
  clickDropdownListTab() {
    cy.get(dropdownListHeader).click();
  }
  clickHoversTab() {
    cy.get(hoversHeader).click();
  }
  clickBasicAuthTab() {
    cy.get(basicAuthHeader).click();
  }
  clickFormTab() {
    cy.get(formHeader).click();
  }
  clickKeyPressTab() {
    cy.get(keyPressHeader).click();
  }
  clickAddRemoveElementPageTab() {
    cy.get(addRemoveElementHeader).click();
  }
  clickStatusCodesPageTab() {
    cy.get(statusCodesPageHeader).click();
  }
  clickIframePageTab() {
    cy.get(iframeHeader).click();
  }
  clickDataPicker() {
    cy.get(dataPickerHeader).click();
  }
  clickDragAndDrop() {
    cy.get(dragAndDropHeader).click();
  }

  visitPage() {
    const url = new Urls();
    url.visiHomePage();
  }
}

export default HomePage;
