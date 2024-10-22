import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieDashboard = () => {
  const movies = [
    { title: "The Shawshank Redemption", year: "1994" },
    { title: "The Godfather", year: "1972" },
    { title: "The Dark Knight", year: "2008" },
    { title: "Pulp Fiction", year: "1994" },
    { title: "Fight Club", year: "1999" },
  ];

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-2 bg-dark text-white p-3">
          <h5>My Movies</h5>
          <ul className="list-unstyled">
            <li className="my-3">
              <a href="#" className="text-white text-decoration-none">Home</a>
            </li>
            <li className="my-3">
              <a href="#" className="text-white text-decoration-none">Top Rated</a>
            </li>
            <li className="my-3">
              <a href="#" className="text-white text-decoration-none">Genres</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-10 p-4">
          <h2>Movie Dashboard</h2>
          <div className="row">
            {movies.map((movie, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">Year: {movie.year}</p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDashboard;
