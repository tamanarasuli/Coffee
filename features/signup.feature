Feature: Allow user to signup
    Scenario: User's creds get inserted
        Given user wants to input email, username, password
        When the user hits signup 
        Then "/insertSignUp/email/tmana@gmail.com/username/trm001/password/123mfjf" is returned