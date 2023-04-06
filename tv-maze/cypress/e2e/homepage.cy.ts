describe("Search TV Show", () => {
  it("should search for TV show", () => {
    // Start from the index page
    cy.visit("/");

    cy.getByDataCy("searchResult").should("have.length", 0);

    // Focus the search field and perform a search for "Avatar"
    cy.get('input[type="search"]').focus().type("Avatar").type("{enter}");

    // Search results should include at least 1 result
    cy.getByDataCy("searchResult").should("have.length.at.least", 1);

    // Get title of the first result
    cy.getByDataCy("searchResult")
      .first()
      .findByDataCy("showCard__title")
      .invoke("text")
      .as("title");
    
    // Click the first result
    cy.getByDataCy("searchResult").first().click();

    // Check if the application has navigated to the show page
    cy.get("@title").then((title) => {
      cy.url().should("include", "/shows/");
      cy.getByDataCy("showPage__title").should("contain.text", title);
    });
  });
});
