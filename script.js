// TEAM MEMBER DATA

const teamMembers = [
    {
        name: 'Aaron Rodgers',
        age: 40,
        activePlayer: true,
        position: 'Quarterback',
        strengths: 'passing',
        weaknesses: 'conspiracies',
        skills: ['Accuracy', 'Arm Strength', 'Experience'],
        biography: 'Aaron Rodgers is considered one of the greatest Quarterbacks in NFL history. He is also the savior of the New York Jets and my pookie buns'
    },
]

function generateTeamCards() {

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
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
            case 'running back':
                backgroundColor = '#125840'
                break
            case 'wide receiver':
                backgroundColor = '#125840'
                break
            case 'tight end':
                backgroundColor = '#125840'
                break
            case 'offensive line':
                backgroundColor = '#125840'
                break
            case 'defensive line':
                backgroundColor = '#125840'
                break
            case 'linebacker':
                backgroundColor = '#125840'
                break
            case 'cornerback':
                backgroundColor = '#125840'
                break
            case 'safety':
                backgroundColor = '#125840'
                break
            case 'kicker':
                backgroundColor = '#125840'
                break
            case 'punter':
                backgroundColor = '#125840'
                break
            case 'coach':
                backgroundColor = '#125840'
                break
        }

        card.innerHTML = `
        <div class="card m-3">
            <div class = "card-header text-white">
                ${member.name}
            </div>
            <div class = "card-body text-white" style = "background-color:${backgroundColor};">
                <p><strong>Position:</strong> ${member.position}</p>
            </div>
        </div>
        
        `
        for (let i = 0; i < card.children.length; i++) {
            card.children[i].style.backgroundColor = backgroundColor;
        }
        teamCardsContainer.appendChild(card)
    });
}


window.onload = generateTeamCards()