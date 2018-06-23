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
    
    $("#ObiWan").on("click", function() { 
        $("#ObiWan").css("background-color", "Green");
        $("#ObiWan").css("position", "absolute");
        $("#ObiWan").data(ObiWan);
        $("#ObiWan").removeClass( "Character" );
        YourCharacter = true;
        var Char = $(this);
        Defender();
    });

    $("#Sidious").on("click", function() {
        $("#Sidious").css("background-color", "Green");
        $("#Sidious").css("position", "absolute");
        $("#Sidious").data(Sidious);
        $("#Sidious").removeClass( "Character" );
        YourCharacter = true;
        var Char = $(this);
        Defender();
    });
    
    $("#Vader").on("click", function() {
        $("#Vader").css("background-color", "Green");
        $("#Vader").css("position", "absolute");
        $("#Vader").data(Vader);
        $("#Vader").removeClass( "Character" );
        YourCharacter = true;
        var Char = $(this);
        Defender();
    });

    $("#Yoda").on("click", function() {
        $("#Yoda").css("background-color", "Green");
        $("#Yoda").css("position", "absolute");
        $("#Yoda").data(Vader);
        $("#Yoda").removeClass( "Character" );
        YourCharacter = true;
        var Char = $(this);
        Defender();
    });

    function Defender() {
        $(".Character").css("background-color", "red", "!important");
        $(".Character").animate({ top: "240px" });
        $(".Character").addClass("Enemie");
        Enemie();
    }

    // Choose Defender
    var YourDefender = false;
    var Enemies = 3;

    function Enemie() {
        if ((Enemies >= 1) && (YourCharacter == true)) {
            console.log("Choose Defender");
            $(".Enemie").on("click", function() {
                $(".Enemie").animate({ top: "800px" });
                YourDefender = true;
            }) // Character On Click
        } // If
    }

    if ((YourCharacter == true) && (YourDefender == true)) {
        $("button").on("click", function() { 
            Attack();
        });
    } // If

    function Attack() {
        console.log("You Attacked Me");
    }
}) // Document Ready