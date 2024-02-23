import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import FilmInfo from "../FilmInfo";
import { FilmItemInfo } from "../../../../api/types";

describe("FilmInfo component", () => {
  const filmInfo: FilmItemInfo = {
    Title: "The Batman",
    Year: "2022",
    Rated: "PG-13",
    Released: "04 Mar 2022",
    Runtime: "176 min",
    Genre: "Action, Crime, Drama",
    Director: "Matt Reeves",
    Writer: "Matt Reeves, Peter Craig, Bob Kane",
    Actors: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
    Plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    Language: "English, Spanish, Latin, Italian",
    Country: "United States",
    Awards: "Nominated for 3 Oscars. 35 wins & 165 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "85%",
      },
      {
        Source: "Metacritic",
        Value: "72/100",
      },
    ],
    Metascore: "72",
    imdbRating: "7.8",
    imdbVotes: "753,503",
    imdbID: "tt1877830",
    Type: "movie",
    DVD: "19 Apr 2022",
    BoxOffice: "$369,345,583",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  };

  test("Component matches shapshot", () => {
    //Act
    const tree = renderer.create(<FilmInfo filmInfo={filmInfo} />).toJSON();

    //Assert
    expect(tree).toMatchSnapshot();
  });

  test("elements of page render", () => {
    render(<FilmInfo filmInfo={filmInfo} />);
    const img = screen.queryByAltText("FilmPoster");
    const metacritic = screen.queryByAltText("Metacritic");
    const runtime = screen.getByText(/Runtime/i);
    const genre = screen.getByText(/Genre/i);
    const year = screen.getByText(/Year/i);
    const director = screen.getByText(/Director/i);
    const rated = screen.getByText(/Rated/i);
    const language = screen.getByText(/Language/i);
    const released = screen.getByText(/Released/i);
    const country = screen.getByText(/Country/i);
    const boxOffice = screen.getByText(/Box/i);

    //Assert
    expect(img).toBeInTheDocument();
    expect(metacritic).toBeInTheDocument();
    expect(runtime).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(director).toBeInTheDocument();
    expect(rated).toBeInTheDocument();
    expect(language).toBeInTheDocument();
    expect(released).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(boxOffice).toBeInTheDocument();
  });

  test("elements of page do not render", () => {
    //Act
    render(<FilmInfo />);
    const img = screen.queryByAltText("FilmPoster");
    const metacritic = screen.queryByAltText("queryByAltText");
    const runtime = screen.queryByText(/Runtime/i);
    const genre = screen.queryByText(/Genre/i);
    const year = screen.queryByText(/Year/i);
    const director = screen.queryByText(/Director/i);
    const rated = screen.queryByText(/Rated/i);
    const language = screen.queryByText(/Language/i);
    const released = screen.queryByText(/Released/i);
    const country = screen.queryByText(/Country/i);
    const boxOffice = screen.queryByText(/Box Office/i);

    //Assert
    expect(img).toBeNull();
    expect(metacritic).toBeNull();
    expect(runtime).toBeNull();
    expect(genre).toBeNull();
    expect(year).toBeNull();
    expect(director).toBeNull();
    expect(rated).toBeNull();
    expect(language).toBeNull();
    expect(released).toBeNull();
    expect(country).toBeNull();
    expect(boxOffice).toBeNull();
  });
});
