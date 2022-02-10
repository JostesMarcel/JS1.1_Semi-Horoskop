let txt = document.getElementById("text");
let out = document.getElementById("output");
let img = document.getElementById("img")
let txt1 = document.getElementById("text1")

console.log(txt);

function check() {
    
    switch (txt.value) {
        case `jan`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt="">
            <h2>Your Horoskop is AQUARIUS</h2>
            Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…`
            break;

        case `feb`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_pisces.png" alt="">
            <h2>Your Horoskop is PISCES</h2>
            Communication is very important today—written, spoken, and even nonverbal body language will all…`
            break;

        case `mar`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aries.png" alt="">
            <h2>Your Horoskop is ARIES</h2>
            Today your patience might be tested when one or more of your projects gets put on hold by someone…`
            break;

        case `apr`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_taurus.png" alt="">
            <h2>Your Horoskop is TAURUS</h2>
            Your intense energy makes you a great candidate for a leadership position right now, so if you are…`
            break;

        case `may`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_gemini.png" alt="">
            <h2>Your Horoskop is GEMINI</h2>
            If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…`
            break;

        case `jun`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_cancer.png" alt="">
            <h2>Your Horoskop is CANCER</h2>
            Too many different elements in your life are overlapping with each other right now—and it's your…`
            break;

        case `jul`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_leo.png" alt="">
            <h2>Your Horoskop is LEO</h2>
            The issues you'll be dealing with today are very complicated ones—you will have to navigate your…`
            break;
        case `aug`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_virgo.png" alt="">
            <h2>Your Horoskop is VIRGO</h2>
            You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…`
            break;

        case `sep`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_libra.png" alt="">
            <h2>Your Horoskop is LIBRA</h2>
            Pick a cultural event that's coming up and get some tickets for it today.`
            break;

        case `oct`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_scorpio.png" alt="">
            <h2>Your Horoskop is SCORPIO</h2>
            Someone will challenge a belief that you've held for a very long time today—and they will say an…`
            break;

        case `nov`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_sagittarius.png" alt="">
            <h2>Your Horoskop is SAGITTARIUS</h2>
            Someone in your life needs to step up and take on more responsibility—and you need to tell them to....`
            break;

        case `dec`:
            out.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt="">
            <h2>Your Horoskop is CAPRICORN</h2>
            Breaking the rules is not always a bad thing—especially if the rules limit your creativity. `
            break;
    
        default:
            out.innerHTML = `<h2>Please give a month</h2>`
            break;
    }
}