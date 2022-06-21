import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getHeadSection } from "../pages/root.po";

When("I visit site", () => {
    cy.visit("/");
});

Then(" I should see a root page with title 'Welcome to Next.js!'", () => {
    getHeadSection().should("be.visible").should("contain", "Welcome to Next.js!");
});
