let lirik_lagu = {
    "status": true,
    "data": {
        "artist": "Avenged Sevenfold",
        "songTitle": "Little Piece of Heaven",
        "songLyrics": "Before the story begins, is it such a sin\nFor me to take what's mine, until the end of time?\nWe were more than friends, before the story ends\nAnd I will take what's mine, create what God would never design\nOur love had been so strong for far too long",
        "songLyricsArr": [
            "Before the story begins, is it such a sin",
            "For me to take what's mine, until the end of time?",
            "We were more than friends, before the story ends",
            "And I will take what's mine, create what God would never design",
            "Our love had been so strong for far too long",
            "I was weak with fear that somethin' would go wrong",
            "Before the possibilities came true",
            "I took all possibility from you",
            "Almost laughed myself to tears",
            "Conjuring her deepest fears (come here you fucking bitch)",
            "Must have stabbed her fifty fucking times",
            "I can't believe it",
            "Ripped her heart out right before her eyes",
            "Eyes over easy, eat it, eat it, eat it",
            "She was never this good in bed, even when she was sleepin'",
            "Now she's just so perfect I've never been quite so fucking deep in",
            "It goes on and on and on",
            "I can keep you lookin' young and preserved forever",
            "With a fountain to spray on your youth whenever",
            "'Cause I really always knew that my little crime",
            "Would be cold, that's why I got a heater for your thighs",
            "And I know, I know it's not your time",
            "But bye, bye",
            "And a word to the wise, when the fire dies",
            "You think it's over but it's just begun",
            "Baby, don't cry",
            "You had my heart, at least for the most part",
            "'Cause everybody's gotta die sometime",
            "We fell apart, let's make a new start",
            "'Cause everybody's gotta die sometime, yeah, yeah",
            "But baby, don't cry",
            "Now possibilities I'd never considered",
            "Are occurring the likes of which I'd never heard",
            "Now an angry soul comes back from beyond the grave",
            "To repossess a body with which I'd misbehaved",
            "Smiling right from ear to ear",
            "Almost laughed herself to tears",
            "Must have stabbed him fifty fucking times",
            "I can't believe it",
            "Ripped his heart out right before his eyes",
            "Eyes over easy, eat it, eat it, eat it (eat the shit out of it)",
            "Now that it's done, I realize the error of my ways",
            "I must venture back to apologize from somewhere far beyond the grave",
            "I gotta make up for what I've done",
            "'Cause I was all up in a piece of heaven",
            "While you burned in hell, no peace forever",
            "'Cause I really always knew that my little crime",
            "Would be cold, that's why I got a heater for your thighs",
            "And I know, I know it's not your time",
            "But bye, bye",
            "And a word to the wise, when the fire dies",
            "You think it's over but it's just begun",
            "But baby, don't cry",
            "You had my heart, at least for the most part",
            "'Cause everybody's gotta die sometime",
            "We fell apart, let's make a new start"
        ]
    }
}

const nama_anda = "dion";
// const cita_cita_anda = "Programer";

const newLirikLagu = {
    // ...lirik_lagu,
    // data: {
        ...lirik_lagu.data,
        artist: nama_anda,
        songTitle: 'Programer'
    // }
};

console.log(newLirikLagu);




const lirik = "For me to take what's mine, until the end of time?";
const foundLyric = lirik_lagu.data.songLyricsArr.find(lyric => lyric.includes(lirik));

console.log(foundLyric);


let getData:string[] = lirik_lagu.data.songLyricsArr.slice(1, 2)
console.log(getData);
