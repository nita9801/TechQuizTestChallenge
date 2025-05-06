import React from 'react';
import Quiz  from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {fixture: 'questions.json'});
  });

    it('should start the quiz when I click the start button', () => {
      cy.mount(<Quiz />)

      cy.get('button').contains('Start Quiz').click()

      cy.get("h2").should("have.text", "What is the output of print(2 ** 3)?");

      cy.get("div.alert").eq(0).should("have.text", "6")
      cy.get("div.alert").eq(1).should("have.text", "8")
      cy.get("div.alert").eq(2).should("have.text", "9")
      cy.get("div.alert").eq(3).should("have.text", "12")
    })



    it('should show the 2nd question when I click the next button', () => {
        cy.mount(<Quiz />)

        cy.get('button').contains('Start Quiz').click()

        cy.get('button').contains('1').click()

        cy.get('h2').should("have.text", "Which of the following is a mutable data type in Python?" )

    })


     it('should show the 3rd question when I click the next button', () => {
        cy.mount(<Quiz />)

        cy.get('button').contains('Start Quiz').click();

        cy.get('button').contains('1').click();

        cy.get('button').contains('2').click();
        cy.get('h2').should('have.text', 'What is the keyword used to define a function in Python?')

     })





     it('should show Quiz Completed when I click the next button on the last question', () => {
        cy.mount(<Quiz />)

        cy.get('button').contains('Start Quiz').click()

        cy.get('button').contains('1').click()

        cy.get('button').contains('2').click()

        cy.get('button').contains('3').click()

        cy.get('h2').should("have.text", "Quiz Completed")
     })





    it("should show the 1st question when I click the Take new Quiz button", () => {
      cy.mount(<Quiz />)

      cy.get('button').contains('Start Quiz').click()

      cy.get('button').contains('1').click()

      cy.get('button').contains('2').click()

      cy.get('button').contains('3').click()

      cy.get('button').contains('Take New Quiz').click()

      cy.get("h2").should("have.text", "What is the output of print(2 ** 3)?")
    })

  })
  