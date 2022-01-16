const pytania = [
    {
        id: 1,
        tresc: "Which one of the following answers describes a test condition?",
        answers: [
            {
                tresc: "A distinguishing characteristic of a component or system",
                correct: false,
                hint: "Is not correct. Definition of feature according to glossary"
            },
            {
                tresc: "A testable aspect of a component or system identified as a basis for testing",
                correct: true,
                hint: "Is correct. From glossary"
            },
            {
                tresc: "The degree to which a software product provides functions which meet stated and implied needs when the software is used under specified conditions",
                correct: false,
                hint: "Is not correct. Definition of functionality suitability according to glossary"
            },
            {
                tresc: "Test cases designed to execute combinations of conditions and actions resulting from them",
                correct: false,
                hint: "Is not correct. Like Definition of Decision table testing according to glossary"
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 2,
        tresc: "Which of the following statements is a valid objective for testing?",
        answers: [
            {
                tresc: "The test should start as late as possible so that development had enough time to create a good product",
                correct: false,
                hint: " Is not correct. Contradiction to principle 3: “Early testing saves time and money”"
            },
            {
                tresc: "To validate whether the test object works as expected by the users and other stakeholders",
                correct: true,
                hint: "Is correct. This is one objective of testing"
            },
            {
                tresc: "To prove that all possible defects are identified",
                correct: false,
                hint: "Is not correct. Principle #2 states that exhaustive testing is impossible, so one can never prove that all defects were identified"
            },
            {
                tresc: "To prove that any remaining defects will not cause any failures",
                correct: false,
                hint: "Is not correct. To make an assessment whether a defect will cause a failure or not, one must detect the defect first. Saying that no remaining defect will cause a failure implicitly means that all defects were found. This again contradicts principle #2"
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 3,
        tresc: "Which of the following statements correctly describes the difference between testing and debugging?",
        answers: [
            {
                tresc: "Testing identifies the source of defects; debugging analyzes the defects and proposes prevention activities",
                correct: false,
                hint: "Is not correct. Testing does not identify the source of defects, debugging identifies the defects"
            },
            {
                tresc: "Dynamic testing shows failures caused by defects; debugging eliminates the defects, which are the source of failures",
                correct: true,
                hint: "Is correct. Dynamic testing can show failures that are caused by defects in the software. Debugging eliminates the defects, which are the source of failures, not the root cause of the defects"
            },
            {
                tresc: "Testing does not remove faults; but debugging removes defects that cause the faults",
                correct: false,
                hint: "Is not correct. Testing does not remove faults, but debugging remove defects that cause the faults"
            },
            {
                tresc: "Dynamic testing prevents the causes of failures; debugging removes the failures",
                correct: false,
                hint: "Is not correct. Dynamic testing does not directly prevent the causes of failures (defects) but detects the presence of defects"
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 4,
        tresc: "Which one of the statements below describes the most common situation for a failure discovered during testing or in production?",
        answers: [
            {
                tresc: "The product crashed when the user selected an option in a dialog box",
                correct: true,
                hint: "Is correct. A crash is clearly noticeable by the user"
            },
            {
                tresc: "The wrong version of a compiled source code file was included in the build",
                correct: false,
                hint: "Is not correct. this is a defect, not a failure, since there is something wrong in the code. It may not result in a visible or noticeable failure, for example if the changes in the source code file are only in comments"
            },
            {
                tresc: "The computation algorithm used the wrong input variables",
                correct: false,
                hint: "Is not correct. The use of wrong input variables may not result in a visible or noticeable failure, for example if nobody uses this particular algorithm; or if the wrong input variable has a similar value to the correct input variable; or if the FALSE result of the algorithm is not used"
            },
            {
                tresc: "The developer misinterpreted the requirement for the algorithm",
                correct: false,
                hint: "Is not correct. This type of fault will not necessarily lead to a failure; for example, if no one uses this special algorithm"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 5,
        tresc: "Mr. Test has been testing software applications on mobile devices for a period of 5 years. He has a wealth of experience in testing mobile applications and achieves better results in a shorter time than others. Over several months, Mr. Test did not modify the existing automated test cases and did not create any new test cases. This leads to fewer and fewer defects being found by executing the tests. What principle of testing did Mr. Test not observe?",
        answers: [
            {
                tresc: "Testing depends on the environment",
                correct: false,
                hint: " Is not correct. Testing is context dependent, regardless of it being manual or automated (principle #6), but does not result in detecting a decreasing number of faults as described above"
            },
            {
                tresc: "Exhaustive testing is not possible",
                correct: false,
                hint: "Is not correct. Exhaustive testing is impossible, regardless of the amount of effort put into testing (principle #2)"
            },
            {
                tresc: "Repeating of same tests will not find new defects",
                correct: true,
                hint: "Is correct. Principle #5 says “If the same tests are repeated over and over again, eventually these tests no longer find any new defects. To detect new defects, existing tests and test data may need changing, and new tests may need to be written.” Automated regression testing of the same test cases will not bring new findings"
            },
            {
                tresc: "Defects cluster together",
                correct: false,
                hint: "Is not correct. ”Defect cluster together” (principle #4). A small number of modules usually contain most of the defects, but this does not mean that fewer and fewer defects will be found"
            },
        ],
        right: 2,
        lang: "eng"
    },
    {
        id: 6,
        tresc: "In what way can testing be part of Quality Assurance?",
        answers: [
            {
                tresc: "It ensures that requirements are detailed enough",
                correct: false,
                hint: "Is not correct. Static testing (reviews) contributes, but could not ensure, that requirements are detailed enough"
            },
            {
                tresc: "Testing reduces the risk of poor software quality",
                correct: true,
                hint: "Is correct. Testing contributes to the achievement of quality in a variety of ways, e.g. such as reducing the risk of inadequate software quality"
            },
            {
                tresc: "It ensures that standards in the organization are followed",
                correct: false,
                hint: "Is not correct. This is quality assurance but not testing"
            },
            {
                tresc: "It measures the quality of software in terms of number of executed test cases",
                correct: false,
                hint: "Is not correct. The quality cannot be measured by counting the number of executed test cases without knowing the outcome"
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 7,
        tresc: "Which of the following activities is part of the main activity 'test analysis' in the test process?",
        answers: [
            {
                tresc: "Identifying any required infrastructure and tools",
                correct: false,
                hint: "Is not correct. This activity is performed during the test design activity (test design)"
            },
            {
                tresc: "Creating test suites from test scripts",
                correct: false,
                hint: "Is not correct. This activity is performed during the test implementation activity (test implementation)"
            },
            {
                tresc: "Analyzing lessons learned for process improvement",
                correct: false,
                hint: "Is not correct. This activity is performed during the test completion activity (test completion)"
            },
            {
                tresc: "Evaluating the test basis for testability",
                correct: true,
                hint: "Is correct. This activity is performed during the test analysis activity (test analysis)"
            },
        ],
        right: 3,
        lang: "eng"
    },
    {
        id: 8,
        tresc: "Match the following test work products (1-4) with the right description (A-D). <br/><br/>1. Test suite <br/>2. Test case <br/>3. Test script <br/>4. Test charter <br/><br/>A. A set of test scripts to be executed in a specific test run <br/>B. A set of instructions for the execution of a test <br/>C. Contains expected results <br/>D. Documentation of test activities in session-based exploratory testing",
        answers: [
            {
                tresc: "1A, 2C, 3B, 4D",
                correct: true,
                hint: "Glossary defines the following tests as:  Test suite: “A set of test scripts or test procedures to be executed in a specific test run.” (1A)  Test case: “A set of preconditions, inputs, actions (where applicable), expected results and post conditions, developed based on test conditions” (2C)  Test script: “A sequence of instructions for the execution of a test” (3B)  Test charter: “Documentation of test activities in session-based exploratory testing” (4D)"
            },
            {
                tresc: "1D, 2B, 3A, 4C",
                correct: false,
                hint: "Glossary defines the following tests as:  Test suite: “A set of test scripts or test procedures to be executed in a specific test run.” (1A)  Test case: “A set of preconditions, inputs, actions (where applicable), expected results and post conditions, developed based on test conditions” (2C)  Test script: “A sequence of instructions for the execution of a test” (3B)  Test charter: “Documentation of test activities in session-based exploratory testing” (4D)"
            },
            {
                tresc: "1A, 2C, 3D, 4B",
                correct: false,
                hint: "Glossary defines the following tests as:  Test suite: “A set of test scripts or test procedures to be executed in a specific test run.” (1A)  Test case: “A set of preconditions, inputs, actions (where applicable), expected results and post conditions, developed based on test conditions” (2C)  Test script: “A sequence of instructions for the execution of a test” (3B)  Test charter: “Documentation of test activities in session-based exploratory testing” (4D)"
            },
            {
                tresc: "1D, 2C, 3B, 4A",
                correct: false,
                hint: "Glossary defines the following tests as:  Test suite: “A set of test scripts or test procedures to be executed in a specific test run.” (1A)  Test case: “A set of preconditions, inputs, actions (where applicable), expected results and post conditions, developed based on test conditions” (2C)  Test script: “A sequence of instructions for the execution of a test” (3B)  Test charter: “Documentation of test activities in session-based exploratory testing” (4D)"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 9,
        tresc: "How can white-box testing be applied during acceptance testing?",
        answers: [
            {
                tresc: "To check if large volumes of data can be transferred between integrated systems",
                correct: false,
                hint: "Is not correct. Relevant for integration testing"
            },
            {
                tresc: "To check if all code statements and code decision paths have been executed",
                correct: false,
                hint: "Is not correct. Relevant for component testing"
            },
            {
                tresc: "To check if all work process flows have been covered",
                correct: true,
                hint: "Is correct. For acceptance testing, tests are designed to cover all supported financial data file structures and value ranges for bank-tobank transfers"
            },
            {
                tresc: "To cover all web page navigations",
                correct: false,
                hint: "Is not correct. Relevant for system testing"
            },
        ],
        right: 2,
        lang: "eng"
    },
    {
        id: 10,
        tresc: "Which of the following statements comparing component testing and system testing is TRUE?",
        answers: [
            {
                tresc: "Component testing verifies the functionality of software modules, program objects, and classes that are separately testable, whereas system testing verifies interfaces between components and interactions between different parts of the system",
                correct: false,
                hint: "Is not correct. System testing does not test interfaces between components and interactions between different parts of the system; this is a target of integration tests"
            },
            {
                tresc: "Test cases for component testing are usually derived from component specifications, design specifications, or data models, whereas test cases for system testing are usually derived from requirement specifications or use cases",
                correct: true,
                hint: "Is correct. Examples of work products that can be used as a test basis for component testing include detailed design, code, data model, component specifications. Examples of work products for system testing include system and software requirement specifications (functional and non-functional) use cases"
            },
            {
                tresc: "Component testing only focuses on functional characteristics, whereas system testing focuses on functional and non-functional characteristics",
                correct: false,
                hint: " Is not correct. Component testing does not ONLY focus on functional characteristics"
            },
            {
                tresc: "Component testing is the responsibility of the testers, whereas system testing typically is the responsibility of the users of the system",
                correct: false,
                hint: "Is not correct. Component tests are also executed by developers, whereas system testing typically is the responsibility of (independent) testers "
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 11,
        tresc: "Which one of the following is TRUE?",
        answers: [
            {
                tresc: "The purpose of regression testing is to check if the correction has been successfully implemented, while the purpose of confirmation testing is to confirm that the correction has no side effects",
                correct: false,
                hint: "Is not correct. Regression testing does not check successful implementation of corrections and confirmation testing does not check for side effects"
            },
            {
                tresc: "The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check if the system is still working in a new environment",
                correct: false,
                hint: " Is not correct. The statement about confirmation testing should be about regression testing"
            },
            {
                tresc: "The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check if the original defect has been fixed",
                correct: true,
                hint: "Is correct. See reasons from incorrect answers"
            },
            {
                tresc: "The purpose of regression testing is to check if the new functionality is working, while the purpose of confirmation testing is to check if the original defect has been fixed",
                correct: false,
                hint: "Is not correct. Testing new functionality is not regression testing"
            },
        ],
        right: 2,
        lang: "eng"
    },
    {
        id: 12,
        tresc: "Which one of the following is the BEST definition of an incremental development model?",
        answers: [
            {
                tresc: "Defining requirements, designing software and testing are done in phases where in each phase a piece of the system is added",
                correct: true,
                hint: "Is correct. Incremental development involves establishing requirements, designing, building, and testing a system in pieces"
            },
            {
                tresc: "A phase in the development process should begin when the previous phase is complete",
                correct: false,
                hint: " Is not correct. This is a sequential model"
            },
            {
                tresc: "Testing is viewed as a separate phase which takes place after development has been completed",
                correct: false,
                hint: "Is not correct. This describes the waterfall model"
            },
            {
                tresc: "Testing is added to development as an increment",
                correct: false,
                hint: "Is not correct. Testing alone is not an increment/additional step in the development"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 13,
        tresc: "Which of the following should NOT be a trigger for maintenance testing?",
        answers: [
            {
                tresc: "Decision to test the maintainability of the software",
                correct: true,
                hint: "Is correct. This is maintainability testing, not maintenance testing"
            },
            {
                tresc: "Decision to test the system after migration to a new operating platform",
                correct: false,
                hint: "Is not correct. This is a trigger for maintenance testing: Operational tests of the new environment as well as of the changed software"
            },
            {
                tresc: "Decision to test if archived data is possible to be retrieved",
                correct: false,
                hint: "Is not correct. This is the trigger for maintenance testing: testing restore/retrieve procedures after archiving for long retention periods"
            },
            {
                tresc: "Decision to test after “hot fixes”",
                correct: false,
                hint: "Is not correct. This is the trigger for maintenance testing: Reactive modification of a delivered software product to correct emergency defects that have caused actual failures"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 14,
        tresc: "Which of the following options are roles in a formal review?",
        answers: [
            {
                tresc: "Developer, Moderator, Review leader, Reviewer, Tester",
                correct: false,
                hint: " Is not correct. Tester and developer are NOT roles in a formal review"
            },
            {
                tresc: "Author, Moderator, Manager, Reviewer, Developer",
                correct: false,
                hint: "Is not correct. Developer is NOT a role in a formal review"
            },
            {
                tresc: "Author, Manager, Review leader, Reviewer, Designer",
                correct: false,
                hint: "Is not correct. Designer is NOT a role in a formal review"
            },
            {
                tresc: "Author, Moderator, Review leader, Reviewer, Scribe",
                correct: true,
                hint: "Is correct. See reasons from incorrect answers"
            },
        ],
        right: 3,
        lang: "eng"
    },
    {
        id: 15,
        tresc: "Which activities are carried out within the planning of a formal review?",
        answers: [
            {
                tresc: "Collection of metrics for the evaluation of the effectiveness of the review",
                correct: false,
                hint: "Is not correct. ‘Collection of metrics’ belongs to the main activity “Fixing and Reporting”"
            },
            {
                tresc: "Answer any questions the participants may have",
                correct: false,
                hint: "Is not correct. ‘Answer any question.’ belongs to the main activity “Initiate Review”"
            },
            {
                tresc: "Definition and Verification of fulfillment of entry criteria for the review",
                correct: true,
                hint: "Is correct. The checking of entry criteria takes place in the planning of a formal review"
            },
            {
                tresc: "Evaluation of the review findings against the exit criteria",
                correct: false,
                hint: "Is not correct. The evaluation of the review findings against the exit criteria belongs to the main activity “Issue communication and analysis”"
            },
        ],
        right: 2,
        lang: "eng"
    },
    {
        id: 16,
        tresc: "Which of the review types below is the BEST option to choose when the review must follow a formal process based on rules and checklists?",
        answers: [
            {
                tresc: "Informal Review",
                correct: false,
                hint: "Is not correct. Informal review does not use a formal process"
            },
            {
                tresc: "Technical Review",
                correct: false,
                hint: "Is not correct. Use of checklists are optional"
            },
            {
                tresc: "Inspection",
                correct: true,
                hint: "Is correct. Inspection is a formal process based on rules and checklists"
            },
            {
                tresc: "Walkthrough",
                correct: false,
                hint: "Is not correct. Does not explicitly require a formal process and the use of checklists is optional"
            },
        ],
        right: 2,
        lang: "eng"
    },
    {
        id: 17,
        tresc: "Which of the following statements about static testing are MOST true?",
        answers: [
            {
                tresc: "Static testing is a cheap way to detect and remove defects",
                correct: true,
                hint: "Is correct. Defects found early are often much cheaper to remove than defects detected later in the lifecycle"
            },
            {
                tresc: "Static testing makes dynamic testing less challenging",
                correct: false,
                hint: "Is not correct. Dynamic testing still has its challenging, because they find other types of defects"
            },
            {
                tresc: "Static testing makes it possible to find run-time problems early in the lifecycle",
                correct: false,
                hint: " Is not correct. This is dynamic testing"
            },
            {
                tresc: "When testing safety-critical system, static testing has less value because dynamic testing finds the defects better",
                correct: false,
                hint: "Is not correct. Static testing is important for safety-critical computer systems"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 18,
        tresc: "You will be invited to a review. The work product to be reviewed is a description of the in-house document creation process. The aim of the description is to present the work distribution between the different roles involved in the process in a way that can be clearly understood by everyone. <br/><br/>You will be invited to a checklist-based review. The checklist will also be sent to you. It includes the following points: <br/><br/>i. Is the person who performs the activity clearly identified for each activity? <br/>ii. Are the entry criteria clearly defined for each activity? <br/>iii. Are the exit criteria clearly defined for each activity? <br/>iv. Are the supporting roles and their scope of work clearly defined for each activity? <br/><br/>In the following we show an excerpt of the work result to be reviewed, for which you should use the checklist above: <br/><br/>'After checking the customer documentation for completeness and correctness, the software architect creates the system specification. Once the software architect has completed the system specification, he invites testers and verifiers to the review. A checklist describes the scope of the review. Each invited reviewer creates review comments - if necessary - and concludes the review with an official review done-comment.' <br/><br/>Which of the following statements about your review is correct?",
        answers: [
            {
                tresc: "Point ii) of the checklist has been violated because it is not clear which condition must be fulfilled in order to invite to the review",
                correct: false,
                hint: "Is not correct. It is described that the software architect must have completed the system specification"
            },
            {
                tresc: "You notice that in addition to the tester and the verifier, the validator must also be invited. Since this item is not part of your checklist, you do not create a corresponding comment",
                correct: false,
                hint: "Is not correct. ‘Checklist-based’, last sentence it is documented that you should also look for defects outside the checklist"
            },
            {
                tresc: "Point iii) of the checklist has been violated as it is not clear what marks the review as completed",
                correct: false,
                hint: "Is not correct. It is described: every reviewer did his review done comment"
            },
            {
                tresc: "Point i) of the checklist has been violated because it is not clear who is providing the checklist for the invitation to the review",
                correct: true,
                hint: "Is correct. It is described that a checklist is available, but who provides the checklist?"
            },
        ],
        right: 3,
        lang: "eng"
    },
    {
        id: 19,
        tresc: "What is checklist-based testing?",
        answers: [
            {
                tresc: "A test technique in which tests are derived based on the tester's knowledge of past faults, or general knowledge of failures",
                correct: false,
                hint: "Is not correct. This is error guessing"
            },
            {
                tresc: "A test technique based on an analysis of the specification of a component or system",
                correct: false,
                hint: "Is not correct. This is black-box test technique"
            },
            {
                tresc: "An experience-based test technique whereby the experienced tester uses a list of items to be noted, checked, or remembered, or a set of rules or criteria against which a product must be verified",
                correct: true,
                hint: "Is correct. See reasons from incorrect answers"
            },
            {
                tresc: "An approach to testing where the testers dynamically design and execute tests based on their knowledge, exploration of the test item and the results of previous tests",
                correct: false,
                hint: "Is not correct. This is exploratory testing"
            },
        ],
        right: 2,
        lang: "eng"
    },
    {
        id: 20,
        tresc: "Which one of the following options is categorized as a black-box test technique?",
        answers: [
            {
                tresc: "A technique based on analysis of the architecture",
                correct: false,
                hint: "Is not correct. This is a white-box test technique"
            },
            {
                tresc: "A technique checking that the test object is working according to the detailed design",
                correct: false,
                hint: "Is not correct. This is a white-box test technique"
            },
            {
                tresc: "A technique based on the knowledge of past faults, or general knowledge of failures",
                correct: false,
                hint: "Is not correct. This is an experience-based test technique"
            },
            {
                tresc: "A technique based on formal requirements",
                correct: true,
                hint: "Is correct. Black-box test techniques are based on an analysis of the appropriate test basis (e.g. formal requirements documents, specifications, use cases, user stories)"
            },
        ],
        right: 3,
        lang: "eng"
    },
    {
        id: 21,
        tresc: "The following statement refers to decision coverage: 'When the code contains only a single 'if' statement and no loops or CASE statements, and its execution is not nested within the test, any single test case we run will result in 50% decision coverage.' Which of the following statement is correct?",
        answers: [
            {
                tresc: "The statement is true. Any single test case provides 100% statement coverage and therefore 50% decision coverage",
                correct: false,
                hint: "Is not correct. While the given statement is true, the explanation is not. The relationship between statement and decision coverage is misrepresented"
            },
            {
                tresc: "The statement is true. Any single test case would cause the outcome of the “if” statement to be either true or false",
                correct: true,
                hint: "Is correct. Since any test case will cause the outcome of the “if” statement to be either TRUE or FALSE, by definition we achieved 50% decision coverage"
            },
            {
                tresc: "The statement is false. A single test case can only guarantee 25% decision coverage in this case",
                correct: false,
                hint: "Is not correct. A single test case can give more than 25% decision coverage, this means according to the statement above always 50 % decision coverage"
            },
            {
                tresc: "The statement is false. The statement is too broad. It may be correct or not, depending on the tested software",
                correct: false,
                hint: "Is not correct. The statement is specific and always true, because each test case achieves 50 % decision coverage"
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 22,
        tresc: "Which one of the following is the description of statement coverage?",
        answers: [
            {
                tresc: "It is a metric, which is the percentage of test cases that have been executed",
                correct: false,
                hint: "Is not correct. Statement coverage measures the percentage of statements exercised by test cases"
            },
            {
                tresc: "It is a metric, which is the percentage of statements in the source code that have been executed",
                correct: true,
                hint: "Is correct. Statement testing exercises the executable statements in the code. Statement coverage is measured as the number of statements executed by the tests divided by the total number of executable statements in the test object, normally expressed as a percentage"
            },
            {
                tresc: "It is a metric, which is the number of statements in the source code that have been executed by test cases that are passed",
                correct: false,
                hint: "Is not correct. The coverage does not measure pass/fail"
            },
            {
                tresc: "It is a metric, that gives a true/false confirmation if all statements are covered or not",
                correct: false,
                hint: "Is not correct. It is a metric and does not provide true/false statements"
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 23,
        tresc: "Which statement about the relationship between statement coverage and decision coverage is true?",
        answers: [
            {
                tresc: "100% decision coverage also guarantees 100% statement coverage",
                correct: true,
                hint: "Is correct. The statement is true. Achieving 100% decision coverage guarantees 100% statement coverage"
            },
            {
                tresc: "100% statement coverage also guarantees 100% decision coverage",
                correct: false,
                hint: "Is not correct. The statement is false because achieving 100 % statement coverage does not in any case mean that the decision coverage is 100%"
            },
            {
                tresc: "50% decision coverage also guarantees 50% statement coverage",
                correct: false,
                hint: "Is not correct. The statement is false, because we can only do statements about 100% values"
            },
            {
                tresc: "Decision coverage can never reach 100%",
                correct: false,
                hint: "Is not correct. The statement is false"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 24,
        tresc: "For which of the following situations is exploratory testing suitable?",
        answers: [
            {
                tresc: "When time pressure requires speeding up the execution of tests already specified",
                correct: false,
                hint: "Is not correct. Exploratory testing is not suitable to speed up tests, which are already specified. It is most useful when there are few or inappropriate specified requirements or significant time pressure on testing"
            },
            {
                tresc: "When the system is developed incrementally, and no test charter is available",
                correct: false,
                hint: "Is not correct. The absence of a test charter, which may have been derived from the test analysis, is a poor precondition for the use of exploratory testing"
            },
            {
                tresc: "When testers are available who have enough knowledge of similar applications and technologies",
                correct: true,
                hint: "Is correct. Exploratory tests should be performed by experienced testers with knowledge of similar applications and technologies"
            },
            {
                tresc: "When an advanced knowledge of the system already exists, and evidence is to be provided that it should be tested intensively",
                correct: false,
                hint: "Is not correct. Explorative testing alone is not suitable to provide evidence that the test was very intensive, instead the evidence is provided in combination with other test methods"
            },
        ],
        right: 2,
        lang: "eng"
    },
    {
        id: 25,
        tresc: "An employee's bonus is to be calculated. It cannot be negative, but it can be calculated down to zero. The bonus is based on the length of employment: <br/><br/>- less than or equal to 2 years <br/>- more than 2 years but less than 5 years <br/>- 5 to 10 years inclusively <br/>- longer than 10 years <br/><br/> What is the minimum number of test cases required to cover all valid equivalence partitions for calculating the bonus?",
        answers: [
            {
                tresc: "3",
                correct: false,
                hint: "Is not correct. one too few"
            },
            {
                tresc: "5",
                correct: false,
                hint: ") Is not correct. one too much"
            },
            {
                tresc: "2",
                correct: false,
                hint: "Is not correct. two too few"
            },
            {
                tresc: "4",
                correct: true,
                hint: "Is correct. The 4 equivalence partitions correspond to the description in the question, i.e. at least one test case must be created for each equivalence partition 1. Equivalence partition: 0 ≤ employment time ≤ 2. 2. Equivalence partition: 2 < employment time < 5. 3. Equivalence partition: 5 ≤ employment time ≤ 10. 4. Equivalence partition: 10 < employment time."
            },
        ],
        right: 3,
        lang: "eng"
    },
    {
        id: 26,
        tresc: "A speed control and reporting system has the following characteristics: <br/><br/>- If you drive 50 km/h or less, nothing will happen. <br/>- If you drive faster than 50 km/h, but no more than 55 km/h, you will be warned. <br/>- If you drive faster than 55 km/h but not more than 60 km/h, you will be fined. <br/>- If you drive faster than 60 km/h, your driving license will be suspended. <br/>- The speed in km/h is available to the system as an integer value. <br/><br/>Which would be the most likely set of values (km/h) identified by applying the boundary value analysis, where only the values on the boundaries of the equivalence classes are selected?",
        answers: [
            {
                tresc: "0, 49, 50, 54, 59, 60",
                correct: false,
                hint: "The following partitions can be identified: 1. <= 50, boundary value 50 2. 51 – 55 boundary values 51, 55 3. 56 – 60 boundary values 56, 60 4. >=61 boundary value 61 Boundary value according to glossary V.3.2: A minimum or maximum value of an ordered equivalence partition"
            },
            {
                tresc: "50, 55, 60",
                correct: false,
                hint: "The following partitions can be identified: 1. <= 50, boundary value 50 2. 51 – 55 boundary values 51, 55 3. 56 – 60 boundary values 56, 60 4. >=61 boundary value 61 Boundary value according to glossary V.3.2: A minimum or maximum value of an ordered equivalence partition"
            },
            {
                tresc: "49, 50, 54, 55, 60, 62",
                correct: false,
                hint: "The following partitions can be identified: 1. <= 50, boundary value 50 2. 51 – 55 boundary values 51, 55 3. 56 – 60 boundary values 56, 60 4. >=61 boundary value 61 Boundary value according to glossary V.3.2: A minimum or maximum value of an ordered equivalence partition"
            },
            {
                tresc: "50, 51, 55, 56, 60, 61",
                correct: true,
                hint: "The following partitions can be identified: 1. <= 50, boundary value 50 2. 51 – 55 boundary values 51, 55 3. 56 – 60 boundary values 56, 60 4. >=61 boundary value 61 Boundary value according to glossary V.3.2: A minimum or maximum value of an ordered equivalence partition"
            },
        ],
        right: 3,
        lang: "eng"
    },
    {
        id: 29,
        tresc: "A video application has the following requirement: The application shall allow playing a video on the following display resolution: <br/><br/>1. 640x480 <br/>2. 1280x720 <br/>3. 1600x1200 <br/>4. 1920x1080 <br/><br/>Which of the following list of test cases is a result of applying the equivalence partitioning test technique to test this requirement?",
        answers: [
            {
                tresc: "Verify that the application can play a video on a display of size 1920x1080 (1 test case)",
                correct: false,
                hint: "Is not correct. See reason from correct answer"
            },
            {
                tresc: "Verify that the application can play a video on a display of size 640x480 and 1920x1080 (2 test cases)",
                correct: false,
                hint: "Is not correct. See reason from correct answer"
            },
            {
                tresc: "Verify that the application can play a video on each of the display sizes in the requirement (4 test cases)",
                correct: true,
                hint: "Is correct. This is a case where the requirement gives an enumeration of discrete values. Each enumeration value is an equivalence class by itself; therefore, each will be tested when using equivalence partitioning test technique"
            },
            {
                tresc: "Verify that the application can play a video on any one of the display sizes in the requirement (1 test case)",
                correct: false,
                hint: "Is not correct. See reason from correct answer"
            },
        ],
        right: 2,
        lang: "eng"
    },
    {
        id: 30,
        tresc: "Which of the following statements BEST describes how tasks are divided between the test manager and the tester?",
        answers: [
            {
                tresc: "The test manager plans testing activities and chooses the standards to be followed, while the tester chooses the tools and set the tools usage guidelines",
                correct: false,
                hint: "Is not correct. Selection of tools is a test manager task"
            },
            {
                tresc: "The test manager plans, coordinates and controls the testing activities, while the tester automates the tests",
                correct: true,
                hint: " Is correct. See reasons from incorrect answers"
            },
            {
                tresc: "The test manager plans, monitors, and controls the testing activities, while the tester designs tests and decides on the release of the test object",
                correct: false,
                hint: "Is not correct. The tester does not decide on the release of the test object"
            },
            {
                tresc: "The test manager plans and organizes the testing and specifies the test cases, while the tester executes the tests",
                correct: false,
                hint: "Is not correct. The tester specifies the test cases, the test manager does the prioritization"
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 31,
        tresc: "Which of the following metrics would be MOST useful to monitor during test execution?",
        answers: [
            {
                tresc: "Percentage of executed test cases",
                correct: true,
                hint: "Is correct. Test case execution (e.g. number of test cases run/not run, and test cases passed/failed)"
            },
            {
                tresc: "Average number of testers involved in the test execution",
                correct: false,
                hint: "Is not correct. This metric can be measured, but its value is low. The number of testers does not give any information about the quality of the test object or test progress"
            },
            {
                tresc: "Coverage of requirements by source code",
                correct: false,
                hint: "Is not correct. the coverage of requirements by source code is not measured during test execution. At most, the TEST(!) coverage of the code or requirements is measured"
            },
            {
                tresc: "Percentage of test cases already created and reviewed",
                correct: false,
                hint: "Is not correct. This metric is part of test preparation and not test execution"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 32,
        tresc: "Which of the following can affect and be part of the (initial) test planning?",
        answers: [
            {
                tresc: "Budget limitations",
                correct: true,
                hint: "Is correct. Making decisions about what to test are documented in the test plan. This means when you are planning the test and there are budget limitations, prioritizing is needed; what should be tested and what should be omitted"
            },
            {
                tresc: "Test log",
                correct: false,
                hint: "Is not correct. Test monitoring and control"
            },
            {
                tresc: "Failure rate",
                correct: false,
                hint: " Is not correct. Common test metrics"
            },
            {
                tresc: "Use cases",
                correct: false,
                hint: " Is not correct. It is a part of test analysis"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 33,
        tresc: "Which of the following lists contains only typical exit criteria from testing?",
        answers: [
            {
                tresc: "Reliability measures, test coverage, schedule and status about fixing defect and remaining risks",
                correct: true,
                hint: "Is correct. See reasons from incorrect answers"
            },
            {
                tresc: "Reliability measures, test coverage, degree of tester’s independence and product completeness",
                correct: false,
                hint: "Is not correct. The “degree of tester’s independence” does not play a role in exit criteria"
            },
            {
                tresc: "Reliability measures, test coverage, test cost, availability of test environment, time to market and product completeness",
                correct: false,
                hint: "Is not correct. “Availability of test environment” is an entry criterion"
            },
            {
                tresc: "Time to market, remaining defects, tester qualification, availability of testable use cases, test coverage and test cost",
                correct: false,
                hint: "Is not correct. “The Qualification of Tester” is not a typical exit criterion"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 34,
        tresc: "Which one of the following is NOT included in a test summary report?",
        answers: [
            {
                tresc: "Defining pass/fail criteria and objectives of testing",
                correct: true,
                hint: "Is correct. This information has been defined earlier in the test project"
            },
            {
                tresc: "Deviations from the test approach",
                correct: false,
                hint: "Is not correct. This information is included in a test report: information on what occurred during a test period"
            },
            {
                tresc: "Measurements of actual progress against exit criteria",
                correct: false,
                hint: "Is not correct. This information is included in a test report:  Status of testing and product quality with respect to the exit criteria or definition of done  Metrics of defects, test cases, test coverage, activity progress, and resource consumption"
            },
            {
                tresc: "Evaluation of the quality of the test object",
                correct: false,
                hint: "Is not correct. This information is included in a test report: Information and metrics to support recommendations and decisions about future actions, such as an assessment of defects remaining, the economic benefit of continued testing, outstanding risks, and the level of confidence in the tested software"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 35,
        tresc: "The project develops a 'smart' heating thermostat. The control algorithms of the thermostat were modeled as Matlab/Simulink models and run on the internet connected server. The thermostat uses the specifications of the server to trigger the heating valves. The test manager has defined the following test strategy/approach in the test plan: <br/><br/>1. The acceptance test for the whole system is executed as an experience-based test. <br/>2. The control algorithms on the server are checked against standard of the energy saving regulation. <br/>3. The functional test of the thermostat is performed as risk-based testing. <br/>4. The security tests of data / communication via the internet are executed together with external security experts. <br/><br/>What four common types of test strategies/approaches did the test manager implement in the test plan?",
        answers: [
            {
                tresc: "methodical, analytical, reactive and regression-averse",
                correct: false,
                hint: "The possible mappings of points 1 to 4 can be justified as follows: 1. Approach 3 is analytical: Risk-based testing is an example of an analytical approach, where tests are designed and prioritized based on the level of risk 2. Approach 2 is standard-compliant: The control algorithms is checked against industry-specific standard of the energy saving regulation. 3. Approach 4 is consultative: This type of test strategy is driven primarily by the advice, guidance, or instructions of stakeholders, business domain experts, or technology experts, who may be outside the test team or outside the organization itself 4. Approach 1 is reactive: Exploratory testing is a common technique employed in reactive strategies, whereby the explorative testing is assigned to the experience-based testing category"
            },
            {
                tresc: "analytical, standard-compliant, consultative and reactive",
                correct: true,
                hint: "The possible mappings of points 1 to 4 can be justified as follows: 1. Approach 3 is analytical: Risk-based testing is an example of an analytical approach, where tests are designed and prioritized based on the level of risk 2. Approach 2 is standard-compliant: The control algorithms is checked against industry-specific standard of the energy saving regulation. 3. Approach 4 is consultative: This type of test strategy is driven primarily by the advice, guidance, or instructions of stakeholders, business domain experts, or technology experts, who may be outside the test team or outside the organization itself 4. Approach 1 is reactive: Exploratory testing is a common technique employed in reactive strategies, whereby the explorative testing is assigned to the experience-based testing category"
            },
            {
                tresc: "model-based, methodical, analytical and consultative",
                correct: false,
                hint: "The possible mappings of points 1 to 4 can be justified as follows: 1. Approach 3 is analytical: Risk-based testing is an example of an analytical approach, where tests are designed and prioritized based on the level of risk 2. Approach 2 is standard-compliant: The control algorithms is checked against industry-specific standard of the energy saving regulation. 3. Approach 4 is consultative: This type of test strategy is driven primarily by the advice, guidance, or instructions of stakeholders, business domain experts, or technology experts, who may be outside the test team or outside the organization itself 4. Approach 1 is reactive: Exploratory testing is a common technique employed in reactive strategies, whereby the explorative testing is assigned to the experience-based testing category"
            },
            {
                tresc: "regression-averse, consultative, reactive and methodical",
                correct: false,
                hint: "The possible mappings of points 1 to 4 can be justified as follows: 1. Approach 3 is analytical: Risk-based testing is an example of an analytical approach, where tests are designed and prioritized based on the level of risk 2. Approach 2 is standard-compliant: The control algorithms is checked against industry-specific standard of the energy saving regulation. 3. Approach 4 is consultative: This type of test strategy is driven primarily by the advice, guidance, or instructions of stakeholders, business domain experts, or technology experts, who may be outside the test team or outside the organization itself 4. Approach 1 is reactive: Exploratory testing is a common technique employed in reactive strategies, whereby the explorative testing is assigned to the experience-based testing category"
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 36,
        tresc: "Which one of the following is the characteristic of a metrics-based approach for test estimation?",
        answers: [
            {
                tresc: "Budget which was used by a previous similar test project",
                correct: true,
                hint: "Is correct. The metrics-based approach: estimating the testing effort based on metrics of former similar projects or based on typical values"
            },
            {
                tresc: "Overall experience collected in interviews with test managers",
                correct: false,
                hint: "Is not correct. This is expert-based approach: estimating the tasks based on estimates made by the owners of the tasks or by experts"
            },
            {
                tresc: "Estimation of effort for test automation agreed in the test team",
                correct: false,
                hint: "Is not correct. This is expert-based approach: estimating the tasks based on estimates made by the responsible team of the tasks or by experts"
            },
            {
                tresc: "Average of calculations collected from business experts",
                correct: false,
                hint: "Is not correct. This is expert-based approach: estimating the tasks based on estimates made by the owners of the tasks or by experts"
            },
        ],
        right: 0,
        lang: "eng"
    },
    {
        id: 38,
        tresc: "You are testing a new version of software for a coffee machine. The machine can prepare different types of coffee based on four categories. i.e., coffee size, sugar, milk, and syrup. The criteria are as follows: <br/><br/>- Coffee size (small, medium, large) <br/>- Sugar (none, 1 unit, 2 units, 3 units, 4 units) <br/>- Milk (yes or no) <br/>- Coffee flavor syrup (no syrup, caramel, hazelnut, vanilla) <br/><br/>Now you are writing a defect report with the following information: <br/><br/>- Title: Low coffee temperature. <br/>- Short summary: When you select coffee with milk, the time for preparing coffee is too long and the temperature of the beverage is too low (less than 40 °C). <br/>- Expected result: The temperature of coffee should be standard (about 75 °C). <br/>- Degree of risk: Medium <br/>- Priority: Normal <br/><br/>What valuable information was omitted in the above defect report?",
        answers: [
            {
                tresc: "The actual test results",
                correct: false,
                hint: "Is not correct. The test result is given in the short summary"
            },
            {
                tresc: "Identification of the tested software version",
                correct: true,
                hint: "Is correct. When testing different versions of software, identifying information is necessary"
            },
            {
                tresc: "Status of the defect",
                correct: false,
                hint: "Is not correct. You are just writing the defect report; hence, the status is automatically open"
            },
            {
                tresc: "Ideas for improving the test case",
                correct: false,
                hint: "Is not correct. This information is useful for the tester but does not need to be included in the defect report"
            },
        ],
        right: 1,
        lang: "eng"
    },
    {
        id: 39,
        tresc: "Which one of the following is MOST likely to be a benefit of test execution tools?",
        answers: [
            {
                tresc: "It is easy to create regression tests",
                correct: false,
                hint: " Is not correct. The benefits are not when creating regressions tests, more in executing them"
            },
            {
                tresc: "It is easy to maintain version control of test assets",
                correct: false,
                hint: "Is not correct. This is done by configuration management tools"
            },
            {
                tresc: "It is easy to design tests for security testing",
                correct: false,
                hint: "Is not correct. This needs specialized tools"
            },
            {
                tresc: "It is easy to run regression tests",
                correct: true,
                hint: "Is correct. Reduction in repetitive manual work (e.g. running regression tests, environment set up/tear down tasks, re-entering the same test data, and checking against coding standards), thus saving time"
            },
        ],
        right: 3,
        lang: "eng"
    },
    {
        id: 40,
        tresc: "Which one of the following test tools is mostly suitable for developers rather than testers?",
        answers: [
            {
                tresc: "Requirement management tools",
                correct: false,
                hint: "Is not correct. Requirement management tools are acc. CTFL Syllabus 2018, section 6.1.1 not particularly suitable for developers (no suffix “E”) not better suited for developers than for testers. "
            },
            {
                tresc: "Configuration management tools",
                correct: false,
                hint: "Is not correct. Configuration management tools are acc. CTFL Syllabus 2018, section 6.1.1 not particularly suitable for developers (no suffix “E”)"
            },
            {
                tresc: "Defect management tools",
                correct: true,
                hint: "Is correct. Static analysis tools are especially suitable for developers according to CTFL Syllabus 2018, section 6.11"
            },
            {
                tresc: "Performance testing tools",
                correct: false,
                hint: "Is not correct. Performance testing tools are not better suited for developers according to CTFL Syllabus 2018; Section 6.1.1 (no suffix 'E'))"
            },
        ],
        right: 2,
        lang: "eng"
    },
{
    id: 41,
    tresc: "Which of the following provides the definition of the term test case?",
    answers: [
        {
            tresc: "Subset of the value domain of a variable within a component or system in which all values are expected to be treated the same based on the specification",
            correct: false,
            hint: "Is not correct. Based on definition of equivalence partition"
        },
        {
            tresc: "A set of preconditions, inputs, actions, expected results and postconditions, developed based on test conditions",
            correct: true,
            hint: "Is correct. Based on definition from Glossary"
        },
        {
            tresc: "Work products produced during the test process for use in planning, designing, executing, evaluating and reporting on testing",
            correct: false,
            hint: "Is not correct. Based on Glossary definition of testware"
        },
        {
            tresc: "A source to determine an expected result to compare with the actual result of the system under test",
            correct: false,
            hint: "Is not correct. Based on definition of test oracle"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 42,
    tresc: "Which of the following is a typical objective of testing?",
    answers: [
        {
            tresc: "To find defects and failures",
            correct: true,
            hint: "Is correct. One of the major objectives of testing"
        },
        {
            tresc: "To validate the project plan works as required",
            correct: false,
            hint: "Is not correct. Validation of the project plan would be a project management activity"
        },
        {
            tresc: "Ensuring of complete testing",
            correct: false,
            hint: "Is not correct. Contradiction to principle #2; complete/exhaustive testing is not possible"
        },
        {
            tresc: "Comparing actual results with expected results",
            correct: false,
            hint: "Is not correct. “Comparing actual results with expected results” is a test performing activity, but not a test objective"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 43,
    tresc: "Which of the following is an example of a failure in a car cruise control system?",
    answers: [
        {
            tresc: "The developer of the system forgot to rename variables after a cut-and-paste operation",
            correct: false,
            hint: "Is not correct. This is an example of a mistake made by the developer"
        },
        {
            tresc: "Unnecessary code that sounds an alarm when reversing was included in the system",
            correct: false,
            hint: "Is not correct. This is an example of a defect (something wrong in the code that may cause a failure)"
        },
        {
            tresc: "The system stops maintaining a set speed when the radio volume is increased or decreased",
            correct: true,
            hint: "Is correct. This is a deviation from the expected functionality - a cruise control system should not be affected by the radio"
        },
        {
            tresc: "The design specification for the system wrongly states speeds",
            correct: false,
            hint: "Is not correct. This is an example of a defect (something wrong in a specification that may cause a failure if subsequently implemented)"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 44,
    tresc: "Which of the following is a defect rather than a root cause in a fitness tracker?",
    answers: [
        {
            tresc: "Because the author of the requirements was unfamiliar with the domain of fitness training, he therefore wrongly assumed that users wanted heartbeat in beats per hour",
            correct: false,
            hint: "Is not correct. The lack of familiarity of the requirements author with the fitness domain is a root cause"
        },
        {
            tresc: "The tester of the smartphone interface had not been trained in state transition testing, so missed a major defect",
            correct: false,
            hint: "Is not correct. The lack of training of the tester in state transition testing was one of the root causes of the defect (the developer presumably created the defect, as well)"
        },
        {
            tresc: "An incorrect configuration variable implemented for the GPS function could cause location problems during daylight saving times",
            correct: true,
            hint: "Is correct. The incorrect configuration data represents faulty software in the fitness tracker (a defect), that may cause failures"
        },
        {
            tresc: "Because the designer had never worked on wearable devices before, she as designer of the user interface therefore misunderstood the effects of reflected sunlight",
            correct: false,
            hint: "Is not correct. The lack of experience in designing user interfaces for wearable devices is a typical example of a root cause of a defect"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 45,
    tresc: "As a result of risk analysis, more testing is being directed to those areas of the system under test where initial testing found more defects than average.<br/><br/>Which of the following testing principles is being applied?",
    answers: [
        {
            tresc: "Beware of the pesticide paradox",
            correct: false,
            hint: "Is not correct. ‘Beware of the pesticide paradox’ is concerned with rerunning the same tests and their fault-finding effectiveness decreasing"
        },
        {
            tresc: "Testing is context dependent",
            correct: false,
            hint: "Is not correct. This testing principle is concerned with performing testing differently based on the context (e.g. games vs safety-critical)"
        },
        {
            tresc: "Absence-of-errors is a fallacy",
            correct: false,
            hint: "Is not correct. This testing principle is concerned with the difference between a tested and fixed system and a validated system. No ‘errors’ does not mean the system is fit for use"
        },
        {
            tresc: "Defects cluster together",
            correct: true,
            hint: "Is correct. If clusters of defects are identified (areas of the system containing more defects than average), then testing effort should be focused on these areas"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 46,
    tresc: "Given the following test activities and tasks: <br/><br/>A. Test design <br/>B. Test implementation <br/>C. Test execution <br/>D. Test completion <br/><br/>1. Entering change requests for open defect reports <br/>2. Identifying test data to support the test cases <br/>3. Prioritizing test procedures and creating test data <br/>4. Analyzing discrepancies to determine their cause <br/><br/>Which of the following BEST matches the activities with the tasks?",
    answers: [
        {
            tresc: "A-2, B-3, C-4, D-1",
            correct: true,
            hint: "The correct pairing of test activities and tasks is: <br/>A. Test design – (2) Identifying test data to support the test cases <br/>B. Test implementation – (3) Prioritizing test procedures and creating test data <br/>C. Test execution – (4) Analyzing discrepancies to determine their cause <br/>D. Test completion – (1) Entering change requests for open defect reports <br/><br/>Thus, option a) is correct."
        },
        {
            tresc: "A-2, B-1, C-3, D-4",
            correct: false,
            hint: "The correct pairing of test activities and tasks is: <br/>A. Test design – (2) Identifying test data to support the test cases <br/>B. Test implementation – (3) Prioritizing test procedures and creating test data <br/>C. Test execution – (4) Analyzing discrepancies to determine their cause <br/>D. Test completion – (1) Entering change requests for open defect reports <br/><br/>Thus, option a) is correct."
        },
        {
            tresc: "A-3, B-2, C-4, D-1",
            correct: false,
            hint: "The correct pairing of test activities and tasks is: <br/>A. Test design – (2) Identifying test data to support the test cases <br/>B. Test implementation – (3) Prioritizing test procedures and creating test data <br/>C. Test execution – (4) Analyzing discrepancies to determine their cause <br/>D. Test completion – (1) Entering change requests for open defect reports <br/><br/>Thus, option a) is correct."
        },
        {
            tresc: "A-3, B-2, C-1, D-4",
            correct: false,
            hint: "The correct pairing of test activities and tasks is: <br/>A. Test design – (2) Identifying test data to support the test cases <br/>B. Test implementation – (3) Prioritizing test procedures and creating test data <br/>C. Test execution – (4) Analyzing discrepancies to determine their cause <br/>D. Test completion – (1) Entering change requests for open defect reports <br/><br/>Thus, option a) is correct."
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 47,
    tresc: "Which of the following BEST describes how value is added by maintaining traceability between the test basis and test artifacts?",
    answers: [
        {
            tresc: "Maintenance testing can be fully automated based on changes to the initial requirements",
            correct: false,
            hint: "Is not correct. Traceability will allow existing test cases to be linked with updated and deleted requirements (although there is no support for new requirements), but it will not help with the automation of maintenance testing"
        },
        {
            tresc: "It is possible to determine if a new test case has increased coverage of the requirements",
            correct: true,
            hint: "Is correct. If all test cases are linked with requirements, then whenever a new test case (with traceability) is added, it is possible to see if any previously uncovered requirements are covered by the new test case"
        },
        {
            tresc: "Test managers can identify which testers found the highest severity defects",
            correct: false,
            hint: "Is not correct. Traceability between the test basis and test artifacts will not provide information on which testers found high-severity defects, and, even if this information could be determined, it would be of limited value"
        },
        {
            tresc: "Areas that may be impacted by side-effects of a change can be targeted by confirmation testing",
            correct: false,
            hint: "Is not correct. Traceability can help with identifying test cases affected by changes, however areas impacted by side-effects would be the focus of regression testing"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 48,
    tresc: "Which of the following qualities is MORE likely to be found in a tester’s mindset rather than in a developer’s?",
    answers: [
        {
            tresc: "A tester´s mindset tends to grow and mature as the tester gains experience",
            correct: false,
            hint: "Is not correct. Both developers and testers gain from experience"
        },
        {
            tresc: "Ability to see what might go wrong",
            correct: true,
            hint: "Is correct. Developers are often more interested in designing and building solutions than in contemplating what might be wrong with those solutions"
        },
        {
            tresc: "Good communication with team members",
            correct: false,
            hint: "Is not correct. Both developers and testers should be able to communicate well"
        },
        {
            tresc: "Attention to detail",
            correct: false,
            hint: "Is not correct. Both developers and testers need to pay attention to detail"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 49,
    tresc: "Given the following statements about the relationships between software development activities and test activities in the software development lifecycle: <br/><br/>1. Each development activity should have a corresponding testing activity <br/>2. Reviewing should start as soon as final versions of documents become available <br/>3. The design and implementation of tests should start during the corresponding development activity <br/>4. Testing activities should start in the early stages of the software development lifecycle <br/><br/>Which of the following CORRECTLY shows which are true and false?",
    answers: [
        {
            tresc: "True – 1, 2; False – 3, 4",
            correct: false,
            hint: "Considering each statement: <br/>1. Each development activity should have a corresponding testing activity. TRUE <br/>2. Reviewing should start as soon as final versions of documents become available. FALSE – it should start as soon as drafts are available <br/>3. The design and implementation of tests should start during the corresponding development activity. FALSE – the analysis and design of tests should start during the corresponding development activity, not the implementation <br/>4. Testing activities should start in the early stages of the software development lifecycle. TRUE <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "True – 2, 3; False – 1, 4",
            correct: false,
            hint: "Considering each statement: <br/>1. Each development activity should have a corresponding testing activity. TRUE <br/>2. Reviewing should start as soon as final versions of documents become available. FALSE – it should start as soon as drafts are available <br/>3. The design and implementation of tests should start during the corresponding development activity. FALSE – the analysis and design of tests should start during the corresponding development activity, not the implementation <br/>4. Testing activities should start in the early stages of the software development lifecycle. TRUE <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "True – 1, 2, 4; False – 3",
            correct: false,
            hint: "Considering each statement: <br/>1. Each development activity should have a corresponding testing activity. TRUE <br/>2. Reviewing should start as soon as final versions of documents become available. FALSE – it should start as soon as drafts are available <br/>3. The design and implementation of tests should start during the corresponding development activity. FALSE – the analysis and design of tests should start during the corresponding development activity, not the implementation <br/>4. Testing activities should start in the early stages of the software development lifecycle. TRUE <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "True – 1, 4; False – 2, 3",
            correct: true,
            hint: "Considering each statement: <br/>1. Each development activity should have a corresponding testing activity. TRUE <br/>2. Reviewing should start as soon as final versions of documents become available. FALSE – it should start as soon as drafts are available <br/>3. The design and implementation of tests should start during the corresponding development activity. FALSE – the analysis and design of tests should start during the corresponding development activity, not the implementation <br/>4. Testing activities should start in the early stages of the software development lifecycle. TRUE <br/><br/>Thus, option d) is correct."
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 50,
    tresc: "Given that the testing being performed has the following attributes: <br/><br/>• Based on interface specifications <br/>• Focused on finding failures in communication <br/>• The test approach uses both functional and structural test types <br/><br/>Which of the following test levels is MOST likely being performed?",
    answers: [
        {
            tresc: "Integration testing",
            correct: true,
            hint: "Considering the scenario: <br/>1. ‘testing is based on interface specifications’ – the test basis for integration testing includes interface specifications (along with communication protocol specification), while these are not included for any of the other test levels <br/>2. ‘testing is focused on finding failures in communication’ - failures in the communication between tested components is included as a typical failure for integration testing, but failures in communication is not included for any of the other test levels <br/>3. ‘the test approach uses both functional and structural test types’ - functional and structural test types are both included as possible approaches for integration testing, and would also be appropriate for any of the other test levels, although they are only otherwise explicitly mentioned in the syllabus for system testing <br/><br/>Thus, option a) is correct"
        },
        {
            tresc: "Acceptance testing",
            correct: false,
            hint: "Considering the scenario: <br/>1. ‘testing is based on interface specifications’ – the test basis for integration testing includes interface specifications (along with communication protocol specification), while these are not included for any of the other test levels <br/>2. ‘testing is focused on finding failures in communication’ - failures in the communication between tested components is included as a typical failure for integration testing, but failures in communication is not included for any of the other test levels <br/>3. ‘the test approach uses both functional and structural test types’ - functional and structural test types are both included as possible approaches for integration testing, and would also be appropriate for any of the other test levels, although they are only otherwise explicitly mentioned in the syllabus for system testing <br/><br/>Thus, option a) is correct"
        },
        {
            tresc: "System testing",
            correct: false,
            hint: "Considering the scenario: <br/>1. ‘testing is based on interface specifications’ – the test basis for integration testing includes interface specifications (along with communication protocol specification), while these are not included for any of the other test levels <br/>2. ‘testing is focused on finding failures in communication’ - failures in the communication between tested components is included as a typical failure for integration testing, but failures in communication is not included for any of the other test levels <br/>3. ‘the test approach uses both functional and structural test types’ - functional and structural test types are both included as possible approaches for integration testing, and would also be appropriate for any of the other test levels, although they are only otherwise explicitly mentioned in the syllabus for system testing <br/><br/>Thus, option a) is correct"
        },
        {
            tresc: "Component testing",
            correct: false,
            hint: "Considering the scenario: <br/>1. ‘testing is based on interface specifications’ – the test basis for integration testing includes interface specifications (along with communication protocol specification), while these are not included for any of the other test levels <br/>2. ‘testing is focused on finding failures in communication’ - failures in the communication between tested components is included as a typical failure for integration testing, but failures in communication is not included for any of the other test levels <br/>3. ‘the test approach uses both functional and structural test types’ - functional and structural test types are both included as possible approaches for integration testing, and would also be appropriate for any of the other test levels, although they are only otherwise explicitly mentioned in the syllabus for system testing <br/><br/>Thus, option a) is correct"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 51,
    tresc: "Which of the following statements about test types and test levels is CORRECT?",
    answers: [
        {
            tresc: "Functional and non-functional testing can be performed at system and acceptance test levels, while white-box testing is restricted to component and integration testing",
            correct: false,
            hint: "Is not correct. It is possible to perform any of the test types (functional, non-functional, white-box) at any test level - so, although it is correct that functional and non-functional testing can be performed at system and acceptance test levels, it is incorrect to state that white-box testing is restricted to component and integration testing"
        },
        {
            tresc: "Functional testing can be performed at any test level, while white-box testing is restricted to component testing",
            correct: false,
            hint: "Is not correct. It is possible to perform any of the test types (functional, non-functional, white-box) at any test level - so, it is incorrect to state that white-box testing is restricted to component testing"
        },
        {
            tresc: "It is possible to perform functional, non-functional and white-box testing at any test level",
            correct: true,
            hint: "Is correct. It is possible to perform any of the test types (functional, nonfunctional, white-box) at any test level"
        },
        {
            tresc: "Functional and non-functional testing can be performed at any test level, while white-box testing is restricted to component and integration testing",
            correct: false,
            hint: "Is not correct. It is possible to perform any of the test types (functional, non-functional, white-box) at any test level - so, it is incorrect to state that white-box testing is restricted to component testing and integration testing"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 52,
    tresc: "Which of the following statements BEST compares the purposes of confirmation testing and regression testing?",
    answers: [
        {
            tresc: "The purpose of regression testing is to ensure that all previously run tests still work correctly, while the purpose of confirmation testing is to ensure that any fixes made to one part of the system have not adversely affected other parts",
            correct: false,
            hint: "Is not correct. Although the description of regression testing is largely correct, the description of confirmation testing (which should be testing a defect has been fixed) is not correct"
        },
        {
            tresc: "The purpose of confirmation testing is to check that a previously found defect has been fixed, while the purpose of regression testing is to ensure that no other parts of the system have been adversely affected by the fix",
            correct: true,
            hint: "Is correct. The descriptions of both confirmation and regression testing match the intent of those in the syllabus"
        },
        {
            tresc: "The purpose of regression testing is to ensure that any changes to one part of the system have not caused another part to fail, while the purpose of confirmation testing is to check that all previously run tests still provide the same results as before",
            correct: false,
            hint: "Is not correct. Although the description of regression testing is largely correct, the description of confirmation testing (re-running all previously run tests to get the same results) is not correct, as the purpose of confirmation testing is to check that tests that previously failed now pass (the fix worked)"
        },
        {
            tresc: "The purpose of confirmation testing is to confirm that changes to the system were made successfully, while the purpose of regression testing is to run tests that previously failed to ensure that they now work correctly",
            correct: false,
            hint: "Is not correct. Although the description of confirmation testing is largely correct, the description of regression testing (re-running tests that previously failed) is not correct (this is a more detailed description of confirmation testing)"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 53,
    tresc: "Which of the following statements CORRECTLY describes a role of impact analysis in Maintenance Testing?",
    answers: [
        {
            tresc: "Impact analysis is used when deciding if a fix to a maintained system is worthwhile",
            correct: true,
            hint: "Is correct. Impact analysis may be used to identify those areas of the system that will be affected by the fix, and so the extent of the impact (e.g. necessary regression testing) can be used when deciding if the change is worthwhile"
        },
        {
            tresc: "Impact analysis is used to identify how data should be migrated into the maintained system",
            correct: false,
            hint: "Is not correct. Although testing migrated data is part of maintenance testing (see conversion testing), impact analysis does not identify how this is done"
        },
        {
            tresc: "Impact analysis is used to decide which hot fixes are of most value to the user",
            correct: false,
            hint: "Is not correct. Impact analysis shows which parts of a system are affected by a change, so it can show the difference between different hot fixes in terms of the impact on the system, however it does not give any indication of the value of the changes to the user"
        },
        {
            tresc: "Impact analysis is used to determine the effectiveness of new maintenance test cases",
            correct: false,
            hint: "Is not correct. Impact analysis shows which parts of a system are affected by a change; it cannot provide an indication of the effectiveness of test cases"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 54,
    tresc: "Which of the following statements CORRECTLY reflects the value of static testing?",
    answers: [
        {
            tresc: "By introducing reviews, we have found that both the quality of specifications and the time required for development and testing have increased",
            correct: false,
            hint: "Is not correct. Reviews should increase the quality of specifications, however the time required for development and testing should decrease"
        },
        {
            tresc: "Using static testing means we have better control and cheaper defect management due to the ease of detecting defects later in the lifecycle",
            correct: false,
            hint: "Is not correct. Detecting defects is generally easier earlier in the lifecycle"
        },
        {
            tresc: "Now that we require the use of static analysis, missed requirements have decreased and communication between testers and developers has improved",
            correct: false,
            hint: "Is not correct. Reviews will result in fewer missed requirements and better communication between testers and developers, however this is not true for static analysis"
        },
        {
            tresc: "Since we started using static analysis, we find coding defects that might have not been found by performing only dynamic testing",
            correct: true,
            hint: "Is correct. This is a benefit of static analysis"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 55,
    tresc: "Which of the following statements on the use of checklists in a formal review is CORRECT?",
    answers: [
        {
            tresc: "As part of the review planning, the reviewers create the checklists needed for the review",
            correct: false,
            hint: "Is not correct. During planning it is decided whether checklists are used. The preparation of the checklists is not part of the planning. In addition, the reviewers are neither involved in the planning, nor responsible for the creation of the checklists"
        },
        {
            tresc: "As part of the issue communication, the reviewers fill in the checklists provided for the review",
            correct: false,
            hint: "Is not correct. During issue communication, any potential defects that have been identified in the individual review are communicated. The completion of checklists by the reviewers already takes place, if at all, during individual review"
        },
        {
            tresc: "As part of the review meeting, the reviewers create defect reports based on the checklists provided for the review",
            correct: false,
            hint: "Is not correct. During review session, the reviewers communicate any potential defects of the work product that they did identify during the individual review. Defect reports are only created during the fixing and reporting activity"
        },
        {
            tresc: "As part of the review initiation, the reviewers receive the checklists needed for the review",
            correct: true,
            hint: "Is correct. Initiating the review (“Kick-off”) involves distributing the work product and other materials, like checklists"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 56,
    tresc: "Which of the following CORRECTLY matches the roles and responsibilities in a formal review?",
    answers: [
        {
            tresc: "Manager – Decides on the execution of reviews",
            correct: true,
            hint: "Is correct. The management decides about performing the review"
        },
        {
            tresc: "Review Leader - Ensures effective running of review meetings",
            correct: false,
            hint: "Is not correct. The moderator, not the review leader should ensure the effective running of review meetings"
        },
        {
            tresc: "Scribe – Fixes defects in the work product under review",
            correct: false,
            hint: "Is not correct. The author fixes the work product under review"
        },
        {
            tresc: "Moderator – Monitors ongoing cost-effectiveness",
            correct: false,
            hint: "Is not correct. The manager monitors ongoing cost-effectiveness"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 57,
    tresc: "The reviews being used in your organization have the following attributes: <br/><br/>• There is a role of a scribe <br/>• The purpose is to detect potential defects <br/>• The review meeting is led by the author <br/>• Reviewers find potential defects by individual review <br/>• A review report is produced <br/><br/>Which of the following review types is MOST likely being used?",
    answers: [
        {
            tresc: "Informal Review",
            correct: false,
            hint: "Considering the attributes: <br/>• There is a role of a scribe – specified for walkthroughs, technical reviews and inspections; thus, the reviews being performed cannot be informal reviews <br/>• The purpose is to detect potential defects – the purpose of detecting potential defects is specified for all types of review. <br/>• The review meeting is led by the author – this is not allowed for inspections and is typically not the author for technical reviews, but is part of walkthroughs, and allowed for informal reviews <br/>• Reviewers find potential issues by individual review - all types of reviews can include individual review (even informal reviews) <br/>• A review report is produced - all types of reviews can produce a review report, although it would be less likely for an informal review <br/><br/>Thus, option b) is correct"
        },
        {
            tresc: "Walkthrough",
            correct: true,
            hint: "Considering the attributes: <br/>• There is a role of a scribe – specified for walkthroughs, technical reviews and inspections; thus, the reviews being performed cannot be informal reviews <br/>• The purpose is to detect potential defects – the purpose of detecting potential defects is specified for all types of review. <br/>• The review meeting is led by the author – this is not allowed for inspections and is typically not the author for technical reviews, but is part of walkthroughs, and allowed for informal reviews <br/>• Reviewers find potential issues by individual review - all types of reviews can include individual review (even informal reviews) <br/>• A review report is produced - all types of reviews can produce a review report, although it would be less likely for an informal review <br/><br/>Thus, option b) is correct"
        },
        {
            tresc: "Technical Review",
            correct: false,
            hint: "Considering the attributes: <br/>• There is a role of a scribe – specified for walkthroughs, technical reviews and inspections; thus, the reviews being performed cannot be informal reviews <br/>• The purpose is to detect potential defects – the purpose of detecting potential defects is specified for all types of review. <br/>• The review meeting is led by the author – this is not allowed for inspections and is typically not the author for technical reviews, but is part of walkthroughs, and allowed for informal reviews <br/>• Reviewers find potential issues by individual review - all types of reviews can include individual review (even informal reviews) <br/>• A review report is produced - all types of reviews can produce a review report, although it would be less likely for an informal review <br/><br/>Thus, option b) is correct"
        },
        {
            tresc: "Inspection",
            correct: false,
            hint: "Considering the attributes: <br/>• There is a role of a scribe – specified for walkthroughs, technical reviews and inspections; thus, the reviews being performed cannot be informal reviews <br/>• The purpose is to detect potential defects – the purpose of detecting potential defects is specified for all types of review. <br/>• The review meeting is led by the author – this is not allowed for inspections and is typically not the author for technical reviews, but is part of walkthroughs, and allowed for informal reviews <br/>• Reviewers find potential issues by individual review - all types of reviews can include individual review (even informal reviews) <br/>• A review report is produced - all types of reviews can produce a review report, although it would be less likely for an informal review <br/><br/>Thus, option b) is correct"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 58,
    tresc: "You have been asked to take part in a checklist-based review of the following excerpt from the requirements specification for a library system: <br/><br/>Librarians can: <br/>1. Register new borrowers <br/>2. Return books from borrowers <br/>3. Accept fines from borrowers <br/>4. Add new books to the system with their ISBN, author and title <br/>5. Remove books from the system <br/>6. Get system responses within 5 seconds <br/><br/>Borrowers can: <br/>7. Borrow a maximum of 3 books at one time <br/>8. View the history of books they have borrowed/reserved <br/>9. Be fined for failing to return a book within 3 weeks <br/>10. Get system responses within 3 seconds <br/>11. Borrow a book at no cost for a maximum of 4 weeks <br/>12. Reserve books (if they are on-loan) <br/><br/>All users (librarians and borrowers): <br/>13. Can search for books by ISBN, author, or title <br/>14. Can browse the system catalogue <br/>15. The system shall respond to user requests within 3 seconds <br/>16. The user interface shall be easy-to-use <br/><br/>You have been assigned the checklist entry that requires you to review the specification for inconsistencies between individual requirements (i.e. conflicts between requirements). <br/><br/>Which of the following CORRECTLY identifies inconsistencies between pairs of requirements?",
    answers: [
        {
            tresc: "6-10, 6-15, 7-12",
            correct: false,
            hint: "Considering the potential inconsistencies: <br/>• 6-10 – If librarians should get system responses within 5 seconds, it is NOT inconsistent for borrowers to get system responses within 3 seconds. <br/>• 6-15 - If librarians should get system responses within 5 seconds, it is inconsistent for all users to get system responses within 3 seconds. <br/>• 7-12 – If borrowers can borrow a maximum of 3 books at one time it is NOT inconsistent for them to also reserve books (if they are on-loan). <br/>• 9-11 – If a borrower can be fined for failing to return a book within 3 weeks it is inconsistent for them to also be allowed to borrow a book at no cost for a maximum of 4 weeks – as the length of valid loans are different. <br/><br/>Thus, of the potential inconsistencies, 6-15 and 9-11 are valid inconsistencies, and so option b) is correct"
        },
        {
            tresc: "6-15, 9-11",
            correct: true,
            hint: "Considering the potential inconsistencies: <br/>• 6-10 – If librarians should get system responses within 5 seconds, it is NOT inconsistent for borrowers to get system responses within 3 seconds. <br/>• 6-15 - If librarians should get system responses within 5 seconds, it is inconsistent for all users to get system responses within 3 seconds. <br/>• 7-12 – If borrowers can borrow a maximum of 3 books at one time it is NOT inconsistent for them to also reserve books (if they are on-loan). <br/>• 9-11 – If a borrower can be fined for failing to return a book within 3 weeks it is inconsistent for them to also be allowed to borrow a book at no cost for a maximum of 4 weeks – as the length of valid loans are different. <br/><br/>Thus, of the potential inconsistencies, 6-15 and 9-11 are valid inconsistencies, and so option b) is correct"
        },
        {
            tresc: "6-10, 6-15, 9-11",
            correct: false,
            hint: "Considering the potential inconsistencies: <br/>• 6-10 – If librarians should get system responses within 5 seconds, it is NOT inconsistent for borrowers to get system responses within 3 seconds. <br/>• 6-15 - If librarians should get system responses within 5 seconds, it is inconsistent for all users to get system responses within 3 seconds. <br/>• 7-12 – If borrowers can borrow a maximum of 3 books at one time it is NOT inconsistent for them to also reserve books (if they are on-loan). <br/>• 9-11 – If a borrower can be fined for failing to return a book within 3 weeks it is inconsistent for them to also be allowed to borrow a book at no cost for a maximum of 4 weeks – as the length of valid loans are different. <br/><br/>Thus, of the potential inconsistencies, 6-15 and 9-11 are valid inconsistencies, and so option b) is correct"
        },
        {
            tresc: "6-15, 7-12",
            correct: false,
            hint: "Considering the potential inconsistencies: <br/>• 6-10 – If librarians should get system responses within 5 seconds, it is NOT inconsistent for borrowers to get system responses within 3 seconds. <br/>• 6-15 - If librarians should get system responses within 5 seconds, it is inconsistent for all users to get system responses within 3 seconds. <br/>• 7-12 – If borrowers can borrow a maximum of 3 books at one time it is NOT inconsistent for them to also reserve books (if they are on-loan). <br/>• 9-11 – If a borrower can be fined for failing to return a book within 3 weeks it is inconsistent for them to also be allowed to borrow a book at no cost for a maximum of 4 weeks – as the length of valid loans are different. <br/><br/>Thus, of the potential inconsistencies, 6-15 and 9-11 are valid inconsistencies, and so option b) is correct"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 59,
    tresc: "Which of the following provides the BEST description of exploratory testing?",
    answers: [
        {
            tresc: "A testing practice in which an in-depth investigation of the background of the test object is used to identify potential weaknesses that are examined by test cases",
            correct: false,
            hint: "Is not correct. Exploratory testing is often carried out when timescales are short, so making in-depth investigations of the background of the test object is unlikely"
        },
        {
            tresc: "An approach to testing whereby the testers dynamically designs and execute tests based on their knowledge, exploration of the test item and the results of previous tests",
            correct: true,
            hint: "Is correct. Glossary definition"
        },
        {
            tresc: "An approach to test design in which test activities are planned as uninterrupted sessions of test analysis and design, often used in conjunction with checklist-based testing",
            correct: false,
            hint: "Is not correct. Based on the Glossary definition of session-based testing, but with test execution replaced by test analysis"
        },
        {
            tresc: "Testing based on the tester's experience, knowledge and intuition",
            correct: false,
            hint: "Is not correct. Glossary definition of experience-based testing"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 60,
    tresc: "Which of the following BEST matches the descriptions with the different categories of test techniques? <br/><br/>1. Coverage is measured based on a selected structure of the test object <br/>2. The processing within the test object is checked <br/>3. Tests are based on defects’ likelihood and their distribution <br/>4. Deviations from the requirements are checked <br/>5. User stories are used as the test basis <br/><br/>Using notation for the following 4 options: <br/>- Black - Black-box test techniques <br/>- White - White-box test techniques <br/>- Experience - Experience-based test techniques",
    answers: [
        {
            tresc: "Black – 4, 5 White – 1, 2; Experience – 3",
            correct: true,
            hint: "The correct pairing of descriptions with the different categories of test techniques is: <br/>• Black-box test techniques <br/>• Deviations from the requirements are checked (4) User stories are used as the test basis (5) <br/>• White-box test techniques <br/>• Coverage is measured based on a selected structure of the test object (1) The processing within the test object is checked (2) <br/>• Experience-based test techniques <br/><br/>Tests are based on defects’ likelihood and their distribution (3) <br/><br/>Thus, option a) is correct."
        },
        {
            tresc: "Black – 3 White – 1, 2; Experience – 4, 5",
            correct: false,
            hint: "The correct pairing of descriptions with the different categories of test techniques is: <br/>• Black-box test techniques <br/>• Deviations from the requirements are checked (4) User stories are used as the test basis (5) <br/>• White-box test techniques <br/>• Coverage is measured based on a selected structure of the test object (1) The processing within the test object is checked (2) <br/>• Experience-based test techniques <br/><br/>Tests are based on defects’ likelihood and their distribution (3) <br/><br/>Thus, option a) is correct."
        },
        {
            tresc: "Black – 4 White – 1, 2; Experience – 3, 5",
            correct: false,
            hint: "The correct pairing of descriptions with the different categories of test techniques is: <br/>• Black-box test techniques <br/>• Deviations from the requirements are checked (4) User stories are used as the test basis (5) <br/>• White-box test techniques <br/>• Coverage is measured based on a selected structure of the test object (1) The processing within the test object is checked (2) <br/>• Experience-based test techniques <br/><br/>Tests are based on defects’ likelihood and their distribution (3) <br/><br/>Thus, option a) is correct."
        },
        {
            tresc: "Black – 1, 3, 5 White – 2; Experience – 4",
            correct: false,
            hint: "The correct pairing of descriptions with the different categories of test techniques is: <br/>• Black-box test techniques <br/>• Deviations from the requirements are checked (4) User stories are used as the test basis (5) <br/>• White-box test techniques <br/>• Coverage is measured based on a selected structure of the test object (1) The processing within the test object is checked (2) <br/>• Experience-based test techniques <br/><br/>Tests are based on defects’ likelihood and their distribution (3) <br/><br/>Thus, option a) is correct."
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 61,
    tresc: "A fitness app measures the number of steps that are walked each day and provides feedback to encourage the user to keep fit. <br/><br/>The feedback for different numbers of steps should be: <br/><br/>Up to 1000 - Couch Potato! <br/>Above 1000, up to 2000 - Lazy Bones! <br/>Above 2000, up to 4000 - Getting There! <br/>Above 4000, up to 6000 - Not Bad! <br/>Above 6000 - Way to Go! <br/><br/>Which of the following sets of test inputs would achieve the BEST equivalence partition coverage?",
    answers: [
        {
            tresc: "0, 1000, 2000, 3000, 4000",
            correct: false,
            hint: "The following valid equivalence partitions can be identified: <br/><br/>1. Up to 1000 - Couch Potato! <br/>2. Above 1000, up to 2000 - Lazy Bones! <br/>3. Above 2000, up to 4000 - Getting There! <br/>4. Above 4000, up to 6000 - Not Bad! <br/>5. Above 6000 - Way to Go! <br/><br/>The sets of test inputs therefore cover the following partitions: <br/><br/>a) 0 (1), 1000 (1), 2000 (2), 3000 (3), 4000 (3) – 3 partitions (out of 5) <br/>b) 1000 (1), 2001 (3), 4000 (3), 4001 (4), 6000 (4) – 3 partitions (out of 5) <br/>c) 123 (1), 2345 (3), 3456 (3), 4567 (4), 5678 (4) – 3 partitions (out of 5) <br/>d) 666 (1), 999 (1), 2222 (3), 5555 (4), 6666 (5) – 4 partitions (out of 5) <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "1000, 2001, 4000, 4001, 6000",
            correct: false,
            hint: "The following valid equivalence partitions can be identified: <br/><br/>1. Up to 1000 - Couch Potato! <br/>2. Above 1000, up to 2000 - Lazy Bones! <br/>3. Above 2000, up to 4000 - Getting There! <br/>4. Above 4000, up to 6000 - Not Bad! <br/>5. Above 6000 - Way to Go! <br/><br/>The sets of test inputs therefore cover the following partitions: <br/><br/>a) 0 (1), 1000 (1), 2000 (2), 3000 (3), 4000 (3) – 3 partitions (out of 5) <br/>b) 1000 (1), 2001 (3), 4000 (3), 4001 (4), 6000 (4) – 3 partitions (out of 5) <br/>c) 123 (1), 2345 (3), 3456 (3), 4567 (4), 5678 (4) – 3 partitions (out of 5) <br/>d) 666 (1), 999 (1), 2222 (3), 5555 (4), 6666 (5) – 4 partitions (out of 5) <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "123, 2345, 3456, 4567, 5678",
            correct: false,
            hint: "The following valid equivalence partitions can be identified: <br/><br/>1. Up to 1000 - Couch Potato! <br/>2. Above 1000, up to 2000 - Lazy Bones! <br/>3. Above 2000, up to 4000 - Getting There! <br/>4. Above 4000, up to 6000 - Not Bad! <br/>5. Above 6000 - Way to Go! <br/><br/>The sets of test inputs therefore cover the following partitions: <br/><br/>a) 0 (1), 1000 (1), 2000 (2), 3000 (3), 4000 (3) – 3 partitions (out of 5) <br/>b) 1000 (1), 2001 (3), 4000 (3), 4001 (4), 6000 (4) – 3 partitions (out of 5) <br/>c) 123 (1), 2345 (3), 3456 (3), 4567 (4), 5678 (4) – 3 partitions (out of 5) <br/>d) 666 (1), 999 (1), 2222 (3), 5555 (4), 6666 (5) – 4 partitions (out of 5) <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "666, 999, 2222, 5555, 6666",
            correct: true,
            hint: "The following valid equivalence partitions can be identified: <br/><br/>1. Up to 1000 - Couch Potato! <br/>2. Above 1000, up to 2000 - Lazy Bones! <br/>3. Above 2000, up to 4000 - Getting There! <br/>4. Above 4000, up to 6000 - Not Bad! <br/>5. Above 6000 - Way to Go! <br/><br/>The sets of test inputs therefore cover the following partitions: <br/><br/>a) 0 (1), 1000 (1), 2000 (2), 3000 (3), 4000 (3) – 3 partitions (out of 5) <br/>b) 1000 (1), 2001 (3), 4000 (3), 4001 (4), 6000 (4) – 3 partitions (out of 5) <br/>c) 123 (1), 2345 (3), 3456 (3), 4567 (4), 5678 (4) – 3 partitions (out of 5) <br/>d) 666 (1), 999 (1), 2222 (3), 5555 (4), 6666 (5) – 4 partitions (out of 5) <br/><br/>Thus, option d) is correct."
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 63,
    tresc: "A smart home app measures the average temperature in the house over the previous week and provides feedback to the occupants on their environmental friendliness based on this temperature. <br/><br/>The feedback for different average temperature ranges (to the nearest °C) should be: <br/><br/>Up to 10°C - Icy Cool! <br/>11°C to 15°C - Chilled Out! <br/>16°C to 19°C - Cool Man! <br/>20°C to 22°C - Too Warm! <br/>Above 22°C - Hot & Sweaty! <br/><br/>Using BVA (only Min- and Max values), which of the following sets of test inputs provides the highest level of boundary coverage?",
    answers: [
        {
            tresc: "0°C, 11°C, 20°C, 22°C, 23°C",
            correct: false,
            hint: "For the input equivalence partitions given, the above used boundary value technique yields the following 8 coverage items: <br/>10°C, 11°C, 15°C, 16°C, 19°C, 20°C, 22°C, 23°C. <br/><br/>Hence, the options have the following boundary value coverage: <br/>a) 4 out of 8 (11, 20 ,22 and 23). <br/>b) 3 out of 8 (15, 19 and 23). <br/>c) 5 out of 8 (10, 16, 19, 22 and 23). <br/>d) 3 out of 8 (15, 19 and 22) <br/><br/>Thus, option c) is correct."
        },
        {
            tresc: "9°C, 15°C, 19°C, 23°C, 100°C",
            correct: false,
            hint: "For the input equivalence partitions given, the above used boundary value technique yields the following 8 coverage items: <br/>10°C, 11°C, 15°C, 16°C, 19°C, 20°C, 22°C, 23°C. <br/><br/>Hence, the options have the following boundary value coverage: <br/>a) 4 out of 8 (11, 20 ,22 and 23). <br/>b) 3 out of 8 (15, 19 and 23). <br/>c) 5 out of 8 (10, 16, 19, 22 and 23). <br/>d) 3 out of 8 (15, 19 and 22) <br/><br/>Thus, option c) is correct."
        },
        {
            tresc: "10°C, 16°C, 19°C, 22°C, 23°C",
            correct: true,
            hint: "For the input equivalence partitions given, the above used boundary value technique yields the following 8 coverage items: <br/>10°C, 11°C, 15°C, 16°C, 19°C, 20°C, 22°C, 23°C. <br/><br/>Hence, the options have the following boundary value coverage: <br/>a) 4 out of 8 (11, 20 ,22 and 23). <br/>b) 3 out of 8 (15, 19 and 23). <br/>c) 5 out of 8 (10, 16, 19, 22 and 23). <br/>d) 3 out of 8 (15, 19 and 22) <br/><br/>Thus, option c) is correct."
        },
        {
            tresc: "14°C, 15°C, 18°C, 19°C, 21°C, 22°C",
            correct: false,
            hint: "For the input equivalence partitions given, the above used boundary value technique yields the following 8 coverage items: <br/>10°C, 11°C, 15°C, 16°C, 19°C, 20°C, 22°C, 23°C. <br/><br/>Hence, the options have the following boundary value coverage: <br/>a) 4 out of 8 (11, 20 ,22 and 23). <br/>b) 3 out of 8 (15, 19 and 23). <br/>c) 5 out of 8 (10, 16, 19, 22 and 23). <br/>d) 3 out of 8 (15, 19 and 22) <br/><br/>Thus, option c) is correct."
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 66,
    tresc: "Which of the following statements BEST describes how test cases are derived from a use case?",
    answers: [
        {
            tresc: "Test cases are created to exercise defined basic, exceptional and error behaviors performed by the system under test in collaboration with actors",
            correct: true,
            hint: "Is correct. This explains that each use case specifies some behavior that a subject can perform in collaboration with one or more actors. It also (later) explains that tests are designed to exercise the defined behaviors (basic, exceptional and errors)"
        },
        {
            tresc: "Test cases are derived by identifying the components included in the use case and creating integration tests that exercise the interactions of these components",
            correct: false,
            hint: "Is not correct. Use cases normally specify requirements, and so do not ‘include’ the components that will implement them"
        },
        {
            tresc: "Test cases are generated by analyzing the interactions of the actors with the system to ensure the user interfaces are easy to use",
            correct: false,
            hint: "Is not correct. Tests based on use cases do exercise interactions between the actor and the system, but they are focused on the functionality and do not consider the ease of use of user interfaces"
        },
        {
            tresc: "Test cases are derived to exercise each of the decision points in the business process flows of the use case, to achieve 100% decision coverage of these flows",
            correct: false,
            hint: "Is not correct. Tests do cover the use case paths through the use case, but there is no concept of decision coverage of these paths, and certainly not of business process flows"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 67,
    tresc: "Which of the following descriptions of statement coverage is CORRECT?",
    answers: [
        {
            tresc: "Statement coverage is a measure of the number of lines of source code exercised by tests",
            correct: false,
            hint: "Is not correct. Statement coverage is a measure of the proportion of executable statements exercised by tests. The number of executable statements is often close to the number of lines of code minus the comments, but this option only talks about the number of lines of code exercised and not the proportion exercised"
        },
        {
            tresc: "Statement coverage is a measure of the proportion of executable statements in the source code exercised by tests",
            correct: true,
            hint: "Is correct. Statement coverage is a measure of the proportion of executable statements exercised by tests (normally presented as a percentage)"
        },
        {
            tresc: "Statement coverage is a measure of the percentage of lines of source code (without comments) exercised by tests",
            correct: false,
            hint: "Is not correct. Statement coverage is a measure of the percentage of executable statements exercised by tests, however many of the lines of source code are not executable (e.g. comments)"
        },
        {
            tresc: "Statement coverage is a measure of the number of executable statements in the source code exercised by tests",
            correct: false,
            hint: "Is not correct. Statement coverage is a measure of the proportion of executable statements exercised by tests. This option only talks about the number of executable statements exercised and not the proportion (or percentage) exercised"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 68,
    tresc: "Which of the following descriptions of decision coverage is CORRECT?",
    answers: [
        {
            tresc: "Decision coverage is a measure of the percentage of possible paths through the source code exercised by tests",
            correct: false,
            hint: "Is not correct. A path through source code is one potential route through the code from the entry point to the exit point that could exercise a range of decision outcomes. Two different paths may exercise all but one of the same decision outcomes, and by just changing a single decision outcome a new path is followed. Test cases that would achieve decision coverage are typically a tiny subset of the test cases that would achieve path coverage. In practice, most nontrivial programs (and all programs with unconstrained loops, such as ‘while’ loops) have a potentially infinite number of possible paths through them and so measuring the percentage covered is practically infeasible"
        },
        {
            tresc: "Decision coverage is a measure of the percentage of business flows through the component exercised by tests",
            correct: false,
            hint: "Is not correct. Coverage of business flows can be a focus of use case testing, but use cases rarely cover a single component. It may be possible to cover the decisions within business flows, but only if they were specified in enough detail, however this option only suggests coverage of “business flows” as a whole. Even if business flows would cover some decisions, the measure “Decision Coverage” don’t measure the percentage of business flows, but the percentage of decision outcomes exercised by the business flows"
        },
        {
            tresc: "Decision coverage is a measure of the ‘if’ statements in the code that are exercised with both the true and false outcomes",
            correct: false,
            hint: "Is not correct. Achieving full decision coverage does require all ‘if’ statements to be exercised with both true and false outcomes, however, there are typically several other decision points in the code (e.g. ‘case’ statements and the code controlling loops) that also need to be taken into consideration when measuring decision coverage"
        },
        {
            tresc: "Decision coverage is a measure of the proportion of decision outcomes in the source code exercised by tests",
            correct: true,
            hint: "Is correct. Decision coverage is a measure of the proportion of decision outcomes exercised (normally presented as a percentage)"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 69,
    tresc: "Which of the following BEST describes the concept behind error guessing?",
    answers: [
        {
            tresc: "Error guessing requires you to imagine you are the user of the test object and guess mistakes the user could make interacting with it",
            correct: false,
            hint: "Is not correct. error guessing is not a usability technique for guessing how users may fail to interact with the test object"
        },
        {
            tresc: "Error guessing involves using your personal experience of development and the mistakes you made as a developer",
            correct: false,
            hint: "Is not correct. Although a tester who used to be a developer may use their personal experience to help them when performing error guessing, the technique is not based on prior knowledge of development"
        },
        {
            tresc: "Error guessing involves using your knowledge and experience of defects found in the past and typical mistakes made by developers",
            correct: true,
            hint: "Is correct. The basic concept behind error guessing is that the tester tries to guess what mistakes may have been made by the developer and what defects may be in the test object based on past-experience (and sometimes checklists)"
        },
        {
            tresc: "Error guessing requires you to rapidly duplicate the development task to identify the sort of mistakes a developer might make",
            correct: false,
            hint: "Is not correct. Duplicating the development task has several flaws that make it impractical, such as the requirement for the tester to have equivalent skills to the developer and the time involved in performing the development. It is not error guessing"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 70,
    tresc: "Which of the following BEST explains a benefit of independent testing?",
    answers: [
        {
            tresc: "The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team, so ensuring everyone is aware that quality is the test team’s overall responsibility",
            correct: false,
            hint: "Is not correct. Quality should be the responsibility of everyone working on the project and not the sole responsibility of the test team"
        },
        {
            tresc: "If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines",
            correct: false,
            hint: " Is not correct. First, it is not a benefit if an external test team does not meet delivery deadlines, and second, there is no reason to believe that external test teams will feel they do not have to meet strict delivery deadlines"
        },
        {
            tresc: "An independent test team can work totally separately from the developers, need not be distracted with changing project requirements, and can restrict communication with the developers to defect reporting through the defect management system",
            correct: false,
            hint: "Is not correct. It is bad practice for the test team to work in complete isolation, and we would expect an external test team to be concerned with changing project requirements and communicate well with developers"
        },
        {
            tresc: "When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer",
            correct: true,
            hint: "Is correct. Specifications are never perfect, meaning that assumptions will have to be made by the developer. An independent tester is useful in that they can challenge and verify the assumptions and subsequent interpretation made by the developer"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 71,
    tresc: "Which of the following tasks is MOST LIKELY to be performed by the test manager?",
    answers: [
        {
            tresc: "Write test summary reports based on the information gathered during testing",
            correct: true,
            hint: "Is correct. One of the typical tasks of a test manager"
        },
        {
            tresc: "Review tests developed by others",
            correct: false,
            hint: "Is not correct. One of the typical tasks of a tester"
        },
        {
            tresc: "Prepare and acquire test data",
            correct: false,
            hint: "Is not correct. One of the typical tasks of a tester"
        },
        {
            tresc: "Analyze, review, and assess requirements, specifications and models for testability",
            correct: false,
            hint: "Is not correct. One of the typical tasks of a tester"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 72,
    tresc: "Given the following examples of entry and exit criteria: <br/><br/>1. The original testing budget of $30,000 plus contingency of $7,000 has been spent <br/>2. 96% of planned tests for the drawing package have been executed and the remaining tests are now out of scope <br/>3. The trading performance test environment has been designed, set-up and verified <br/>4. Current status is no outstanding critical defects and two high-priority ones <br/>5. The autopilot design specifications have been reviewed and reworked <br/>6. The tax rate calculation component has passed unit testing. <br/><br/>Which of the following BEST categorizes them as entry and exit criteria:",
    answers: [
        {
            tresc: "Entry criteria – 5, 6; Exit criteria – 1, 2, 3, 4",
            correct: false,
            hint: "The correct pairings of examples to entry and exit criteria are: <br/><br/>• Entry criteria <br/>- (3) The trading performance test environment has been designed, set-up and verified – example of the need for a test environment to be ready before testing can begin <br/>- (5) The autopilot design specifications have been reviewed and reworked – example of the need for the test basis to be available before testing can begin <br/>- (6) The tax rate calculation component has passed unit testing – example of the need for a test object to have met the exit criteria for a prior level of testing before testing can begin <br/><br/>• Exit criteria <br/>- (1) The original testing budget of $30,000 plus contingency of $7,000 has been spent – example of spending the testing budget being a signal to stop testing <br/>- (2) 96% of planned tests for the drawing package have been executed and the remaining tests are now out of scope – example of all the planned tests being run being a signal to stop testing (normally used alongside the exit criteria on outstanding defects remaining) -<br/> (4) Current status is no outstanding critical defects and two highpriority ones – example of the number of outstanding defects achieving a planned limit being a signal to stop testing (normally used alongside the exit criteria on planned tests being run). <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "Entry criteria – 2, 3, 6; Exit criteria – 1, 4, 5",
            correct: false,
            hint: "The correct pairings of examples to entry and exit criteria are: <br/><br/>• Entry criteria <br/>- (3) The trading performance test environment has been designed, set-up and verified – example of the need for a test environment to be ready before testing can begin <br/>- (5) The autopilot design specifications have been reviewed and reworked – example of the need for the test basis to be available before testing can begin <br/>- (6) The tax rate calculation component has passed unit testing – example of the need for a test object to have met the exit criteria for a prior level of testing before testing can begin <br/><br/>• Exit criteria <br/>- (1) The original testing budget of $30,000 plus contingency of $7,000 has been spent – example of spending the testing budget being a signal to stop testing <br/>- (2) 96% of planned tests for the drawing package have been executed and the remaining tests are now out of scope – example of all the planned tests being run being a signal to stop testing (normally used alongside the exit criteria on outstanding defects remaining) -<br/> (4) Current status is no outstanding critical defects and two highpriority ones – example of the number of outstanding defects achieving a planned limit being a signal to stop testing (normally used alongside the exit criteria on planned tests being run). <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "Entry criteria – 1, 3; Exit criteria – 2, 4, 5, 6",
            correct: false,
            hint: "The correct pairings of examples to entry and exit criteria are: <br/><br/>• Entry criteria <br/>- (3) The trading performance test environment has been designed, set-up and verified – example of the need for a test environment to be ready before testing can begin <br/>- (5) The autopilot design specifications have been reviewed and reworked – example of the need for the test basis to be available before testing can begin <br/>- (6) The tax rate calculation component has passed unit testing – example of the need for a test object to have met the exit criteria for a prior level of testing before testing can begin <br/><br/>• Exit criteria <br/>- (1) The original testing budget of $30,000 plus contingency of $7,000 has been spent – example of spending the testing budget being a signal to stop testing <br/>- (2) 96% of planned tests for the drawing package have been executed and the remaining tests are now out of scope – example of all the planned tests being run being a signal to stop testing (normally used alongside the exit criteria on outstanding defects remaining) -<br/> (4) Current status is no outstanding critical defects and two highpriority ones – example of the number of outstanding defects achieving a planned limit being a signal to stop testing (normally used alongside the exit criteria on planned tests being run). <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "Entry criteria – 3, 5, 6; Exit criteria – 1, 2, 4",
            correct: true,
            hint: "The correct pairings of examples to entry and exit criteria are: <br/><br/>• Entry criteria <br/>- (3) The trading performance test environment has been designed, set-up and verified – example of the need for a test environment to be ready before testing can begin <br/>- (5) The autopilot design specifications have been reviewed and reworked – example of the need for the test basis to be available before testing can begin <br/>- (6) The tax rate calculation component has passed unit testing – example of the need for a test object to have met the exit criteria for a prior level of testing before testing can begin <br/><br/>• Exit criteria <br/>- (1) The original testing budget of $30,000 plus contingency of $7,000 has been spent – example of spending the testing budget being a signal to stop testing <br/>- (2) 96% of planned tests for the drawing package have been executed and the remaining tests are now out of scope – example of all the planned tests being run being a signal to stop testing (normally used alongside the exit criteria on outstanding defects remaining) -<br/> (4) Current status is no outstanding critical defects and two highpriority ones – example of the number of outstanding defects achieving a planned limit being a signal to stop testing (normally used alongside the exit criteria on planned tests being run). <br/><br/>Thus, option d) is correct."
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 74,
    tresc: "Which of the following statements about test estimation approaches is CORRECT?",
    answers: [
        {
            tresc: "With the metrics-based approach, the estimate is based on test measures from the project and so this estimate is only available after the testing starts",
            correct: false,
            hint: "Is not correct. Estimates may be updated as more information becomes available, but estimates are needed to assist with planning before the testing starts"
        },
        {
            tresc: "With the expert-based approach, a group of expert users identified by the client recommends the necessary testing budget",
            correct: false,
            hint: "Is not correct. In the expert-based approach, the experts need to be experts in testing, not in using the test object"
        },
        {
            tresc: "With the expert-based approach, the test managers responsible for the different testing activities predict the expected testing effort",
            correct: true,
            hint: "Is correct. Test -Managers, who will be leading testers doing the testing, are considered experts in their respective areas and suitable for estimating the necessary resources needed"
        },
        {
            tresc: "With the metrics-based approach, an average of the testing costs recorded from several past projects is used as the testing budget",
            correct: false,
            hint: "Is not correct. While it is useful to know the testing costs from previous projects, a more sophisticated approach is needed than simply taking an average of past projects (the new project may not be like the previous projects, e.g. it may be far larger or far smaller than previous projects)"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 75,
    tresc: "Which of the following BEST defines risk level?",
    answers: [
        {
            tresc: "Risk level is calculated by adding together the probabilities of all problem situations and the financial harm that results from them",
            correct: false,
            hint: "Is not correct. Risk is determined by considering a combination of the likelihood of problem situations and the harm that may result from them but cannot be calculated by adding these together (the probability would be in the range 0 to 1 and the harm could be in dollars)"
        },
        {
            tresc: "Risk level is estimated by multiplying the likelihood of a threat to the system by the chance that the threat will occur and will result in financial damage",
            correct: false,
            hint: "Is not correct. Risk is determined by considering a combination of a likelihood and an impact. This definition only considers likelihood and chance (both forms of probability) with no consideration of the impact (or harm)"
        },
        {
            tresc: "Risk level is determined by a combination of the probability of an undesirable event and the expected impact of that event",
            correct: true,
            hint: "Is correct. See reasons from incorrect answers"
        },
        {
            tresc: "Risk level is the sum of all potential hazards to a system multiplied by the sum of all potential losses from that system",
            correct: false,
            hint: "Is not correct. Risk is determined by considering a combination of a likelihood and an impact. This definition only considers hazards and losses (a hazard is a bad event, like a risk, while loss is a form of impact) with no consideration of the likelihood (or probability)"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 76,
    tresc: "Which of the following is MOST likely to be an example of a PRODUCT risk?",
    answers: [
        {
            tresc: "The expected security features may not be supported by the system architecture",
            correct: true,
            hint: "Is correct. If the expected security features are not supported by the system architecture, then the system could be seriously flawed. As the system being produced is the problem here, it is a product risk"
        },
        {
            tresc: "The developers may not have time to fix all the defects found by the test team",
            correct: false,
            hint: "Is not correct. If the developers run over budget, or run out of time, that is a problem with the running of the project – it is a project risk"
        },
        {
            tresc: "The test cases may not provide full coverage of the specified requirements",
            correct: false,
            hint: "Is not correct. If the test cases do not provide full coverage of the requirements, this means the testing may not fulfil the requirements of the test plan – it is a project risk"
        },
        {
            tresc: "The performance test environment may not be ready before the system is due for delivery",
            correct: false,
            hint: "Is not correct. If the test environment is not ready, this means the testing may not be done, or it may have to be done on a different environment and it is impacting how the project is run – it is a project risk"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 77,
    tresc: "Which of the following is LEAST likely to be an example of product risk analysis CORRECTLY influencing the testing?",
    answers: [
        {
            tresc: "The potential impact of security flaws has been identified as being particularly high, so security testing has been prioritized ahead of some other testing activities",
            correct: false,
            hint: "Is not correct. As we are told security flaws have a particularly high impact, their risk level will be higher, and thus we have prioritized the security testing ahead of some other testing. Thus, product risk analysis has influenced the testing"
        },
        {
            tresc: "Testing has found the quality of the network module to be higher than expected, so additional testing will not be performed in that area",
            correct: true,
            hint: "Is correct. As less defects than expected have been found in the network module, the perceived risk in this area should be lower, and so less testing should be focused on this area, NOT additional testing. Thus, product risk analysis has NOT CORRECTLY influenced the testing in this situation"
        },
        {
            tresc: "The users had problems with the user interface of the previous system, so additional usability testing is planned for the replacement system",
            correct: false,
            hint: "Is not correct. Because the users had problems with the user interface of the previous system, there is now high awareness of the risk associated with the user interface, which has resulted in additional usability testing being planned. Thus, product risk analysis has influenced the thoroughness and scope of testing"
        },
        {
            tresc: "The time needed to load web pages is crucial to the success of the new website, so an expert in performance testing has been employed for this project",
            correct: false,
            hint: "Is not correct. As the time needed to load web pages has been identified as crucial to the success of the new website, the performance of the website should be considered a risk, and the employment of an expert in performance testing helps to mitigate this risk. Thus, product risk analysis has influenced the testing"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 78,
    tresc: "You are performing system testing of a train reservation system. Based on the test cases performed, you have noticed that the system occasionally reports that no trains are available, although this should actually be the case. You have provided the developers with a summary of the defect and the version of the tested system. They recognize the urgency of the defect and are now waiting for you to provide further details. <br/><br/>In addition to the information already provided, the following additional information is given: <br/><br/>1. Degree of impact (severity) of the defect <br/>2. Identification of the test item <br/>3. Details of the test environment <br/>4. Urgency/priority to fix <br/>5. Actual results <br/>6. Reference to test case specification <br/><br/>Which of this information is most useful to include in the defect report?",
    answers: [
        {
            tresc: "1, 2, 6",
            correct: false,
            hint: "Considering each of the pieces of information: <br/><br/>1. Degree of impact (severity) of the defect – the developers are already aware of the problem and are waiting to fix it, so this is a less important piece of information. <br/>2. Identification of the test item – as the developers are already aware of the problem and you are performing system testing, and you have already provided the version of the system you are testing you can assume they know the item that was being tested, so this is a less important piece of information. <br/>3. Details of the test environment – the set-up of the test environment may have a noticeable effect on the test results, and detailed information should be provided, so this is an important piece of information. <br/>4. Urgency/priority to fix – the developers are already aware of the problem and are waiting to fix it, so this is a less important piece of information. <br/>5. Actual results – the actual results may well help the developers to determine what is going wrong with the system, so this is an important piece of information. <br/>6. Reference to test case specification – this will show the developers the tests you ran, including the test inputs that caused the system to fail (and expected results), so this is an important piece of information. <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "1, 4, 5, 6",
            correct: false,
            hint: "Considering each of the pieces of information: <br/><br/>1. Degree of impact (severity) of the defect – the developers are already aware of the problem and are waiting to fix it, so this is a less important piece of information. <br/>2. Identification of the test item – as the developers are already aware of the problem and you are performing system testing, and you have already provided the version of the system you are testing you can assume they know the item that was being tested, so this is a less important piece of information. <br/>3. Details of the test environment – the set-up of the test environment may have a noticeable effect on the test results, and detailed information should be provided, so this is an important piece of information. <br/>4. Urgency/priority to fix – the developers are already aware of the problem and are waiting to fix it, so this is a less important piece of information. <br/>5. Actual results – the actual results may well help the developers to determine what is going wrong with the system, so this is an important piece of information. <br/>6. Reference to test case specification – this will show the developers the tests you ran, including the test inputs that caused the system to fail (and expected results), so this is an important piece of information. <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "2, 3, 4, 5",
            correct: false,
            hint: "Considering each of the pieces of information: <br/><br/>1. Degree of impact (severity) of the defect – the developers are already aware of the problem and are waiting to fix it, so this is a less important piece of information. <br/>2. Identification of the test item – as the developers are already aware of the problem and you are performing system testing, and you have already provided the version of the system you are testing you can assume they know the item that was being tested, so this is a less important piece of information. <br/>3. Details of the test environment – the set-up of the test environment may have a noticeable effect on the test results, and detailed information should be provided, so this is an important piece of information. <br/>4. Urgency/priority to fix – the developers are already aware of the problem and are waiting to fix it, so this is a less important piece of information. <br/>5. Actual results – the actual results may well help the developers to determine what is going wrong with the system, so this is an important piece of information. <br/>6. Reference to test case specification – this will show the developers the tests you ran, including the test inputs that caused the system to fail (and expected results), so this is an important piece of information. <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "3, 5, 6",
            correct: true,
            hint: "Considering each of the pieces of information: <br/><br/>1. Degree of impact (severity) of the defect – the developers are already aware of the problem and are waiting to fix it, so this is a less important piece of information. <br/>2. Identification of the test item – as the developers are already aware of the problem and you are performing system testing, and you have already provided the version of the system you are testing you can assume they know the item that was being tested, so this is a less important piece of information. <br/>3. Details of the test environment – the set-up of the test environment may have a noticeable effect on the test results, and detailed information should be provided, so this is an important piece of information. <br/>4. Urgency/priority to fix – the developers are already aware of the problem and are waiting to fix it, so this is a less important piece of information. <br/>5. Actual results – the actual results may well help the developers to determine what is going wrong with the system, so this is an important piece of information. <br/>6. Reference to test case specification – this will show the developers the tests you ran, including the test inputs that caused the system to fail (and expected results), so this is an important piece of information. <br/><br/>Thus, option d) is correct."
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 79,
    tresc: "Given the following test activities and test tools: <br/><br/>1. Performance measurement and dynamic analysis <br/>2. Test execution and logging <br/>3. Management of testing and testware <br/>4. Test design <br/><br/>A. Requirements coverage tools <br/>B. Dynamic analysis tools <br/>C. Test data preparation tools <br/>D. Defect management tools <br/><br/>Which of the following BEST matches the activities and tools?",
    answers: [
        {
            tresc: "1 – B, 2 – C, 3 – D, 4 – A",
            correct: false,
            hint: "The correct pairings of test activities and test tools are: <br/><br/>1. Performance measurement and dynamic analysis – (b) Dynamic analysis tools <br/>2. Test execution and logging – (a) Requirements coverage tools <br/>3. Management of testing and testware – (d) Defect management tools <br/>4. Test design – (c) Test data preparation tools <br/><br/>Thus, option c) is correct"
        },
        {
            tresc: "1 – B, 2 – A, 3 – C, 4 – D",
            correct: false,
            hint: "The correct pairings of test activities and test tools are: <br/><br/>1. Performance measurement and dynamic analysis – (b) Dynamic analysis tools <br/>2. Test execution and logging – (a) Requirements coverage tools <br/>3. Management of testing and testware – (d) Defect management tools <br/>4. Test design – (c) Test data preparation tools <br/><br/>Thus, option c) is correct"
        },
        {
            tresc: "1 – B, 2 – A, 3 – D, 4 – C",
            correct: true,
            hint: "The correct pairings of test activities and test tools are: <br/><br/>1. Performance measurement and dynamic analysis – (b) Dynamic analysis tools <br/>2. Test execution and logging – (a) Requirements coverage tools <br/>3. Management of testing and testware – (d) Defect management tools <br/>4. Test design – (c) Test data preparation tools <br/><br/>Thus, option c) is correct"
        },
        {
            tresc: "1 – A, 2 – B, 3 – D, 4 – C",
            correct: false,
            hint: "The correct pairings of test activities and test tools are: <br/><br/>1. Performance measurement and dynamic analysis – (b) Dynamic analysis tools <br/>2. Test execution and logging – (a) Requirements coverage tools <br/>3. Management of testing and testware – (d) Defect management tools <br/>4. Test design – (c) Test data preparation tools <br/><br/>Thus, option c) is correct"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 80,
    tresc: "Which of the following is MOST likely to be used as a reason for using a pilot project to introduce a tool into an organization?",
    answers: [
        {
            tresc: "The need to evaluate how the tool fits with existing processes and practices and determining what would need to change",
            correct: true,
            hint: "Is correct"
        },
        {
            tresc: "The need to evaluate the test automation skills and training, mentoring and coaching needs of the testers who will use the tool",
            correct: false,
            hint: "Is not correct. The evaluation of the test automation skills and training, mentoring and coaching needs of the testers who will use the tool should have been performed as part of the tool selection activity"
        },
        {
            tresc: "The need to evaluate whether the tool provides the required functionality and does not duplicate existing test tools",
            correct: false,
            hint: "Is not correct. The decision on whether the tool provides the required functionality and does not duplicate existing tools should have been performed as part of the tool selection activity"
        },
        {
            tresc: "The need to evaluate the tool vendor in terms of the training and other support they provide",
            correct: false,
            hint: "Is not correct. The evaluation of the tool vendor in terms of the training and other support they provide should have been performed as part of the tool selection activity"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 81,
    tresc: "What is quality?",
    answers: [
        {
            tresc: "Activities focused on providing confidence that quality requirements will be fulfilled",
            correct: false,
            hint: "Is not correct. This is the Glossary definition of quality assurance"
        },
        {
            tresc: "The degree to which a component or system satisfies the stated and implied needs of its various stakeholders",
            correct: true,
            hint: "Is correct. This is the Glossary definition of quality"
        },
        {
            tresc: "The degree to which a component or system protects information and data so that persons or other components or systems have the degree of access appropriate to their types and levels of authorization",
            correct: false,
            hint: "Is not correct. This is the Glossary definition of security"
        },
        {
            tresc: "The total costs incurred on quality activities and issues and often split into prevention costs, appraisal costs, internal failure costs and external failure costs",
            correct: false,
            hint: "Is not correct. This is the Glossary definition of cost of quality"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 82,
    tresc: "Which of the following is a typical test objective?",
    answers: [
        {
            tresc: "Preventing defects",
            correct: true,
            hint: "Is correct. This is an objective listed"
        },
        {
            tresc: "Repairing defects",
            correct: false,
            hint: "Is not correct. This is debugging"
        },
        {
            tresc: "Comparing actual results to expected results",
            correct: false,
            hint: "Is not correct. This is an activity within the test execution group of activities within the test process"
        },
        {
            tresc: "Analyzing the cause of failure",
            correct: false,
            hint: "Is not correct. This is part of debugging"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 83,
    tresc: "A phone ringing momentarily distracts a programmer, causing the programmer to improperly program the logic that checks the upper boundary of an input variable. Later, during system testing, a tester notices that this input field accepts invalid input values. The improperly coded logic for the upper boundary check is:",
    answers: [
        {
            tresc: "The root cause",
            correct: false,
            hint: "Is not correct. The root cause is the distraction that the programmer experienced while programming"
        },
        {
            tresc: "The failure",
            correct: false,
            hint: "Is not correct. The accepting of invalid inputs is the failure"
        },
        {
            tresc: "The error",
            correct: false,
            hint: "Is not correct. The error is the mistaken thinking that resulted in putting the defect in the code"
        },
        {
            tresc: "The defect",
            correct: true,
            hint: "Is correct. The problem in the code is a defect"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 84,
    tresc: "A product owner says that your role as a tester on an Agile team is to catch all the bugs before the end of each iteration. Which of the following is a testing principle that could be used to respond to this (false) statement?",
    answers: [
        {
            tresc: "Defect clustering",
            correct: false,
            hint: "Is not correct. Defect clustering has to do with where defects are most likely to be found, not whether all of them can be found"
        },
        {
            tresc: "Testing shows the presence of defects",
            correct: true,
            hint: "Is correct. Testing can show the presence of defects but cannot prove their absence, which makes it impossible to know if you have caught all the bugs. Further, the impossibility of exhaustive testing makes it impossible for you to catch all the bugs"
        },
        {
            tresc: "Absence of error fallacy",
            correct: false,
            hint: "Is not correct. This principle says that you can find and remove many bugs but still release an unsuccessful software product, which is not what the product owner is asking you to ensure"
        },
        {
            tresc: "Root cause analysis",
            correct: false,
            hint: "Is not correct. Root cause analysis is not a testing principle"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 85,
    tresc: "Programmers often write and execute unit tests against code which they have written. During this self-testing activity, which of the following is a tester mindset that programmers should adopt to perform this unit testing effectively?",
    answers: [
        {
            tresc: "Good communication skills",
            correct: false,
            hint: "Is not correct. The programmer appears to be performing unit testing on their own code"
        },
        {
            tresc: "Code coverage",
            correct: false,
            hint: "Is not correct. Code coverage is useful for unit testing, but it is not a tester mindset"
        },
        {
            tresc: "Evaluating code defects",
            correct: false,
            hint: "Is not correct. The programmer’s mindset included contemplating what might be wrong with the code, but that is not a tester’s mindset"
        },
        {
            tresc: "Attention to detail",
            correct: true,
            hint: "Is correct. This tester mindset, attention to detail, will help programmers find defects during unit testing"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 86,
    tresc: "Consider the following testing activities: <br/>1. Selecting regression tests <br/>2. Evaluating completeness of test execution <br/>3. Identifying which user stories have open defect reports <br/>4. Evaluating whether the number of tests for each requirement is consistent with the level of product risk <br/><br/>Consider the following ways traceability can help testing: <br/>A. Improve understandability of test status reports to include status of test basis items <br/>B. Make testing auditable <br/>C. Provide information to assess process quality <br/>D. Analyze the impact of changes <br/><br/>Which of the following best matches the testing activity with how traceability can assist that activity?",
    answers: [
        {
            tresc: "1D, 2B, 3C, 4A",
            correct: false,
            hint: "Traceability assists with: <br/>• Selecting regression tests in terms of analyzing the impact of changes (1D) <br/>• Evaluating completeness of test execution which makes testing auditable (2B) <br/>• Identifying which user stories have open defect reports which improves understandability of test status reports to include status of test basis items (3A) <br/>• Evaluating whether the number of tests for each requirement is consistent with the level of product risk which provides information to assess test process quality (i.e., alignment of test effort with risk) (4C) <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "1B, 2D, 3A, 4C",
            correct: false,
            hint: "Traceability assists with: <br/>• Selecting regression tests in terms of analyzing the impact of changes (1D) <br/>• Evaluating completeness of test execution which makes testing auditable (2B) <br/>• Identifying which user stories have open defect reports which improves understandability of test status reports to include status of test basis items (3A) <br/>• Evaluating whether the number of tests for each requirement is consistent with the level of product risk which provides information to assess test process quality (i.e., alignment of test effort with risk) (4C) <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "1D, 2C, 3A, 4B",
            correct: false,
            hint: "Traceability assists with: <br/>• Selecting regression tests in terms of analyzing the impact of changes (1D) <br/>• Evaluating completeness of test execution which makes testing auditable (2B) <br/>• Identifying which user stories have open defect reports which improves understandability of test status reports to include status of test basis items (3A) <br/>• Evaluating whether the number of tests for each requirement is consistent with the level of product risk which provides information to assess test process quality (i.e., alignment of test effort with risk) (4C) <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "1D, 2B, 3A, 4C",
            correct: true,
            hint: "Traceability assists with: <br/>• Selecting regression tests in terms of analyzing the impact of changes (1D) <br/>• Evaluating completeness of test execution which makes testing auditable (2B) <br/>• Identifying which user stories have open defect reports which improves understandability of test status reports to include status of test basis items (3A) <br/>• Evaluating whether the number of tests for each requirement is consistent with the level of product risk which provides information to assess test process quality (i.e., alignment of test effort with risk) (4C) <br/><br/>Thus, option d) is correct."
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 87,
    tresc: "A tester participated in a discussion about proposed database structure. The tester identified a potential performance problem related to certain common user searches. This possible problem was explained to the development team. Which of the following is a testing contribution to success that BEST matches this situation?",
    answers: [
        {
            tresc: "Enabling required tests to be identified at an early stage",
            correct: false,
            hint: "Is not correct. While enabling required tests to be identified in an early stage is a testing contribution to success, there is no indication in the question that the tester did so"
        },
        {
            tresc: "Ensuring processes are carried out properly",
            correct: false,
            hint: "Is not correct. Ensuring processes are carried out properly is part of quality assurance, not a testing contribution to success"
        },
        {
            tresc: "Reducing the risk of fundamental design defects",
            correct: true,
            hint: "Is correct. Reducing the risk of fundamental design defects is a testing contribution to success. Database structure is related to design, and performance problems can be a significant product risk"
        },
        {
            tresc: "Reducing the risk of untestable functionality",
            correct: false,
            hint: "Is not correct. While reducing the risk of untestable functionality is a testing contribution to success, the tester here has not identified something untestable, but rather something that would result in performance tests failing"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 88,
    tresc: "Which of the following is an example of a task that can be carried out as part of the test process?",
    answers: [
        {
            tresc: "Analyzing a defect",
            correct: false,
            hint: "Is not correct. Analyzing a defect is part of debugging, not testing"
        },
        {
            tresc: "Designing test data",
            correct: true,
            hint: "Is correct. Creating test data is a test implementation task"
        },
        {
            tresc: "Assigning a version to a test item",
            correct: false,
            hint: "Is not correct. While a tester may need to identify a test item’s version for results reporting purposes, assigning a test item’s version is part of configuration management"
        },
        {
            tresc: "Writing a user story",
            correct: false,
            hint: "Is not correct. Writing a user story is not a testing activity and should be done by the product owner"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 89,
    tresc: "You are running a performance test with the objective of finding possible network bottlenecks in interfaces between components of a system. Which of the following statements describes this test?",
    answers: [
        {
            tresc: "A functional test during the integration test level",
            correct: false,
            hint: "Is not correct. While this test does match the description of an integration test, it is a non-functional test"
        },
        {
            tresc: "A non-functional test during the integration test level",
            correct: true,
            hint: "Is correct. This test matches the description of an integration test and it is a non-functional test"
        },
        {
            tresc: "A functional test during the component test level",
            correct: false,
            hint: "Is not correct. This test does not match the description of a component test and it is not a functional test"
        },
        {
            tresc: "A non-functional test during the component test level",
            correct: false,
            hint: "Is not correct. While this test is a non-functional test, it does not match the description of a component test"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 90,
    tresc: "Which of the following statements is true?",
    answers: [
        {
            tresc: "Impact analysis is useful for confirmation testing during maintenance testing",
            correct: false,
            hint: "Is not correct. While impact analysis is useful during maintenance testing it is not necessary for confirmation testing since confirmation testing is on the intended effects of a bug fix or other change"
        },
        {
            tresc: "Confirmation testing is useful for regression testing during system design",
            correct: false,
            hint: "Is not correct. Confirmation and regression testing are two separate activities, and confirmation testing is not part of system design"
        },
        {
            tresc: "Impact analysis is useful for regression testing during maintenance testing",
            correct: true,
            hint: "Is correct. Impact analysis can be used to select regression tests for maintenance testing"
        },
        {
            tresc: "Confirmation testing is useful for impact analysis during maintenance testing",
            correct: false,
            hint: "Is not correct. Confirmation testing is not part of impact analysis, though confirmation testing will typically happen during maintenance testing"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 91,
    tresc: "Consider the following types of defects that a test level might focus on: <br/><br/>1. Defects in separately testable modules or objects <br/>2. Not focused on identifying defects <br/>3. Defects in interfaces and interactions <br/>4. Defects in the whole test object <br/><br/>Which of the following list correctly matches test levels from the Foundation syllabus with the defect focus options given above?",
    answers: [
        {
            tresc: "1 = performance test; 2 = component test; 3 = system test; 4 = acceptance test",
            correct: false,
            hint: "Performance testing is a test type, not a test level. Component testing focuses on defects in separately testable modules or objects, integration testing on defects in interfaces and interactions, system testing on defects in the whole test object, and acceptance testing is not typically focused on identifying defects. <br/><br/>Therefore, c is the correct answer."
        },
        {
            tresc: "1 = component test; 2 = acceptance test; 3 = system test; 4 = integration test",
            correct: false,
            hint: "Performance testing is a test type, not a test level. Component testing focuses on defects in separately testable modules or objects, integration testing on defects in interfaces and interactions, system testing on defects in the whole test object, and acceptance testing is not typically focused on identifying defects. <br/><br/>Therefore, c is the correct answer."
        },
        {
            tresc: "1 = component test; 2 = acceptance test; 3 = integration test; 4 = system test",
            correct: true,
            hint: "Performance testing is a test type, not a test level. Component testing focuses on defects in separately testable modules or objects, integration testing on defects in interfaces and interactions, system testing on defects in the whole test object, and acceptance testing is not typically focused on identifying defects. <br/><br/>Therefore, c is the correct answer."
        },
        {
            tresc: "1 = integration test; 2 = system test; 3 = component test; 4 = acceptance test",
            correct: false,
            hint: "Performance testing is a test type, not a test level. Component testing focuses on defects in separately testable modules or objects, integration testing on defects in interfaces and interactions, system testing on defects in the whole test object, and acceptance testing is not typically focused on identifying defects. <br/><br/>Therefore, c is the correct answer."
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 92,
    tresc: "A mass market operating system software product is designed to run on any PC hardware with an x86-family processor. You are running a set of tests to look for defects related to support of the various PCs that use such a processor and to build confidence that important PC brands will work. What type of test are you performing?",
    answers: [
        {
            tresc: "Performance test",
            correct: false,
            hint: "Is not correct. The test described is a non-functional test, it is a portability test, not a performance test"
        },
        {
            tresc: "Processor test",
            correct: false,
            hint: "Is not correct. Processor test is not a defined test type"
        },
        {
            tresc: "Functional test",
            correct: false,
            hint: "Is not correct. The test described is a non-functional test, specifically a portability test"
        },
        {
            tresc: "Portability test",
            correct: true,
            hint: "Is correct. Testing supported devices is a non-functional test, specifically a portability test"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 93,
    tresc: "During an Agile development effort, a product owner discovers a previously-unknown regulatory requirement that applies to most of the user stories within a particular epic. The user stories are updated to provide for the necessary changes in software behavior. The programmers on the team are modifying the code appropriately. As a tester on the team, what types of tests will you run?",
    answers: [
        {
            tresc: "Confirmation tests",
            correct: false,
            hint: "The change in behavior may be either functional or non-functional you need to run change-related tests, some of which are confirmation tests and others are regression tests. <br/><br/>Therefore, d is the correct answer."
        },
        {
            tresc: "Regression tests",
            correct: false,
            hint: "The change in behavior may be either functional or non-functional you need to run change-related tests, some of which are confirmation tests and others are regression tests. <br/><br/>Therefore, d is the correct answer."
        },
        {
            tresc: "Functional tests",
            correct: false,
            hint: "The change in behavior may be either functional or non-functional you need to run change-related tests, some of which are confirmation tests and others are regression tests. <br/><br/>Therefore, d is the correct answer."
        },
        {
            tresc: "Change-related tests",
            correct: true,
            hint: "The change in behavior may be either functional or non-functional you need to run change-related tests, some of which are confirmation tests and others are regression tests. <br/><br/>Therefore, d is the correct answer."
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 94,
    tresc: "In a formal review, what is the role name for the participant who runs an inspection meeting?",
    answers: [
        {
            tresc: "Facilitator",
            correct: true,
            hint: "Is correct. The facilitator or moderator runs the review meetings"
        },
        {
            tresc: "Programmer",
            correct: false,
            hint: "Is not correct. This is not a role name for a formal review participant"
        },
        {
            tresc: "Author",
            correct: false,
            hint: "Is not correct. The facilitator or moderator runs the review meetings"
        },
        {
            tresc: "Project manager",
            correct: false,
            hint: "Is not correct. The facilitator or moderator runs the review meetings"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 95,
    tresc: "You are reading a user story in the product backlog to prepare for a meeting with the product owner and a developer, noting potential defects as you go. Which of the following statements is true about this activity?",
    answers: [
        {
            tresc: "It is not a static test, because static testing involves execution of the test object",
            correct: false,
            hint: "Is not correct. Static testing does not involve execution of the test object"
        },
        {
            tresc: "It is not a static test, because static testing is always performed using a tool",
            correct: false,
            hint: "Is not correct. Some static tests involve the use of a tool, especially static analysis, but reviews (such as the activity described here) do not necessarily involve the use of a tool"
        },
        {
            tresc: "It is a static test, because any defects you find could be found cheaper during dynamic testing",
            correct: false,
            hint: "Is not correct. The review activity described here is part of a static test, but defects found in static tests are usually cheaper than those found in dynamic testing"
        },
        {
            tresc: "It is a static test, because static testing does not involve execution of the test object",
            correct: true,
            hint: "Is correct. Static testing does not involve execution of the test object"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 96,
    tresc: "During a period of intensive project overtime, a system architecture document is sent to various project participants, announcing a previously-unplanned technical review to occur in one week. No adjustments are made to the participants’ list of assigned tasks. Based on this information alone, which of the following is a factor for review success that is MISSING?",
    answers: [
        {
            tresc: "Appropriate review type",
            correct: false,
            hint: "Is not correct. Technical reviews are appropriate for technical documents such as a system architecture"
        },
        {
            tresc: "Adequate time to prepare",
            correct: true,
            hint: "Is correct. Adequate time for preparation is important, but people are working overtime and no adjustments are made for this new set of tasks"
        },
        {
            tresc: "Sufficient metrics to evaluate the author",
            correct: false,
            hint: "Is not correct. Gathering metrics from a review to evaluate participants is a factor that leads to failure, not success, because it destroys trust"
        },
        {
            tresc: "Well-managed review meeting",
            correct: false,
            hint: "Is not correct. A well-managed review meeting is important, but there is no reason to think the review meeting will not be well managed based on the information provided"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 97,
    tresc: "You are working as a tester on an Agile team and have participated in over two dozen user story refinement sessions with the product owner and the developers on the team at the start of each iteration. As the reviews have gotten more effective at detecting defects in user stories and the product owner more adept at correcting those defects, you and the team notice that the team’s velocity, as shown in your burndown charts, has started to increase. Which of the following is a benefit of static testing that MOST DIRECTLY applies to increased velocity?",
    answers: [
        {
            tresc: "Increasing total cost of quality",
            correct: false,
            hint: "Is not correct. Reviews reduce, not increase, the total cost of quality"
        },
        {
            tresc: "Reducing testing cost",
            correct: false,
            hint: "Is not correct. Increasing velocity is a sign of increasing development productivity overall, not just testing, so B only partially applies"
        },
        {
            tresc: "Increasing development productivity",
            correct: true,
            hint: "Is correct. Velocity is a way of measuring productivity in Agile development"
        },
        {
            tresc: "Reducing total cost of quality",
            correct: false,
            hint: "Is not correct. The benefit mentioned here has to do with increasing overall development team productivity"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 98,
    tresc: "You are working on a video game development project, using Agile methods. It is based on Greek mythology and history, and players can play key roles in scenarios such as the battles between the Greeks and Trojans. <br/><br/>Consider the following user story and its associated acceptance criteria: <br/>As a player, I want to be able to acquire the Rod of Midas (a new magic object), so that I can turn objects and other players into gold <br/>AC1: The Rod must work on any object or player, no matter what size, which can be touched anywhere by the player holding the Rod <br/>AC2: Holding the Rod does not change the player holding it into gold <br/>AC3: Any object or player touched by the Rod transforms completely into gold within one millisecond <br/>AC4: The Rod appears as shown in Prototype O.W.RoM <br/>AC5: The transformation starts at the point of contact with the Rod and moves at a rate of one meter per millisecond <br/><br/>You are participating in a checklist-based review session of this user story. <br/><br/>This user story and its associated acceptance criteria contain which of the following typical defects identified by static testing in this type of work product?",
    answers: [
        {
            tresc: " Deviation from standards",
            correct: false,
            hint: "Is not correct. While deviation from standards is a typical we are not given any standard with which the user stories should comply"
        },
        {
            tresc: "Contradiction",
            correct: true,
            hint: "Is correct. Contradiction is a typical requirements defect. AC3 and AC5 conflict if the Rod is touched to an object that extends more than 1 meter in any direction from the point at which touched, since AC1 does not limit the size of the objects to be touched"
        },
        {
            tresc: "Security vulnerability",
            correct: false,
            hint: "Is not correct. While security vulnerabilities are typical defects, there is nothing here related to security"
        },
        {
            tresc: "Coverage gaps",
            correct: false,
            hint: "Is not correct. While test coverage gaps are typical defects, including missing tests for acceptance criteria, we are not provided with any information about which tests do and do not exist"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 99,
    tresc: "What is decision coverage?",
    answers: [
        {
            tresc: "The coverage of condition outcomes",
            correct: false,
            hint: "Is not correct. This is the Glossary definition of condition coverage"
        },
        {
            tresc: "Decision coverage is a synonym for statement coverage",
            correct: false,
            hint: "Is not correct. Decision coverage is a higher level of coverage and the two terms are not defined as synonyms in the Glossary"
        },
        {
            tresc: "The coverage of executable statements",
            correct: false,
            hint: "Is not correct. This is the Glossary definition of statement coverage"
        },
        {
            tresc: "The coverage of decision outcomes",
            correct: true,
            hint: "Is correct. This is the Glossary definition of coverage as applied to decisions"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 100,
    tresc: "Prior to an iteration planning session, you are studying a user story and its acceptance criteria, deriving test conditions and associated test cases from the user story as a way of applying the principle of early QA and test. What test technique are you applying?",
    answers: [
        {
            tresc: "White-box",
            correct: false,
            hint: "Is not correct. Structure-based, or white-box techniques are based on an analysis of the architecture, detailed design, internal structure, or the code of the test object"
        },
        {
            tresc: "Black-box",
            correct: true,
            hint: "Is correct. Behavior-based, or black-box techniques are based on an analysis of the appropriate test basis (e.g., formal requirements documents, specifications, use cases, user stories, or business processes), which describe functional and non-functional behavior"
        },
        {
            tresc: "Experience-based",
            correct: false,
            hint: "Is not correct. Experience-based techniques leverage the experience of developers, testers, and users to determine what should be tested"
        },
        {
            tresc: "Error guessing",
            correct: false,
            hint: "Is not correct. Error guessing is a type of experience-based testing, which is not black-box"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 101,
    tresc: "Which of the following is a true statement about exploratory testing?",
    answers: [
        {
            tresc: "More experienced testers who have tested similar applications and technologies are likely to do better than less experienced testers at exploratory testing",
            correct: true,
            hint: "Is correct. Exploratory testing is a form of experience-based testing, which benefits from the skills and experience of the tester"
        },
        {
            tresc: "Exploratory testing does not identify any additional tests beyond those that would result from formal test techniques",
            correct: false,
            hint: "Is not correct. Exploratory testing is useful to complement formal testing techniques"
        },
        {
            tresc: "The time required to complete an exploratory testing session cannot be predicted in advance",
            correct: false,
            hint: "Is not correct. In session-based test management, exploratory testing is conducted within a defined time-box, and the tester uses a test charter containing test objectives to guide the testing"
        },
        {
            tresc: "Exploratory testing can involve the use of black-box techniques but not white-box techniques",
            correct: false,
            hint: "Is not correct. Exploratory testing can incorporate the use of other black-box, white-box, and experience-based techniques referenced in this syllabus"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 102,
    tresc: "You are testing a mobile app that allows customers to access and manage their bank accounts. You are running a test suite that involves evaluating each screen and each field on each screen against a general list of user interface best practices, derived from a popular book on the topic, that maximize attractiveness, ease-of-use, and accessibility for such apps. Which of the following options BEST categorizes the test technique you are using?",
    answers: [
        {
            tresc: "Specification-based",
            correct: false,
            hint: "Is not correct. The book provides general guidance, and is not a formal requirements document, a specification, or a set of use cases, user stories, or business processes"
        },
        {
            tresc: "Exploratory",
            correct: false,
            hint: "Is not correct. While you could consider the list as a set of test charters, it more closely resembles the list of test conditions"
        },
        {
            tresc: "Checklist-based",
            correct: true,
            hint: "Is correct. The list of user interface best practices is the list of test conditions"
        },
        {
            tresc: "Error guessing",
            correct: false,
            hint: "Is not correct. The tests are not focused on failures that could occur, but rather on knowledge about what is important for the user, in terms of usability"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 103,
    tresc: "Consider a mobile app that allows customers to access and manage their bank accounts. A user story has just been added to the set of features that checks customers’ social media accounts and bank records to give personalized greetings on birthdays and other personal milestones. Which of the following test techniques could a PROGRAMMER use during a unit test of the code to ensure that coverage of situations when the greetings ARE supposed to occur and when the greetings ARE NOT supposed to occur?",
    answers: [
        {
            tresc: "Statement testing",
            correct: false,
            hint: "Is not correct. Statement testing exercises the executable statements in the code, which might result in the absence of certain greetings not being tested"
        },
        {
            tresc: "Exploratory testing",
            correct: false,
            hint: "Is not correct. Unless the test charter specifically mentioned testing both the presence and the absence of each type of greeting, coverage can be difficult to assess for an exploratory test"
        },
        {
            tresc: "State transition testing",
            correct: false,
            hint: "Is not correct. State transition testing is useful for situations where the test object responds differently to an input depending on current conditions or previous history, but in this case the test object has to decide whether the current date matches a particular milestone and thus whether to display the relevant greeting"
        },
        {
            tresc: "Decision testing",
            correct: true,
            hint: "Is correct. Decision testing involves test cases that follow the control flows that occur from a decision point, which in this case would be deciding whether a greeting should or should not be given"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 104,
    tresc: "A batch application has been in production unchanged for over two years. It runs overnight once a month to produce statements that will be e-mailed to customers. For each customer, the application goes through every account and lists every transaction on that account in the last month. It uses a nested-loop structure to process customers (outer loop), each customer’s accounts (middle loop), and each account’s transactions (inner loop). <br/><br/>One night, the batch application terminates prematurely, failing to e-mail statements to some customers, when it encounters a customer with one account for which no transactions occurred in the last month. This is a very unusual situation and has not occurred in the years since this application was placed in production. <br/><br/>While fixing the defect, a programmer asks you to recommend test techniques that are effective against this kind of defect. Which of the following test techniques would most likely have been able to detect the underlying defect?",
    answers: [
        {
            tresc: "Decision testing",
            correct: true,
            hint: "Is correct. For a loop construct, statement coverage only requires that all statements within the loop are executed, but decision coverage requires testing of both the conditions where the loop is executed and when it is bypassed"
        },
        {
            tresc: "Statement testing",
            correct: false,
            hint: "Is not correct. For a loop construct, statement coverage only requires that all statements within the loop are executed, but decision coverage requires testing of both the conditions where the loop is executed and when it is bypassed"
        },
        {
            tresc: "Checklist-based testing",
            correct: false,
            hint: "Is not correct. Checklists are based on experience, defect and failure data, knowledge about what is important for the user, and an understanding of why and how software fails, none of which is likely to have led to the inclusion of such a test condition"
        },
        {
            tresc: "Error guessing",
            correct: false,
            hint: "Is not correct. While it’s possible that someone might anticipate a developer making the mistaken assumption that there would always be at least one transaction in a month for every account, only decision testing guarantees testing of that condition"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 105,
    tresc: "You are testing an unattended gasoline pump that only accepts credit cards. Once the credit card is validated, the pump nozzle placed into the tank, and the desired grade selected, the customer enters the desired amount of fuel in gallons using the keypad. The keypad only allows the entry of digits. Fuel is sold in tenths (0.1) of a gallon, up to 50.0 gallons. <br/><br/>Which of the following is a minimum set of desired amounts that covers the equivalence partitions for this input?",
    answers: [
        {
            tresc: "0.0, 20.0, 60.0",
            correct: true,
            hint: "There are three equivalence partitions: <br/>- No sale completed (0.0 gallons) <br/>- A valid sale occurs (0.1 to 50.0 gallons) <br/>- An invalid amount is selected (50.1 or more gallons) <br/><br/>Therefor: <br/>a) Is correct. This set of input values has exactly one test per equivalence partition <br/>b) Is not correct. This set of input values has does not cover the invalid amount partition <br/>c) Is not correct. This set of input values has two tests for the valid sale equivalence partition, which is not the minimum <br/>d) Is not correct. This set of input values covers the three-point boundary values for the two boundaries, not the minimum number required to cover the equivalence partitions"
        },
        {
            tresc: "0.0, 0.1, 50.0",
            correct: false,
            hint: "There are three equivalence partitions: <br/>- No sale completed (0.0 gallons) <br/>- A valid sale occurs (0.1 to 50.0 gallons) <br/>- An invalid amount is selected (50.1 or more gallons) <br/><br/>Therefor: <br/>a) Is correct. This set of input values has exactly one test per equivalence partition <br/>b) Is not correct. This set of input values has does not cover the invalid amount partition <br/>c) Is not correct. This set of input values has two tests for the valid sale equivalence partition, which is not the minimum <br/>d) Is not correct. This set of input values covers the three-point boundary values for the two boundaries, not the minimum number required to cover the equivalence partitions"
        },
        {
            tresc: "0.0, 0.1, 50.0, 70.0",
            correct: false,
            hint: "There are three equivalence partitions: <br/>- No sale completed (0.0 gallons) <br/>- A valid sale occurs (0.1 to 50.0 gallons) <br/>- An invalid amount is selected (50.1 or more gallons) <br/><br/>Therefor: <br/>a) Is correct. This set of input values has exactly one test per equivalence partition <br/>b) Is not correct. This set of input values has does not cover the invalid amount partition <br/>c) Is not correct. This set of input values has two tests for the valid sale equivalence partition, which is not the minimum <br/>d) Is not correct. This set of input values covers the three-point boundary values for the two boundaries, not the minimum number required to cover the equivalence partitions"
        },
        {
            tresc: "-0.1, 0.0, 0.1, 49.9, 50.0, 50.1",
            correct: false,
            hint: "There are three equivalence partitions: <br/>- No sale completed (0.0 gallons) <br/>- A valid sale occurs (0.1 to 50.0 gallons) <br/>- An invalid amount is selected (50.1 or more gallons) <br/><br/>Therefor: <br/>a) Is correct. This set of input values has exactly one test per equivalence partition <br/>b) Is not correct. This set of input values has does not cover the invalid amount partition <br/>c) Is not correct. This set of input values has two tests for the valid sale equivalence partition, which is not the minimum <br/>d) Is not correct. This set of input values covers the three-point boundary values for the two boundaries, not the minimum number required to cover the equivalence partitions"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 106,
    tresc: "You are testing an e-commerce system that sells cooking supplies such as spices, flour, and other items in bulk. The units in which the items are sold are either grams (for spices and other expensive items) or kilograms (for flour and other inexpensive items). Regardless of the units, the smallest valid order amount is 0.5 units (e.g., half a gram of cardamom pods) and the largest valid order amount is 25.0 units (e.g., 25 kilograms of sugar). The precision of the units field is 0.1 units. <br/><br/>Which of the following is a set of input values that cover the boundary values with two-point boundary values for this field?",
    answers: [
        {
            tresc: "0.3, 10.0, 28.0",
            correct: false,
            hint: "There are three equivalence partitions, with the boundaries as shown: <br/>- Invalid too low (0.4 and below) <br/>- Valid (0.5 to 25.0) <br/>- Invalid too high (25.1 and above) <br/><br/>Therefor: <br/>a) Is not correct. None of those four boundary values are included in this set of tests. These tests do cover the equivalence partitions <br/>b) Is not correct. All of these four boundary values are included in this set of tests, but two additional values are included, one for each boundary. These are the values associated with three-point boundary value analysis <br/>c) Is correct. Each of those four two-point boundary values are included in this set of tests <br/>d) Is not correct. These four values are all included in the valid partition"
        },
        {
            tresc: "0.4, 0.5, 0.6, 24,9,25,0, 25.1",
            correct: false,
            hint: "There are three equivalence partitions, with the boundaries as shown: <br/>- Invalid too low (0.4 and below) <br/>- Valid (0.5 to 25.0) <br/>- Invalid too high (25.1 and above) <br/><br/>Therefor: <br/>a) Is not correct. None of those four boundary values are included in this set of tests. These tests do cover the equivalence partitions <br/>b) Is not correct. All of these four boundary values are included in this set of tests, but two additional values are included, one for each boundary. These are the values associated with three-point boundary value analysis <br/>c) Is correct. Each of those four two-point boundary values are included in this set of tests <br/>d) Is not correct. These four values are all included in the valid partition"
        },
        {
            tresc: "0.4, 0.5, 25.0 25.1",
            correct: true,
            hint: "There are three equivalence partitions, with the boundaries as shown: <br/>- Invalid too low (0.4 and below) <br/>- Valid (0.5 to 25.0) <br/>- Invalid too high (25.1 and above) <br/><br/>Therefor: <br/>a) Is not correct. None of those four boundary values are included in this set of tests. These tests do cover the equivalence partitions <br/>b) Is not correct. All of these four boundary values are included in this set of tests, but two additional values are included, one for each boundary. These are the values associated with three-point boundary value analysis <br/>c) Is correct. Each of those four two-point boundary values are included in this set of tests <br/>d) Is not correct. These four values are all included in the valid partition"
        },
        {
            tresc: "0.5, 0.6, 24.9, 25.0",
            correct: false,
            hint: "There are three equivalence partitions, with the boundaries as shown: <br/>- Invalid too low (0.4 and below) <br/>- Valid (0.5 to 25.0) <br/>- Invalid too high (25.1 and above) <br/><br/>Therefor: <br/>a) Is not correct. None of those four boundary values are included in this set of tests. These tests do cover the equivalence partitions <br/>b) Is not correct. All of these four boundary values are included in this set of tests, but two additional values are included, one for each boundary. These are the values associated with three-point boundary value analysis <br/>c) Is correct. Each of those four two-point boundary values are included in this set of tests <br/>d) Is not correct. These four values are all included in the valid partition"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 109,
    tresc: "You are testing an e-commerce system that sells cooking supplies such as spices, flour, and other items in bulk. The units in which the items are sold are either grams (for spices and other expensive items) or kilograms (for flour and other inexpensive items). Regardless of the units, the smallest valid order amount is 0.5 units (e.g., half a gram of cardamom pods) and the largest valid order amount is 25.0 units (e.g., 25 kilograms of sugar). The precision of the units’ field is 0.1 units. <br/><br/>Which of the following is a MINIMAL set of input values that cover the equivalence partitions for this field?",
    answers: [
        {
            tresc: "10.0, 28.0",
            correct: false,
            hint: "There are three equivalence partitions, with the boundaries as shown: </br>- Invalid too low (0.4 and below) </br>- Valid (0.5 to 25.0) </br>- Invalid too high (25.1 and above) </br></br>Therefor: </br>a) Is not correct. Only two of the equivalence partitions are covered in this set of tests </br>b) Is not correct. Each of those four boundary values are included in this set of tests, but the question asked for equivalence partition coverage with minimal tests, so either 0.5 or 25.0 should be dropped </br>c) Is correct. Each of these three equivalence partitions are covered in this set of tests </br>d) Is not correct. Only one of those equivalence partitions is covered by this test"
        },
        {
            tresc: "0.4, 0.5, 25.0, 25.1",
            correct: false,
            hint: "There are three equivalence partitions, with the boundaries as shown: </br>- Invalid too low (0.4 and below) </br>- Valid (0.5 to 25.0) </br>- Invalid too high (25.1 and above) </br></br>Therefor: </br>a) Is not correct. Only two of the equivalence partitions are covered in this set of tests </br>b) Is not correct. Each of those four boundary values are included in this set of tests, but the question asked for equivalence partition coverage with minimal tests, so either 0.5 or 25.0 should be dropped </br>c) Is correct. Each of these three equivalence partitions are covered in this set of tests </br>d) Is not correct. Only one of those equivalence partitions is covered by this test"
        },
        {
            tresc: "0.2, 0.9, 29.5",
            correct: true,
            hint: "There are three equivalence partitions, with the boundaries as shown: </br>- Invalid too low (0.4 and below) </br>- Valid (0.5 to 25.0) </br>- Invalid too high (25.1 and above) </br></br>Therefor: </br>a) Is not correct. Only two of the equivalence partitions are covered in this set of tests </br>b) Is not correct. Each of those four boundary values are included in this set of tests, but the question asked for equivalence partition coverage with minimal tests, so either 0.5 or 25.0 should be dropped </br>c) Is correct. Each of these three equivalence partitions are covered in this set of tests </br>d) Is not correct. Only one of those equivalence partitions is covered by this test"
        },
        {
            tresc: "12.3",
            correct: false,
            hint: "There are three equivalence partitions, with the boundaries as shown: </br>- Invalid too low (0.4 and below) </br>- Valid (0.5 to 25.0) </br>- Invalid too high (25.1 and above) </br></br>Therefor: </br>a) Is not correct. Only two of the equivalence partitions are covered in this set of tests </br>b) Is not correct. Each of those four boundary values are included in this set of tests, but the question asked for equivalence partition coverage with minimal tests, so either 0.5 or 25.0 should be dropped </br>c) Is correct. Each of these three equivalence partitions are covered in this set of tests </br>d) Is not correct. Only one of those equivalence partitions is covered by this test"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 110,
    tresc: "You are working as a tester on an online banking system. Availability is considered one of the top products (quality) risks for the system. You find a reproducible failure that results in customers losing their connections to the bank Web site when transferring funds between common types of accounts and being unable to reconnect for between three and five minutes. <br/><br/>Which of the following would be a good summary for a defect report for this failure, one that captures both the essence of the failure and its impact on stakeholders?",
    answers: [
        {
            tresc: "Web server logs show error 0x44AB27 when running test 07.005, which is not an expected error message in /tmp filesystem",
            correct: false,
            hint: "Is not correct. While this information is useful for developers, it does not provide managers with a sense of the impact on product quality"
        },
        {
            tresc: "Developers have introduced major availability defect which will seriously upset our customers",
            correct: false,
            hint: "Is not correct. This summary does not provide developers or managers with the necessary information and attacks the developers"
        },
        {
            tresc: "Performance is slow and reliability flaky under load",
            correct: false,
            hint: "Is not correct. This summary does not provide developers or managers with the necessary information and attacks the developers"
        },
        {
            tresc: "Typical funds-transfer transaction results in termination of customer session, with a delay in availability when attempting to reconnect",
            correct: true,
            hint: "Is correct. This summary gives a good sense of the failure and its impact"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 112,
    tresc: "Which of the following is a common test metric often used to monitor BOTH test preparation and test execution?",
    answers: [
        {
            tresc: "Test case status",
            correct: true,
            hint: "Is correct. Percentage of test cases prepared is a common metric during test preparation while percentage of test cases passed, failed, not run, etc., are common during test execution"
        },
        {
            tresc: "Defect find/fix rates",
            correct: false,
            hint: "Is not correct. Defect reports are typically filed during test execution, based on failures found"
        },
        {
            tresc: "Test environment preparation",
            correct: false,
            hint: "Is not correct. Test environment preparation is part implementation and would generally be complete before test execution"
        },
        {
            tresc: "Estimated cost to find the next defect",
            correct: false,
            hint: "Is not correct. Defects are typically reported during test execution, based on failures found, so the cost to find the next defect is available during test execution only"
        },
    ],
    right: 0,
    lang: "eng"
},
{
    id: 113,
    tresc: "Which of the following are two factors that can be used to determine the level of risk?",
    answers: [
        {
            tresc: "Testing and development",
            correct: false,
            hint: "The level of risk will be determined by the likelihood of an adverse event happening and the impact (the harm) from that event. <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "Dynamic and reactive",
            correct: false,
            hint: "The level of risk will be determined by the likelihood of an adverse event happening and the impact (the harm) from that event. <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "Statement and decision",
            correct: false,
            hint: "The level of risk will be determined by the likelihood of an adverse event happening and the impact (the harm) from that event. <br/><br/>Thus, option d) is correct."
        },
        {
            tresc: "Likelihood and impact",
            correct: true,
            hint: "The level of risk will be determined by the likelihood of an adverse event happening and the impact (the harm) from that event. <br/><br/>Thus, option d) is correct."
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 114,
    tresc: "You are working as a project manager on an in-house banking software project. To prevent rework and excessive find/fix/retest cycles, the following process has been put in place for resolving a defect once it is found in the test lab: <br/><br/>a) The assigned developer finds and fixes the defect, then creates an experimental build <br/>b) A peer developer reviews, unit tests, and confirmation tests the defect fix on his/her desktop <br/>c) A tester – usually the one who found the defect – confirmation tests the defect fix in the development environment <br/>d) Once a day, a new release with all confirmed defect fixes included, is installed in the test environment <br/>e) The same tester from step 3 confirmation tests the defect fix in the test environment <br/><br/>Nevertheless, a large number of defects which the testers confirmed as fixed in the development environment (in step 3) are somehow failing confirmation testing in the test environment, with the resulting rework and cycle time outcomes. You have the highest confidence in your testers, and have ruled out mistakes or omissions in step 3. <br/><br/>Which of the following is the MOST likely part of the process to check next?",
    answers: [
        {
            tresc: "The activity of developers, who may not be adequately testing in step 2",
            correct: false,
            hint: "Is not correct. If inadequate developer testing were the problem, the confirmation test would not pass in step 3"
        },
        {
            tresc: "The activity of testers, who may be confused about what to test in step 5",
            correct: false,
            hint: "Is not correct. The same tester who successfully performed the confirmation test in step 3 is repeating it in step 5"
        },
        {
            tresc: "Configuration management, which may not be maintaining the integrity of the product in step 4",
            correct: true,
            hint: "Is correct. Configuration management maintains the integrity of the software. If a test that passes in step 3 fails in step 5, then something is different between those two steps. One possible difference is the test object, the option listed here. Another possible difference is the between the development environment and the test environment, but that is not an option listed here"
        },
        {
            tresc: "The activity of developers, who may not be fixing defects properly in step 1",
            correct: false,
            hint: "Is not correct. If the developers were not fixing the defect, the confirmation test would not pass in step 3"
        },
    ],
    right: 2,
    lang: "eng"
},
{
    id: 115,
    tresc: "You are engaged in planning a test effort for a new mobile banking application. As part of estimation, you first meet with the proposed testers and others on the project. The team is wellcoordinated and has already worked on similar projects. To verify the resulting estimate, you then refer to some industry averages for testing effort and costs on similar projects, published by a reputable consultant. <br/><br/>Which statement accurately describes your estimation approach?",
    answers: [
        {
            tresc: "A simultaneous expert-based and metrics-based approach",
            correct: false,
            hint: "Is not correct. The two methods are used sequentially, not simultaneously"
        },
        {
            tresc: "Primarily an expert-based approach, augmented with a metrics-based approach",
            correct: true,
            hint: "Is correct. The primary sources of information come from the experienced testers, who are the experts. The consultant’s industry averages augment the original estimate from published metrics"
        },
        {
            tresc: "Primarily a metrics-based approach, augmented with an expert-based approach",
            correct: false,
            hint: "Is not correct. The expert-based approach is the primary approach, augmented by a metrics-based approach"
        },
        {
            tresc: "Primarily planning poker, checked by velocity from burndown charts",
            correct: false,
            hint: "Is not correct. We do not know if this project is following Agile methods, and burndown charts do not come from external consultants"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 116,
    tresc: "During a project following Agile methods, you find a discrepancy between the developer’s interpretation of an acceptance criteria and the product owner’s interpretation, which you bring up during a user story refinement session. Which of the following is a benefit of test independence exemplified by this situation?",
    answers: [
        {
            tresc: "Recognizing different kinds of failures",
            correct: false,
            hint: "Is not correct. While recognizing different kinds of failures is a benefit of tester independence, in the scenario here no code yet exists that can fail, and the problem is that the developer and product owner are both assuming different things about the acceptance criteria"
        },
        {
            tresc: "Taking primary responsibility for quality",
            correct: false,
            hint: "Is not correct. Developers losing a sense of responsibility for quality is a drawback, not a benefit"
        },
        {
            tresc: "Removing a defect early",
            correct: false,
            hint: "Is not correct. While the effect of the discovery of this disagreement is the earlier removal of the defect, prior to coding, defects can be discovered early by various people, not just independent testers"
        },
        {
            tresc: "Challenging stakeholder assumptions",
            correct: true,
            hint: "Is correct. Challenging stakeholder assumptions is a benefit of tester independence, and here the developer and product owner are both assuming different things about the acceptance criteria"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 117,
    tresc: "You are defining the process for carrying out product risk analysis as part of each iteration on an Agile project. Which of the following is the proper place to document this process in a test plan?",
    answers: [
        {
            tresc: "Scope of testing",
            correct: false,
            hint: "Is not correct. While scope is a topic addressed in a test plan, the implementation of a risk-based testing strategy on this project is the approach, so this topic should be addressed in that section"
        },
        {
            tresc: "Approach of testing",
            correct: true,
            hint: "Is correct. Approach is a topic addressed in a test plan and the implementation of a risk-based testing strategy on this project is the approach"
        },
        {
            tresc: "Metrics of testing",
            correct: false,
            hint: "Is not correct. While metrics for test monitoring and control is a topic addressed in a test plan, the implementation of a risk-based testing strategy on this project is the approach, so this topic should be addressed in that section"
        },
        {
            tresc: "Configuration management of the test object",
            correct: false,
            hint: "Is not correct. Configuration management is not a topic addressed in a test plan"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 118,
    tresc: "Consider the following list of undesirable outcomes that could occur on a mobile app development effort: <br/><br/>A. Incorrect totals on reports <br/>B. Change to acceptance criteria during acceptance testing <br/>C. Users find the soft keyboard too hard to use with your app <br/>D. System responds too slowly to user input during search string entry <br/>E. Testers not allowed to report test results in daily standup meetings <br/><br/>Which of the following properly classifies these outcomes as project and product risks?",
    answers: [
        {
            tresc: "Product risks: B, E; Project risks: A, C, D",
            correct: false,
            hint: "Product risks exist when a work product may fail to satisfy legitimate needs, while project risks are situations that could have a negative impact on the project’s ability to achieve its objectives. So: <br/>A. Incorrect totals on reports = product risk <br/>B. Change to acceptance criteria during acceptance testing = project risk <br/>C. Users find the soft keyboard too hard to use with your app = product risk <br/>D. System responds too slowly to user input during search string entry = product risk <br/>E. Testers not allowed to report test results in daily standup meetings = project risk <br/><br/>Therefore: <br/>a) Is not correct. This list is entirely backwards <br/>b) Is correct <br/>c) Is not correct. While e is about product quality and product risks, the failure to communicate test results is a project risk per the syllabus <br/>d) Is not correct. Product risks can be functional and non-functional, so d is also a product risk"
        },
        {
            tresc: "Product risks: A, C, D; Project risks: B, E",
            correct: true,
            hint: "Product risks exist when a work product may fail to satisfy legitimate needs, while project risks are situations that could have a negative impact on the project’s ability to achieve its objectives. So: <br/>A. Incorrect totals on reports = product risk <br/>B. Change to acceptance criteria during acceptance testing = project risk <br/>C. Users find the soft keyboard too hard to use with your app = product risk <br/>D. System responds too slowly to user input during search string entry = product risk <br/>E. Testers not allowed to report test results in daily standup meetings = project risk <br/><br/>Therefore: <br/>a) Is not correct. This list is entirely backwards <br/>b) Is correct <br/>c) Is not correct. While e is about product quality and product risks, the failure to communicate test results is a project risk per the syllabus <br/>d) Is not correct. Product risks can be functional and non-functional, so d is also a product risk"
        },
        {
            tresc: "Product risks: A, C, D, E Project risks: B",
            correct: false,
            hint: "Product risks exist when a work product may fail to satisfy legitimate needs, while project risks are situations that could have a negative impact on the project’s ability to achieve its objectives. So: <br/>A. Incorrect totals on reports = product risk <br/>B. Change to acceptance criteria during acceptance testing = project risk <br/>C. Users find the soft keyboard too hard to use with your app = product risk <br/>D. System responds too slowly to user input during search string entry = product risk <br/>E. Testers not allowed to report test results in daily standup meetings = project risk <br/><br/>Therefore: <br/>a) Is not correct. This list is entirely backwards <br/>b) Is correct <br/>c) Is not correct. While e is about product quality and product risks, the failure to communicate test results is a project risk per the syllabus <br/>d) Is not correct. Product risks can be functional and non-functional, so d is also a product risk"
        },
        {
            tresc: "Product risks: A, C Project risks: B, D, E",
            correct: false,
            hint: "Product risks exist when a work product may fail to satisfy legitimate needs, while project risks are situations that could have a negative impact on the project’s ability to achieve its objectives. So: <br/>A. Incorrect totals on reports = product risk <br/>B. Change to acceptance criteria during acceptance testing = project risk <br/>C. Users find the soft keyboard too hard to use with your app = product risk <br/>D. System responds too slowly to user input during search string entry = product risk <br/>E. Testers not allowed to report test results in daily standup meetings = project risk <br/><br/>Therefore: <br/>a) Is not correct. This list is entirely backwards <br/>b) Is correct <br/>c) Is not correct. While e is about product quality and product risks, the failure to communicate test results is a project risk per the syllabus <br/>d) Is not correct. Product risks can be functional and non-functional, so d is also a product risk"
        },
    ],
    right: 1,
    lang: "eng"
},
{
    id: 119,
    tresc: "You have just completed a pilot project for a regression testing tool. You understand the tool much better and have tailored your testing process to it. You have standardized an approach to using the tool and its associated work products. Which of the following is a typical test automation pilot project goal that remains to be carried out?",
    answers: [
        {
            tresc: "Learn more details about the too",
            correct: false,
            hint: "Is not correct. This is an objective for a pilot, but you have achieved it because you understand the tool much better due to the pilot"
        },
        {
            tresc: "See how the tool would fit with existing processes and practices",
            correct: false,
            hint: "Is not correct. This is an objective for a pilot, but you have achieved it because you have tailoring your testing processes"
        },
        {
            tresc: "Decide on standard ways of using, managing, storing, and maintaining the tool and the test assets",
            correct: false,
            hint: "Is not correct. This is an objective for a pilot, but you have achieved it because you have standardized an approach to using the tool and its associated work products"
        },
        {
            tresc: "Assess whether the benefits will be achieved at reasonable cost",
            correct: true,
            hint: "Is correct. Assessing the benefits and configuring the metrics collection are the two objectives missing from this list"
        },
    ],
    right: 3,
    lang: "eng"
},
{
    id: 120,
    tresc: "Which of the following tools is most useful for reporting test metrics?",
    answers: [
        {
            tresc: "Test management tool",
            correct: true,
            hint: "Is correct. Test management tools support the activities associated with test manager including metrics"
        },
        {
            tresc: "Static analysis tool",
            correct: false,
            hint: "Is not correct. Static code analysis metrics would have to do with the code only, not testing as a whole"
        },
        {
            tresc: "Coverage tool",
            correct: false,
            hint: "Is not correct. These tools report on test basis coverage and code coverage only, not testing as a whole"
        },
        {
            tresc: "Model-Based testing tools",
            correct: false,
            hint: "Is not correct. Model-Based testing tools focus on one specific area, not testing as a whole"
        },
    ],
    right: 0,
    lang: "eng"
},
]
