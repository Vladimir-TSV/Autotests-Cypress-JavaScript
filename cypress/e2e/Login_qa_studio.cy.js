describe('Первые автоматизированные тесты формы логина и пароля', function () {

// Пред условия
    beforeEach('Начало теста', function () {
         cy.visit('https://login.qa.studio/');
           });
// Пост условия
    afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        });
// Тесты 
    it('№1 Вход (верные логин и пароль)', function () {
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();         
        cy.get('#messageHeader').should('contain', 'Авторизация прошла успешно') 
     })

     it('№2 Проверка логики восстановления пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov1.ru')
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('contain', 'Успешно отправили пароль на e-mail')
     })
     
    it('№3 Вход (верный логин и неверный пароль)', function () {
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio11')
        cy.get('#loginButton').click();               
        cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет')
     })

    it('№4 Вход (неверный логин и верный пароль)', function () {
        cy.get('#mail').type('german@dolnikov1.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();      
        cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет')         
     })

    it('№5 Вход (логин без @ и верный пароль)', function () {
        cy.get('#mail').type('germandolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();     
        cy.get('#messageHeader').should('contain', 'Нужно исправить проблему валидации') 
     })

    it('№6 Вход (верные логин и пароль)', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('contain', 'Авторизация прошла успешно')         
     })
 }) 