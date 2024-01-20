import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import FilmList from "../../filmSearch/filmList/FilmList";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("FilmList Ccomponent tests", () => {
  const filmList = [
    {
      Title: "Batman Begins",
      Year: "2005",
      imdbID: "tt0372784",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Batman",
      Year: "2022",
      imdbID: "tt1877830",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg",
    },
    {
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      imdbID: "tt2975590",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Batman",
      Year: "1989",
      imdbID: "tt0096895",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    },
    {
      Title: "Batman Returns",
      Year: "1992",
      imdbID: "tt0103776",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
    },
    {
      Title: "Batman & Robin",
      Year: "1997",
      imdbID: "tt0118688",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
    },
    {
      Title: "Batman Forever",
      Year: "1995",
      imdbID: "tt0112462",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "The Lego Batman Movie",
      Year: "2017",
      imdbID: "tt4116284",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    },
    {
      Title: "Batman: The Animated Series",
      Year: "1992–1995",
      imdbID: "tt0103359",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
    },
    {
      Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
      Year: "2016",
      imdbID: "tt18689424",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
    },
  ];
  test("Component renders correctly", () => {
    //Arange
    const setCurrentImageMock = jest.fn();
    const removeCurrentImageMock = jest.fn();
    const prevPageMock = jest.fn();
    const nextPageMock = jest.fn();
    const currentImage =
      "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg";

    //Act
    const tree = renderer
      .create(
        <BrowserRouter>
          <FilmList
            filmList={filmList}
            isFetching={false}
            currentImage={currentImage}
            setCurrentImage={setCurrentImageMock}
            removeCurrentImage={removeCurrentImageMock}
            prevPage={prevPageMock}
            nextPage={nextPageMock}
            filmsCount={559}
            pageNumber={1}
          />
        </BrowserRouter>
      )
      .toJSON();

    //Assert
    expect(tree).toMatchSnapshot();
  });

  test("pagination renders", () => {
    //Arange
    const setCurrentImageMock = jest.fn();
    const removeCurrentImageMock = jest.fn();
    const prevPageMock = jest.fn();
    const nextPageMock = jest.fn();

    //act
    render(
      <BrowserRouter>
        <FilmList
          filmList={filmList}
          isFetching={false}
          currentImage={""}
          setCurrentImage={setCurrentImageMock}
          removeCurrentImage={removeCurrentImageMock}
          prevPage={prevPageMock}
          nextPage={nextPageMock}
          filmsCount={250}
          pageNumber={1}
        />
      </BrowserRouter>
    );
    const navArrows = screen.getAllByRole("button");
    fireEvent.click(navArrows[0]);
    fireEvent.click(navArrows[1]);

    //Assert
    expect(navArrows[0]).toBeInTheDocument();
    expect(navArrows[1]).toBeInTheDocument();
  });

  test("pagination works", () => {
    //Arange
    const setCurrentImageMock = jest.fn();
    const removeCurrentImageMock = jest.fn();
    const prevPageMock = jest.fn();
    const nextPageMock = jest.fn();

    //act
    render(
      <BrowserRouter>
        <FilmList
          filmList={filmList}
          isFetching={false}
          currentImage={""}
          setCurrentImage={setCurrentImageMock}
          removeCurrentImage={removeCurrentImageMock}
          prevPage={prevPageMock}
          nextPage={nextPageMock}
          filmsCount={250}
          pageNumber={1}
        />
      </BrowserRouter>
    );
    const navArrows = screen.getAllByRole("button");
    fireEvent.click(navArrows[0]);
    fireEvent.click(navArrows[1]);

    //Assert
    expect(prevPageMock).toHaveBeenCalled();
    expect(nextPageMock).toHaveBeenCalled();
  });

  test("Pagination not renders", () => {
    //act
    render(
      <BrowserRouter>
        <FilmList
          filmList={filmList}
          isFetching={false}
          currentImage={""}
          setCurrentImage={() => {}}
          removeCurrentImage={() => {}}
          prevPage={() => {}}
          nextPage={() => {}}
          filmsCount={0}
          pageNumber={1}
        />
      </BrowserRouter>
    );

    //Assert
    expect(screen.queryByRole("button")).toBeNull();
  });
});
