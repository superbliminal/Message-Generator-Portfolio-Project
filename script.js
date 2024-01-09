
let willHave = ["fortune", "fame", "bad luck", "a loss of someone close", "significant change"];
let timeFrame = ["this year", "next year", "soon", "at an unexpected time", "during the next full moon"];
let followUp = ['Good luck!', 'Wow!', 'See ya!', "Anything else?", "Are you satisfied?"];

const messageGenerator = () => {
    let randWillHave = willHave[Math.floor(Math.random() * willHave.length)]
    let randTimeFrame = timeFrame[Math.floor(Math.random() * timeFrame.length)]
    let randFollowUp = followUp[Math.floor(Math.random() * followUp.length)]
    console.log(`You will have ${randWillHave} ${randTimeFrame}. ${randFollowUp}`)
}

messageGenerator();
