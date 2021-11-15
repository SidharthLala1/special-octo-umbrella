/// <reference types="Cypress" />

/**
 *  Test case to test the Sign up / Sign in Page.
 */

describe('Verifying different scenarios regarding applying and clearing filters', () => {
	beforeEach(() => {
		cy.visit(Cypress.config().baseUrl, { timeout: 80000 });
	});

	it('Test all the different tabs avalibale on the page', () => {
		cy.verify_different_tabs();
	});

	it('Test user is able to apply and clear size filters', () => {
		cy.click_on_expand_icon();
		cy.select_size_filter();
		cy.wait(4000);
		cy.verify_size_filter_applied();
	});

	it('Test user is able to apply and clear colour filters', () => {
		cy.expand_colour_icon();
		cy.select_pink_colour();
		cy.wait(4000);
		cy.verify_colour_filter_applied();
	});

	it('Test user is able to apply and clear colour filters', () => {
		cy.expand_colour_icon();
		cy.select_pink_colour();
		cy.wait(4000);
		cy.verify_colour_filter_applied();
	});

	it('Test and verify the drop down is working ', () => {
		cy.click_on_drop_down();
		cy.verify_discount_data();
	});
});
