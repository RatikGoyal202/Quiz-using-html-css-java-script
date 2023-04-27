var ques1 = ["Electrons move faster than the speed of light.",
            "Muddy York is a nickname for New York in the Winter.",
            "Copyrights depreciate over time.",
            "There are 207 bones present in a human body",
            "The Big Apple is a nickname given to Washington D.C in 1971."
        ];

        var option1 = ["<button class=button1 onclick=incorr()>True</button><br /><br /><button class=button1 onclick=corr()>False</button>"];
        var option2 = ["<button class=button1 onclick=corr()>False</button><br /><br /><button class=button1 onclick=incorr()>True</button>"];
        var option3 = ["<button class=button1 onclick=corr()>True</button><br /><br /><button class=button1 onclick=incorr()>False</button>"];
        var option4 = ["<button class=button1 onclick=incorr()>True</button><br /><br /><button class=button1 onclick=corr()>False</button>"];
        var option5 = ["<button class=button1 onclick=corr()>False</button><br /><br /><button class=button1 onclick=incorr()>True</button>"];


        var a = 0;
        a++;
        var b = 0;
        b++;


        function fnc() {
            alert("Your current score is" + b-1);
        }



        function start1() {
            disappear01.innerHTML = "";
            question.innerHTML = ques1[0];
            options.innerHTML = option1;
            number1.innerHTML = a++;
            next2.innerHTML = "<button class=button01 onclick=next1()>next</button>";
            next2.innerHTML = "<button class=button01 onclick=repeat1()>Restart</button>";
            
        }

        function corr() {
            answer1.innerHTML = "Correct";
            options.innerHTML = "";
            next2.innerHTML = "<button class=button01 onclick=next1()>Next</button>";
            b++;
        }

        function incorr() {
            answer1.innerHTML = "Incorrect";
            options.innerHTML = "";
            next2.innerHTML = "<button class=button01 onclick=next1()>Next</button>";
        }

        function next1() {
            if (a == "2") {
                question.innerHTML = ques1[1];
                options.innerHTML = option2;
                answer1.innerHTML = "";
                number1.innerHTML = a++;
                next2.innerHTML = "<button class=button01 onclick=repeat1()>Restart</button>";
            }

            else if (a == "3") {
                question.innerHTML = ques1[2];
                options.innerHTML = option3;
                answer1.innerHTML = "";
                number1.innerHTML = a++;
                next2.innerHTML = "<button class=button01 onclick=repeat1()>Restart</button>";
            }

            else if (a == "4") {
                question.innerHTML = ques1[3];
                options.innerHTML = option4;
                answer1.innerHTML = "";
                number1.innerHTML = a++;
                next2.innerHTML = "<button class=button01 onclick=repeat1()>Restart</button>";
            }

            else if (a == "5") {
                question.innerHTML = ques1[4];
                options.innerHTML = option5;
                answer1.innerHTML = "";
                number1.innerHTML = a++;
                next2.innerHTML = "<button class=button01 onclick=repeat1()>Restart</button>";
            } else {
                question.innerHTML = "End of Quiz";
                options.innerHTML = "";
                answer1.innerHTML = "";
                next2.innerHTML = "<button class=button01 onclick=repeat1()>Restart</button>";
            }
        }

        function repeat1() {
            location.reload();
        }