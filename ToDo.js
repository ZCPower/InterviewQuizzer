/*
What this app will be: Essentially a Quizlet Clone that I will use to prep for interviews.

Wants:
    - Flashcards with options that I can click on.
        -- Front and back
            -user can decide which side is displayed first.
    - Mulitple Choice
        -- 3-5 options will be clickable.
    - Fill in the blank/short answer.
    - Login System
        --Users can create cardSets and view/edit sets that are theres.
        --Users can view anyones card sets that are set to public.
    - Tracker of:
        - What questions they got right, how many.
        - How many times they have completed a set.
        - How many cards they have completed this session?
    - Make it more game like?
        -- Answer/Complete a certain amount of questions to earn points
            -- points can be used to reach checkpoints??
                --Make it like an adventure or silly game?

RoadMap:
    --Backend
        --Need API and DB for:
            -Users
                -username/password
            -Card Sets
                -name of set
                -Questions/Cards of set
                    -will require joins
            -Cards Questions
                -Front
                -Back
            - Mulitple Choice
                - Questions:
                    - What is: [random front of card/question]
                    - 3 Random answers related to topic
                    - 1 real answer which would be the back associated with the questions ID.





Extras:
    - TypeScript?
*/




// With new Router, figureout how to redirect to study if user is already logged and enters /login. Don't want to be able to login twice.