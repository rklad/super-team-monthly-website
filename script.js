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

function generateTeamCards(){
    
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')
        card.innerHTML = `
        <div class="card">
            <div class = "card-header">
                ${member.name}
            </div>
            <div class = "card-body">
                <p><strong>Position:</strong> ${member.position}</p>
            </div>
        </div>
        
        `
    teamCardsContainer.appendChild(card)
    });
}


window.onload = generateTeamCards()