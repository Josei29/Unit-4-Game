$(document).ready(function() {
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
    
    $("#ObiWan").on("click", function() { 
        $("#ObiWan").css("background-color", "Green");
        $("#ObiWan").css("position", "absolute");
        $("#ObiWan").removeClass( "Character" );
        YourCharacter = true;
        Character = ObiWan;
        Defender();
    });

    $("#Sidious").on("click", function() {
        $("#Sidious").css("background-color", "Green");
        $("#Sidious").css("position", "absolute");
        $("#Sidious").removeClass( "Character" );
        YourCharacter = true;
        Character = Sidious;
        Defender();
    });
    
    $("#Vader").on("click", function() {
        $("#Vader").css("background-color", "Green");
        $("#Vader").css("position", "absolute");
        $("#Vader").removeClass( "Character" );
        YourCharacter = true;
        Character = Vader;
        Defender();
    });

    $("#Yoda").on("click", function() {
        $("#Yoda").css("background-color", "Green");
        $("#Yoda").css("position", "absolute");
        $("#Yoda").removeClass( "Character" );
        YourCharacter = true;
        Character = Yoda;
        Defender();
    });

    function Defender() {
        $(".Character").css("background-color", "red", "!important");
        $(".Character").animate({ top: "240px" });
        $(".Character").addClass("Enemy");
        console.log(Character.Name);
        Enemy();
    }

    // Choose Defender
    var YourDefender = false;
    var Enemies = 3;
    var Defender;

    function Enemy() {
        if ((Enemies >= 1) && (YourCharacter == true)) {
            console.log("Choose Defender");
            $(".Enemy").on("click", function() {
                $(".Enemy").removeClass(".Character");
                $(".Enemy").animate({ top: "800px" });
                YourDefender = true;
                $(".Enemy") = Defender;
            }) // Character On Click
        } // If
    }

    if ((YourCharacter == true) && (YourDefender == true) && (Character.HP > 0)) {
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

    function Attack() {
        console.log("You Attacked Me");
        Defender.HP = Defender.HP - Character.Attack;
        Character.Attack += Character.Attack;
        if (Defender.HP < 1) {
            YourDefender = false;
            Enemies--;
            Enemy();
        } // If
        else {
            Counter();
        } // Else 
    } // Attack

    function Counter() {
        Character.HP = Character.HP - Defender.Counter;
    } // Counter

    function Lose() {
        console.log("You Lose!");
    }

    function Win() {
        console.log("You Won");
    }
}) // Document Ready