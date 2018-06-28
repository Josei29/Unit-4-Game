$(document).ready(function() {
    $("#Restart").hide();
    
    // Creating The 4 Characters
    var ObiWan = {
        Name: "Obi-Wan Kenobi",
        HP: 120,
        Attack: 10,
        Counter: 15,
    };

    var Yoda = {
        Name: "Yoda",
        HP: 200,
        Attack: 25,
        Counter: 30,
    };

    var Sidious = {
        Name: "Darth Sidious",
        HP: 150,
        Attack: 15,
        Counter: 20,
    };

    var Vader = {
        Name: "Darth Vader",
        HP: 180,
        Attack: 20,
        Counter: 25,
    };

    // Creating The Display
    // Obi-Wan
    var Name1 = $("<div>").text(ObiWan.Name);
    $("#ObiWan").prepend(Name1);
    var HP1 = $("<div>").text(ObiWan.HP);
    $("#ObiWan").append(HP1);

    // Yoda
    var Name2 = $("<div>").text(Yoda.Name);
    $("#Yoda").prepend(Name2);
    var HP2 = $("<div>").text(Yoda.HP);
    $("#Yoda").append(HP2);

    // Darth Sidious
    var Name3 = $("<div>").text(Sidious.Name);
    $("#Sidious").prepend(Name3);
    var HP3 = $("<div>").text(Sidious.HP);
    $("#Sidious").append(HP3);

    // Darth Vader
    var Name4 = $("<div>").text(Vader.Name);
    $("#Vader").prepend(Name4);
    var HP4 = $("<div>").text(Vader.HP);
    $("#Vader").append(HP4);

    // Choose Your Character
    var YourCharacter = false;
    var Character;
    
    if (YourCharacter === false) {
        $("#ObiWan").on("click", function() { 
            $("#ObiWan").css("background-color", "Green");
            $("#ObiWan").css("position", "absolute");
            $("#ObiWan").removeClass( "Character" );
            YourCharacter = true;
            Character = ObiWan;
            Defender();
        });
    } // If

    if (YourCharacter === false) {
        $("#Sidious").on("click", function() {
            $("#Sidious").css("background-color", "Green");
            $("#Sidious").css("position", "absolute");
            $("#Sidious").removeClass( "Character" );
            YourCharacter = true;
            Character = Sidious;
            Defender();
        });
    } // If
    
    if (YourCharacter === false) {
        $("#Vader").on("click", function() {
            $("#Vader").css("background-color", "Green");
            $("#Vader").css("position", "absolute");
            $("#Vader").removeClass( "Character" );
            YourCharacter = true;
            Character = Vader;
            Defender();
        });
    } // If

    if (YourCharacter === false) {
        $("#Yoda").on("click", function() {
            $("#Yoda").css("background-color", "Green");
            $("#Yoda").css("position", "absolute");
            $("#Yoda").removeClass( "Character" );
            YourCharacter = true;
            Character = Yoda;
            Defender();
        });
    } // If

    function Defender() {
        $(".Character").css("background-color", "yellow", "!important");
        $(".Character").animate({ top: "240px" });
        console.log(Character.Name);
        Enemy();
    } // Defender

    // Choose Defender
    var YourDefender = false;
    var Enemies = 3;
    var Defender;

    function Enemy() {
        if ((Enemies > 0) && (YourCharacter === true) && (YourDefender === false)) {
            console.log("Choose Defender");
            if (Character == ObiWan) {
                $("#Sidious").on("click", function() {
                    $("#Sidious").removeClass("Character");
                    $("#Sidious").animate({ top: "600px" });
                    $("#Sidious").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = Sidious;
                    Fight();
                }); // Function
                $("#Vader").on("click", function() {
                    $("#Vader").removeClass("Character");
                    $("#Vader").animate({ top: "600px" });
                    $("#Vader").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = Vader;
                    Fight();
                }); // Function
                $("#Yoda").on("click", function() {
                    $("#Yoda").removeClass("Character");
                    $("#Yoda").animate({ top: "600px" });
                    $("#Yoda").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = Yoda;
                    Fight();
                }); // Function
            }; // If ObiWan
            
            if (Character == Sidious) {
                $("#ObiWan").on("click", function() {
                    $("#ObiWan").removeClass("Character");
                    $("#ObiWan").animate({ top: "600px" });
                    $("#ObiWan").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = ObiWan;
                    Fight();
                }); // Function
                $("#Vader").on("click", function() {
                    $("#Vader").removeClass("Character");
                    $("#Vader").animate({ top: "600px" });
                    $("#Vader").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = Vader;
                    Fight();
                }); // Function
                $("#Yoda").on("click", function() {
                    $("#Yoda").removeClass("Character");
                    $("#Yoda").animate({ top: "600px" });
                    $("#Yoda").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = Yoda;
                    Fight();
                }); // Function
            }; // If Sidious

            if (Character == Vader) {
                $("#ObiWan").on("click", function() {
                    $("#ObiWan").removeClass("Character");
                    $("#ObiWan").animate({ top: "600px" });
                    $("#ObiWan").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = ObiWan;
                    Fight();
                }); // Function
                $("#Sidious").on("click", function() {
                    $("#Sidious").removeClass("Character");
                    $("#Sidious").animate({ top: "600px" });
                    $("#Sidious").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = Sidious;
                    Fight();
                }); // Function
                $("#Yoda").on("click", function() {
                    $("#Yoda").removeClass("Character");
                    $("#Yoda").animate({ top: "600px" });
                    $("#Yoda").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = Yoda;
                    Fight();
                }); // Function
            }; // If Vader
            
            if (Character == Yoda) {
                $("#ObiWan").on("click", function() {
                    $("#ObiWan").removeClass("Character");
                    $("#ObiWan").animate({ top: "600px" });
                    $("#ObiWan").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = ObiWan;
                    Fight();
                }); // Function
                $("#Vader").on("click", function() {
                    $("#Vader").removeClass("Character");
                    $("#Vader").animate({ top: "600px" });
                    $("#Vader").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = Vader;
                    Fight();
                }); // Function
                $("#Sidious").on("click", function() {
                    $("#Sidious").removeClass("Character");
                    $("#Sidious").animate({ top: "600px" });
                    $("#Sidious").css("background-color", "red", "!important");
                    YourDefender = true;
                    Defender = Sidious;
                    Fight();
                }); // Function
            }; // If Yoda

        }; // If
    } // Function Enemy

    function Fight() {
        if ((YourCharacter === true) && (YourDefender === true) && (Character.HP > 0)) {
            $("button").on("click", function() { 
                Attack();
            });
        } // If
        else if (Character.HP < 0) {
            Lose();
        }
        else if (Enemies < 1) {
            Win();
        }
    } // Function Fight

    function Attack() {
        console.log("You Attacked Me");
        Defender.HP = Defender.HP - Character.Attack;
        Character.Attack += Character.Attack;
        console.log(Defender.HP);
        if (Defender.HP < 1) {
            if (Defender == ObiWan) {
                $("#ObiWan").hide();
                YourDefender = false;
                Enemies--;
                console.log("Enemies Left: " + Enemies);
                Enemy();
            }
            if (Defender == Sidious) {
                $("#Sidious").hide();
                YourDefender = false;
                Enemies--;
                console.log("Enemies Left: " + Enemies);
                Enemy();
            }
            if (Defender == Vader) {
                $("#Vader").hide();
                YourDefender = false;
                Enemies--;
                console.log("Enemies Left: " + Enemies);
                Enemy();
            }
            if (Defender == Yoda) {
                $("#Yoda").hide();
                YourDefender = false;
                Enemies--;
                console.log("Enemies Left: " + Enemies);
                Enemy();
            }
        } // If
        else {
            Counter();
        } // Else 
    } // Attack

    function Counter() {
        Character.HP = Character.HP - Defender.Counter;
        console.log(Character.HP);
    } // Counter

    function Lose() {
        console.log("You Lose!");
        $("#Restart").show();
    } // Lose

    function Win() {
        console.log("You Won");
        $("#Restart").show();
    } // Win

    $("#Restart").on("click", function(){ 
        YourCharacter = false;
        YourDefender = false;
    });
}) // Document Ready