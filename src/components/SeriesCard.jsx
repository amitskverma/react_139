export const SeriesCard=(prop)=>{
    return (
        <li key={prop.id}>
          <div>
            <h2> Name - {prop.name}</h2>
            <img src={prop.img_url} alt={prop.name} width="40%" height="40%" />
            <h3> Genre - {prop.genre}</h3>
            <p> Rating - {prop.rating}</p>
            <p> Description - {prop.description}</p>
            <a href={prop.watch_url} target="_blank" rel="noreferrer">
                <button>Watch Now</button>
            </a>
          </div>

        </li>
    );
}
