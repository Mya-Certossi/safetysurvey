// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "What is the recommended posture for sitting while playing video games?",
                choices: [
                    "Slouched with legs crossed", "Leaning forward with hunched shoulders", "Sitting upright with feet flat on the floor and back supported", "Lying down on the couch"
                ],
                correctAnswer: "Sitting upright with feet flat on the floor and back supported"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "How often should you take breaks while playing video games?",
                choices: [
                    "Every hour", "Every four hours", "Only when you feel tired", "Never, breaks interrupt the gaming experience"
                ],
                correctAnswer: "Every hour"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Proper Gaming Ergonomics",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Proper Gaming Ergonomics. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}