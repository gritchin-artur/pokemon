const pokemonStatistics = (statistics) => {
    const statisticsContainer = document.createElement('div');
    statisticsContainer.classList.add('propertiesContainer');

    const statisticsTitle = document.createElement('h3');
    statisticsTitle.innerHTML = 'Statistics:';

    statisticsContainer.appendChild(statisticsTitle);

    statistics.forEach((stat) => {
        const statistic = document.createElement('p');
        statistic.innerHTML = `${stat.stat.name}: ${stat.base_stat}`;
        statisticsContainer.appendChild(statistic);
    });

    return statisticsContainer;
};

export default pokemonStatistics;
