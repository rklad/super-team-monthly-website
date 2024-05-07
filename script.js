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
                backgroundColor = 'green'
                break
            case 'running back':
                backgroundColor = 'green'
                break
            case 'running back':
                backgroundColor = 'green'
                break
            case 'wide receiver':
                backgroundColor = 'green'
                break
            case 'tight end':
                backgroundColor = 'green'
                break
            case 'offensive line':
                backgroundColor = 'green'
                break
            case 'defensive line':
                backgroundColor = 'green'
                break
            case 'linebacker':
                backgroundColor = 'green'
                break
            case 'cornerback':
                backgroundColor = 'green'
                break
            case 'safety':
                backgroundColor = 'green'
                break
            case 'kicker':
                backgroundColor = 'green'
                break
            case 'punter':
                backgroundColor = 'green'
                break
            case 'coach':
                backgroundColor = 'green'
                break
        }

        card.style.backgroundColor = backgroundColor



        

        card.innerHTML = `
        <div class="card">
            <div class = "card-header">
                ${member.name}
            </div>
            <div class = "card-body" style = "background-color:${backgroundColor};">
                <p><strong>Position:</strong> ${member.position}</p>
            </div>
        </div>
        
        `
        teamCardsContainer.appendChild(card)
    });
}


window.onload = generateTeamCards()