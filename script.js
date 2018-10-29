var signs = ["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius",""];

var horoscopes = ["Today you might feel the desire to break free from your daily routine, Capricorn, particularly regarding career matters. You might consider developing a business of your own, one that would give you a lot more freedom than you currently have. This is a good day to start looking into it. You might find that there are more possibilities out there than you expected.",
"A sudden and unexpected opportunity to take a journey by air could come your way today, Aquarius. This might be something you've wanted for a long time finally manifesting. Certainly adventure is in the air, although it might be mental adventure as much as physical. Some information could come your way that catapults you into a new and exciting field of interest. This promises to be a thoroughly stimulating day.",
"Technology could pave the way for you to greatly increase your income, possibly through new skills or investments. This is likely to be a very positive development, setting the stage for future financial success. Some unusual, interesting dreams could come your way, bringing unexpected revelations about you and your past - and possibly your future. Write them down! They could hold important messages for you from your higher self.",
"The unexpected need to take a journey by air or spend a lot of time working could bring about an inconvenient separation from your partner. While the reasons for this situation and the projected outcome are very positive, it can cause a temporary upset in your relationship. Don't worry about it. The upset will pass, particularly when the desired results are attained. Concentrate on the matter at hand.",
"Is your workplace upgrading its equipment? Are you in the process of increasing your technology skills? Today's planets show that success and advancement through technology are definitely in the offing for you, Taurus. If you've been thinking about purchasing a computer, do it today if you can. Whatever your goals, you can harness current innovations to help them along. Give it some thought!",
"Some close friends could turn you on to a new interest or perhaps a group you might want to join. Intellectual stimulation through those closest to you could open the way to new plans and innovations. You might want to try combining artistic interests with technology, Gemini, perhaps expanding your knowledge of photography, computer graphics, or filmmaking. Success and good fortune through such activities are strongly indicated.",
"Sudden, unexpected visitors could arrive today, perhaps by air or in a new car. You could host a group meeting of some kind at your house. A lot of exciting information and stimulating conversation could take place, Cancer, bringing fresh ideas that spark new interests. Expect a very busy but productive day, looking ahead toward the future rather than back toward the past.",
"Short journeys in your neighborhood, perhaps connected with a group you're associated with, could take up a lot of your time today, Leo. Fascinating and stimulating emails or calls could arrive. Books and magazine articles could provide information that sends you in a new direction in some way. Write down your ideas! You will want to remember them all.",
"Unexpected money developments could brighten your day today, Virgo. Perhaps you will get a raise or an increase in some other form of income. Technology could be involved in some way, or a long-term goal you've been striving for finally brings in some benefits. There might be uncertainty about when it's coming or exactly how much it will be, but the outcome will be gratifying all the same!",
"A surprising revelation, either from within or from sources like books, the Internet, or communications from others could set you in an entirely new direction. You will have an increased sense of freedom, as well as a clearer and more progressive outlook. You might consider some pretty heavy changes in your life, Libra, but don't make any final decisions or arrangements today. Wait before putting your ideas into action.",
"Discoveries made through occult sciences such as astrology or numerology could see you embrace some rather revolutionary ideas about yourself, the world, and life. You could become involved with a group associated with metaphysical studies or take a class or workshop of some kind. This could mean a new direction for you in some way, Scorpio. It might greatly enhance your life and thinking.",
"Sudden lucky breaks could come your way today, Sagittarius, possibly through friends or groups with which you're involved. A long-term goal you've been working toward might bring unexpected but wonderful results. Group activities, particularly those involving social or political issues, could take up a lot of your time. This promises to be a busy, productive day. Expect the unexpected!",
"Enter a valid birthdate."];

var images = ["image/0.png","image/1.png","image/2.png","image/3.png","image/4.png","image/5.png","image/6.png","image/7.png","image/8.png","image/9.png","image/10.png","image/11.png"];

var chineseZodiac = ["Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat"];

function onSubmit(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var sign = determineSign(day,month);
    var zodiac = determineZodiac(year);
    document.getElementById("sign").innerHTML = signs[sign];
    document.getElementById("horoscope").innerHTML = horoscopes[sign];
    document.getElementById("zodiac").innerHTML = "Chinese Zodiac Animal: " + chineseZodiac[zodiac];
    document.getElementById("returnName").innerHTML = "Hi " + name + "!";
    document.getElementById("image").src = images[sign];
}

function determineSign(day,month) {
    if (month == 1){
        if (day>=1 && day<20){
            return 0;
        }
        if (day>=20 && day<31){
            return 1;
        }
    }
    if (month == 2){
        if (day>=1 && day<18){
            return 1;
        }
        if (day>=18 && day<=28){
            return 2;
        }
        if (day>28 && day<=31){
            return 12;
        }
    }
    if (month == 3){
        if (day>=1 && day<20){
            return 2;
        }
        if (day>=20 && day<31){
            return 3;
        }
    }
    if (month == 4){
        if (day>=1 && day<20){
            return 3;
        }
        if (day>=20 && day<30){
            return 4;
        }
        if (day==31){
            return 12;
        }
    }
    if (month == 5){
        if (day>=1 && day<21){
            return 4;
        }
        if (day>=21 && day<31){
            return 5;
        }
    }
    if (month == 6){
        if (day>=1 && day<21){
            return 5;
        }
        if (day>=21 && day<30){
            return 6;
        }
        if (day==31){
            return 12;
        }
    }
    if (month == 7){
        if (day>=1 && day<23){
            return 6;
        }
        if (day>=23 && day<31){
            return 7;
        }
    }
    if (month == 8){
        if (day>=1 && day<23){
            return 7;
        }
        if (day>=23 && day<31){
            return 8;
        }
    }
    if (month == 9){
        if (day>=1 && day<23){
            return 8;
        }
        if (day>=23 && day<30){
            return 9;
        }
        if (day==31){
            return 12;
        }
    }
    if (month == 10){
        if (day>=1 && day<23){
            return 9;
        }
        if (day>=23 && day<31){
            return 10;
        }
    }
    if (month == 11){
        if (day>=1 && day<22){
            return 10;
        }
        if (day>=22 && day<30){
            return 11;
        }
        if (day==31){
            return 12;
        }
    }
    if (month == 12){
        if (day>=1 && day<22){
            return 11;
        }
        if (day>=22 && day<31){
            return 0;
        }
    }
}
// 0 = Capricorn
// 1 = Aquarius
// 2 = Pisces
// 3 = Aries
// 4 = Taurus
// 5 = Gemini
// 6 = Cancer
// 7 = Leo
// 8 = Virgo
// 9 = Libra
// 10 = Scorpio
// 11 = Sagittarius

function determineZodiac(year){
    if (year % 12 == 0){
        return 0;
    }
    if (year % 12 == 1){
        return 1;
    }
    if (year % 12 == 2){
        return 2;
    }
    if (year % 12 == 3){
        return 3;
    }
    if (year % 12 == 4){
        return 4;
    }
    if (year % 12 == 5){
        return 5;
    }
    if (year % 12 == 6){
        return 6;
    }
    if (year % 12 == 7){
        return 7;
    }
    if (year % 12 == 8){
        return 8;
    }
    if (year % 12 == 9){
        return 9;
    }
    if (year % 12 == 10){
        return 10;
    }
    if (year % 12 == 11){
        return 11;
    }
}
// 0 = Monkey
// 1 = Rooster
// 2 = Dog
// 3 = Pig
// 4 = Rat
// 5 = Ox
// 6 = Tiger
// 7 = Rabbit
// 8 = Dragon
// 9 = Snake
// 10 = Horse
// 11 = Goat
