document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON file from the 'data' folder
    fetch('data/winners.json')
        .then(response => response.json())
        .then(winnersData => {
            const winnersContainer = document.getElementById('winners-container');

            winnersData.forEach(winner => {
                const winnerCard = document.createElement('div');
                winnerCard.className = 'winner-card';

                winnerCard.innerHTML = `
                    <div class="winner-image-container">
                        <img class="winner-image" src="${winner.image}" alt="${winner.name}">
                        <img class="country-flag" src="${winner.flag}" alt="${winner.country}">
                    </div>
                    <div class="winner-details">
                        <div class="winner-name">${winner.name}</div>
                        <div class="winner-country">${winner.country}</div>
                        <div class="winner-prize">${winner.prize}</div>
                    </div>
                `;

                winnersContainer.appendChild(winnerCard);
            });
        })
        .catch(error => {
            console.error('Error fetching the winners data:', error);
        });
});
