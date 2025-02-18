import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul>
     { seriesData.map((series) => (
      <SeriesCard key={series.id} {...series} />
    ))}
    </ul>
  );
};

export default NetflixSeries;