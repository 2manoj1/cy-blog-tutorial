const HEAD_TITLE_SECTION = "[data-cy='head-title']";

export const getHeadSection = () => {
    return cy.get(HEAD_TITLE_SECTION, { timeout: 20000 });
};
