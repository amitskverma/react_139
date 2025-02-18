import seriesData from "../api/seriesData.json";


const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((series) => (
        <li key={series.id}>
          <div>
            <h2> Name - {series.name}</h2>
            <img src={series.img_url} alt={series.name} width="40%" height="40%" />
            <h3> Genre - {series.genre}</h3>
            <p> Rating - {series.rating}</p>
            <p> Description - {series.description}</p>
            <a href={series.watch_url} target="_blank" rel="noreferrer">
                <button>Watch Now</button>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NetflixSeries;