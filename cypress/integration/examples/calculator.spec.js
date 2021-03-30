it ('Should check display number 5', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5501/index.html')
  // 2. Act
  cy.get('#num5').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#displayText').should('have.value', 5)
})

it ('Should check 5+2 equals 7', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5501/index.html')
  // 2. Act
  cy.get('#num5').click();
  cy.get('#sumButton').click();
  cy.get('#num2').click();
  cy.get('#submitButton').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#displayText2').should('have.value', '5 + 2 = 7')
})

it ('Should check 5-2 equals 3', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5501/index.html')
  // 2. Act
  cy.get('#num5').click();
  cy.get('#minusButton').click();
  cy.get('#num2').click();
  cy.get('#submitButton').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#displayText2').should('have.value', '5 - 2 = 3')
})

it ('Should check 5*2 equals 10', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5501/index.html')
  // 2. Act
  cy.get('#num5').click();
  cy.get('#multiplyButton').click();
  cy.get('#num2').click();
  cy.get('#submitButton').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#displayText2').should('have.value', '5 \u00d7 2 = 10')
})

it ('Should check 5/2 equals 2.5', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5501/index.html')
  // 2. Act
  cy.get('#num5').click();
  cy.get('#divideButton').click();
  cy.get('#num2').click();
  cy.get('#submitButton').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#displayText2').should('have.value', '5 \u00f7 2 = 2.5')
})

it ('Should check 5^2 equals 25', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5501/index.html')
  // 2. Act
  cy.get('#num5').click();
  cy.get('#powerButton').click();
  cy.get('#num2').click();
  cy.get('#submitButton').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#displayText2').should('have.value', '5 ^ 2 = 25')
})

it ('Should check 5..1 is not possible', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5501/index.html')
  // 2. Act
  cy.get('#num5').click();
  cy.get('#decButton').click();
  cy.get('#decButton').click();
  cy.get('#num1').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#displayText').should('have.value', '5.1')
})

it ('Should check that Ans is the previous answer', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5501/index.html')
  // 2. Act
  cy.get('#num5').click();
  cy.get('#sumButton').click();
  cy.get('#num2').click();
  cy.get('#submitButton').click();
  cy.get('#ansButton').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#displayText').should('have.value', 'Ans')
  cy.get('#displayText2').should('have.value', '5 + 2 = 7')
})

it ('Should check that All clear button works', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5501/index.html')
  // 2. Act
  cy.get('#num5').click();
  cy.get('#sumButton').click();
  cy.get('#num2').click();
  cy.get('#submitButton').click();
  cy.get('#num3').click();
  cy.get('#minusButton').click();
  cy.get('#num1').click();
  cy.get('#submitButton').click();
  cy.get('#num3').click();
  cy.get('#multiplyButton').click();
  cy.get('#num8').click();
  cy.get('#submitButton').click();
  cy.get('#clearButton').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#displayText').should('have.value', '');
  cy.get('#displayText2').should('have.value', '');
  cy.get('#displayText3').should('have.value', '');
  cy.get('#displayText4').should('have.value', '');
})