// TEAM MEMBER DATA

const teamMembersO1 = [
    { //AARON RODGERS
        name: 'Aaron Rodgers',
        age: 40,
        position: 'Quarterback',
        strengths: 'Passing',
        weaknesses: 'Conspiracies',
        skills: ['Accuracy', ' Arm Strength', ' Experience'],
        biography: 'Aaron Rodgers is considered one of the greatest Quarterbacks in NFL history. He is also the savior of the New York Jets.',
        img: "imgs/rodgers.png"
    },

    { //BREECE HALL
        name: 'Breece Hall',
        age: 23,
        position: 'Running Back',
        strengths: 'Ball Carrying',
        weaknesses: 'Mile High Stadium',
        skills: ['Breaking Tackles', ' Scoring Touchdowns', ' Lots of speed'],
        biography: 'Breece Hall is a young star, already establishing himself as one of the best running backs in the league despite a season-ending injury early on in his rookie season.',
        img: "imgs/breece.png"
    },

    { //GARRETT WILSON
        name: 'Garrett Wilson',
        age: 23,
        position: 'Wide Receiver',
        strengths: 'Body Control',
        weaknesses: 'Terrible Quarterback play',
        skills: ['Catching', ' Agility', ' Route Running'],
        biography: 'Garrett Wilson is one of the best up-and-coming wide receivers in the league. Despite playing with bad quarterbacks, he has still managed to produce great stats.',
        img: "imgs/garrett.png"
    }
]

const teamMembersO2 = [
    { //MIKE WILLIAMS
        name: 'Mike Williams',
        age: 29,
        position: 'Wide Receiver',
        strengths: 'Vertical Threat',
        weaknesses: 'Injury Prone',
        skills: ['Catching 50/50 Balls', ' Scoring Touchdowns', ' Running Routes Downfield'],
        biography: 'Mike Williams is a veteran wide receiver most known for making incredible sideline catches thanks to his massive height',
        img: "imgs/mikewill.png"
    },

    { //TYLER CONKLIN
        name: 'Tyler Conklin',
        age: 28,
        position: 'Tight End',
        strengths: 'Looks like a viking',
        weaknesses: 'CJ Uzomah stealing his snaps',
        skills: ['Aggressive Catching', ' Blocking', ' Hard to Tackle'],
        biography: 'Tyler Conklin is a veteran tight end known for his size and ability to stay up while defenders are trying to tackle him.',
        img: "imgs/conk.png"
    }
]
    
    const teamMembersD1 = [
    
    { //CJ MOSLEY
        name: 'CJ Mosley',
        age: 31,
        position: 'Linebacker',
        strengths: 'Football IQ',
        weaknesses: 'Run Defense',
        skills: ['Knowledge of formations and plays', ' Leadership', ' Veteran experience'],
        biography: 'CJ Mosley has been considered one of the top linebackers in the league for almost half a decade now. He is most known for his amazing football IQ. ',
        img: "imgs/mosley.png"
    },

    { //SAUCE GARDNER
        name: 'Sauce Gardner',
        age: 23,
        position: 'Cornerback',
        strengths: 'Locking down wide receivers',
        weaknesses: 'The media hating him',
        skills: ['His coverage abilities', ' His aura', ' His recovery ability against wide receivers'],
        biography: 'Sauce Gardner is already considered by many to be the best cornerback in football, despite only playing for 2 seasons.',
        img: "imgs/sauce.png"
    },

    { //QUINCY WILLIAMS
        name: 'Quincy Williams',
        age: 27,
        position: 'Linebacker',
        strengths: 'Tackling',
        weaknesses: 'Not making the Pro Bowl',
        skills: ['Hitting people really hard', ' Coverage', ' Being Quinnen Williams\'s brother'],
        biography: 'Quincy Williams had a breakout season last year after being seen as a fringe roster player for most of his career. He is now regarded as one of the best linebackers in the league.',
        img: "imgs/quincy.png"
    }
]

const teamMembersD2 = [
    { //JERMAINE JOHNSON
        name: 'Jermaine Johnson II',
        age: 25,
        position: 'Edge Rusher',
        strengths: 'Brute Strength',
        weaknesses: 'Run Defense',
        skills: ['Power', ' Getting to the QB', ' Shed blocks against Offensive Linemen'],
        biography: 'Jermaine Johnson was one of the best edge rushers in his class coming out of college and has completely emerged into a star after a quiet first season.',
        img: "imgs/jj.png"
    },

    { //QUINNEN WILLIAMS
        name: 'Quinnen Williams',
        age: 26,
        position: 'Defensive Tackle',
        strengths: 'Everything',
        weaknesses: 'Getting double-teamed',
        skills: ['Beating offensive linemen with ease', ' Run stuffing', ' Massive strength'],
        biography: 'Quinnen Williams is seen by many as part of the top tier of defensive tackles in the league. He recently received a major contract extension after a breakout season two years ago. ',
        img: "imgs/quinnen.png"
    }
]

function generateTeamCards() {

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembersO1.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        let backgroundColor

        switch (member.position.toLowerCase()) {
            case 'quarterback':
                backgroundColor = '#125840'
                break
            case 'running back':
                backgroundColor = '#125840'
                break
            case 'wide receiver':
                backgroundColor = '#125840'
                break
        }

        card.innerHTML = `
    
        <div class="card my-3 col-12">
            <div class = "card-header text-white  style">
               <h2>${member.name}</h2>
               <img  class="img-fluid" src="${member.img}"
            </div>
            <div class = "card-body text-white text-center" style = "background-color:${backgroundColor};">
                <p><strong>Position:</strong> ${member.position}</p>
                <p><strong>Age:</strong> ${member.age}</p>
                <p><strong>Strengths:</strong> ${member.strengths}</p>
                <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                <p><strong>Skills:</strong> ${member.skills}</p>
                <p><strong>Bio:</strong> ${member.biography}</p>
            </div>
        </div>
        
        `
        for (let i = 0; i < card.children.length; i++) {
            card.children[i].style.backgroundColor = backgroundColor;
        }
        teamCardsContainer.appendChild(card)
    });

    const teamCardsContainer2 = document.getElementById('teamCards2')

    teamMembersO2.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-6')

        let backgroundColor

        switch (member.position.toLowerCase()) {
            case 'wide receiver':
                backgroundColor = '#125840'
                break
            case 'tight end':
                backgroundColor = '#125840'
                break
        }

        card.innerHTML = `
    
        <div class="card my-3 col-12">
            <div class = "card-header text-white style">
               <h2>${member.name}</h2>
               <img  class="img-fluid" src="${member.img}"
            </div>
            <div class = "card-body text-white text-center" style = "background-color:${backgroundColor};">
                <p><strong>Position:</strong> ${member.position}</p>
                <p><strong>Age:</strong> ${member.age}</p>
                <p><strong>Strengths:</strong> ${member.strengths}</p>
                <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                <p><strong>Skills:</strong> ${member.skills}</p>
                <p><strong>Bio:</strong> ${member.biography}</p>
            </div>
        </div>
        
        `
        for (let i = 0; i < card.children.length; i++) {
            card.children[i].style.backgroundColor = backgroundColor;
        }
        teamCardsContainer2.appendChild(card)
    });

    const teamCardsContainer3 = document.getElementById('teamCards3')

    teamMembersD1.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        let backgroundColor

        switch (member.position.toLowerCase()) {
            case 'linebacker':
                backgroundColor = '#125840'
                break
            case 'cornerback':
                backgroundColor = '#125840'
                break
        }

        card.innerHTML = `
    
        <div class="card my-3 col-12">
            <div class = "card-header text-white style">
               <h2>${member.name}</h2>
               <img  class="img-fluid" src="${member.img}"
            </div>
            <div class = "card-body text-white text-center" style = "background-color:${backgroundColor};">
                <p><strong>Position:</strong> ${member.position}</p>
                <p><strong>Age:</strong> ${member.age}</p>
                <p><strong>Strengths:</strong> ${member.strengths}</p>
                <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                <p><strong>Skills:</strong> ${member.skills}</p>
                <p><strong>Bio:</strong> ${member.biography}</p>
            </div>
        </div>
        
        `
        for (let i = 0; i < card.children.length; i++) {
            card.children[i].style.backgroundColor = backgroundColor;
        }
        teamCardsContainer3.appendChild(card)
    });

    const teamCardsContainer4 = document.getElementById('teamCards4')

    teamMembersD2.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-6')

        let backgroundColor

        switch (member.position.toLowerCase()) {
            case 'edge rusher':
                backgroundColor = '#125840'
                break
            case 'defensive tackle':
                backgroundColor = '#125840'
                break
        }

        card.innerHTML = `
    
        <div class="card my-3 col-12">
            <div class = "card-header text-white style">
               <h2>${member.name}</h2>
               <img  class="img-fluid" src="${member.img}"
            </div>
            <div class = "card-body text-white text-center" style = "background-color:${backgroundColor};">
                <p><strong>Position:</strong> ${member.position}</p>
                <p><strong>Age:</strong> ${member.age}</p>
                <p><strong>Strengths:</strong> ${member.strengths}</p>
                <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                <p><strong>Skills:</strong> ${member.skills}</p>
                <p><strong>Bio:</strong> ${member.biography}</p>
            </div>
        </div>
        
        `
        for (let i = 0; i < card.children.length; i++) {
            card.children[i].style.backgroundColor = backgroundColor;
        }
        teamCardsContainer4.appendChild(card)
    });
}


window.onload = generateTeamCards()