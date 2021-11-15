/// <reference types="Cypress" />
const home_furnishingpage = require('../locators/home_furnishing.json');

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	//expect(err.message).to.include('uncaught errors from the application');
	return false;
});

Cypress.Commands.add('verify_different_tabs', () => {
	cy.get(home_furnishingpage.men_tab)
		.should('exist')
		.should('have.text', 'Men');

	cy.get(home_furnishingpage.women_tab)
		.should('exist')
		.should('have.text', 'Women');
	cy.get(home_furnishingpage.kids_tab)
		.should('exist')
		.should('have.text', 'Kids');

	cy.get(home_furnishingpage.sports_style_tab)
		.should('exist')
		.should('have.text', 'SPORTSTYLE');
	cy.get(home_furnishingpage.inside_ascis)
		.should('exist')
		.should('have.text', 'INSIDE ASICS');

	cy.get(home_furnishingpage.sale_tab)
		.should('exist')
		.should('have.text', 'Sale');

	cy.get(home_furnishingpage.medical_workshoes)
		.should('exist')
		.should('have.text', 'Medical & Work Shoes');
});

Cypress.Commands.add('click_on_expand_icon', () => {
	cy.get(home_furnishingpage.expand_size_icon)
		.should('exist')
		.click({ force: true });
});

Cypress.Commands.add('select_size_filter', () => {
	cy.get(home_furnishingpage.size_filter)
		.should('exist')
		.click({ force: true });
});

Cypress.Commands.add('verify_size_filter_applied', () => {
	cy.get(home_furnishingpage.active_filter).should('exist');

	cy.get(home_furnishingpage.filter_type_size).should('exist');
	cy.wait(4000);
	cy.get(home_furnishingpage.filter_type_size).click({ force: true });
	cy.get(home_furnishingpage.filter_type_size).should('not.exist');
});

Cypress.Commands.add('expand_colour_icon', () => {
	cy.get(home_furnishingpage.expand_color_icon)
		.should('exist')
		.click({ force: true });
});

Cypress.Commands.add('select_pink_colour', () => {
	cy.get(home_furnishingpage.pink_color).should('exist').click({ force: true });
});

Cypress.Commands.add('verify_colour_filter_applied', () => {
	cy.get(home_furnishingpage.active_filter).should('exist');

	cy.get(home_furnishingpage.pink_color_filter)
		.should('exist')
		.should('have.text', 'Pink');
	cy.wait(4000);
	cy.get(home_furnishingpage.filter_type_colour).click({ force: true });
	cy.get(home_furnishingpage.filter_type_colour).should('not.exist');
});

Cypress.Commands.add('click_on_drop_down', () => {
	cy.get(home_furnishingpage.drop_down).should('exist');
	cy.get(home_furnishingpage.drop_down)
		.select('Discount', { force: true })
		.should('have.value', 'd');
});

Cypress.Commands.add('verify_discount_data', () => {
	cy.get(home_furnishingpage.discount_data)
		.eq(0)
		.should('exist')
		.should('contain', 'You Save');
});
