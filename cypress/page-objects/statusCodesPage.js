const status200 = "#200siteAnchor";
const status305 = "#305siteAnchor";
const status404 = "#404siteAnchor";
const status500 = "#500siteAnchor";

class StatusCodePage {
  test200() {
    cy.get(status200)
      .invoke("attr", "href")
      .then((href) => {
        cy.request(href).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  }

  test305() {
    cy.get(status305)
      .invoke("attr", "href")
      .then((href) => {
        cy.request({
          url: href,
          followRedirect: false,
        }).then((response) => {
          expect(response.status).to.eq(305);
        });
      });
  }

  test404() {
    cy.get(status404)
      .invoke("attr", "href")
      .then((href) => {
        cy.request({
          url: href,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
        });
      });
  }
  test500() {
    cy.get(status500)
      .invoke("attr", "href")
      .then((href) => {
        cy.request({
          url: href,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(500);
        });
      });
  }
}

export default StatusCodePage;
