
(function() {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': '+this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans,callback) {
        var sc;
        if (this.correct === ans) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answers, try again');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(sc) {
        console.log('Your current score is: ' + sc);
        console.log('-------------------');
    }

    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    var q1 = new Question('What\'s my name?',['Jarvis','James','Ian'],0);

    var q2 = new Question('Is JavaScript the coolest programming language in the world?',['Yes','No'], 0);

    var q3 = new Question('What does best describe coding?',['Boring','Hard','Fun','Tediuos'],2);

    var questions = [q1,q2,q3];

    function nextQuestion() {
        var n = Math.floor(Math.random()*questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');
        
        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer),keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();
