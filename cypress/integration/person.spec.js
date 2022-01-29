/// <reference types="cypress"/>

context("Person Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/people/1");
	});

	it("Should find the navigation bar with working links", () => {
		cy.get("a").contains("wookieleaks").click();
		cy.url().should("eq", "http://localhost:3000/");

		cy.get("a").contains("people").click();
		cy.url().should("include", "/people");

		cy.get("a").contains("quiz").click();
		cy.url().should("include", "/quiz");
	});

	it("Should find the image", () => {
		cy.get("img").should("have.length", 1);
	});

	it("Should find the grid", () => {
		cy.get(".category-title").should("have.length", 8);
	});
});
