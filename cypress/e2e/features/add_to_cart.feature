Feature: Add a product to cart

    Scenario: User registration
        Given A user opens the demo blaze page
        When A user enter username
        When A user enter the "Qwerty123"
        When A user clicks in register button
        Then The registration modal should not be visible
    
    Scenario: Login y logout user
        Given A user should click on login btn
        Then Opens the modal of Login
        When A user enter the username as register
        When A user enter the login password "Qwerty123"
        When A user clicks in log in button
        Then The login modal should not be visible
        Then the navbar should have the name of the user


    Scenario: Agregar una laptop al carrito
        When A user clicks on the button Laptops
        When A user clicks on the first laptop
        Then The url should contains a query string
        When A user click on Add to cart
        Then An alert should appears with text "Product added."

