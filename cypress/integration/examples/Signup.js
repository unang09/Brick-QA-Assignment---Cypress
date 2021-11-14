// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { randomemail } from "../../support/emailRandom";
import { randompassword } from "../../support/passwordRandom";

describe('Signup checking', function() {
    it('User able to signup successfully', function() {
        cy.visit(Cypress.env("signup_url"))
        cy.title().should("contain","Brick Sign Up Form")
        cy.get('.register').should("be.visible")
        cy.get('#myform').should("be.visible")
        cy.get('.form-left').should("be.visible")
        
        cy.get('#firstName').type(Cypress.env("signup_first_name"))
        cy.get('#lastName').type(Cypress.env("signup_last_name"))
        cy.get('#email').type(randomemail())
        cy.get('#phoneNumber').type(Cypress.env("signup_phone"))
        cy.get('#address').type(Cypress.env("signup_address"))
        var a = randompassword()
        cy.get('#password').type(a)
        cy.get('#confirm_password').type(a)
        cy.get('.register').click()
        cy.get('.swal2-popup').should("be.visible")
        cy.get('#swal2-content').should("contain","Check your email to confirm your registration")
    })

    it("user able to login using existing credential", function() {
        cy.visit(Cypress.env("login_url"))
        cy.title().should("contain","Login")
        cy.get('#your_email').type(Cypress.env("login_email"))
        cy.get('#password').type(Cypress.env("login_password"))
        cy.get('.register').click()
        cy.get('.swal2-popup').should("be.visible")
        cy.get('#swal2-content').should("contain","Welcome Back, Dark Omniscient!")
    })

    it("Logged in user is able to logout", function() {
        cy.visit(Cypress.env("login_url"))
        cy.title().should("contain","Login")
        cy.get('#your_email').type(Cypress.env("login_email"))
        cy.get('#password').type(Cypress.env("login_password"))
        cy.get('.register').click()
        cy.get('.swal2-confirm').click()
        cy.get('.btn').should("be.visible").click()
        cy.title().should("contain","Login")
    })
})