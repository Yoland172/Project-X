import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

describe("Search component tests", () => {
  test("Search should render correctly", () => {
    render(
      <Search
        tryFindFilmBySearch={jest.fn()}
        tryToFindFilmsByTyiping={jest.fn()}
        setSearchText={jest.fn()}
      />
    );
    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
  });

  test("OnChange should be called with correct params", () => {
    //Arrange
    const tryToFindFilmsByTyipingMock = jest.fn();
    const setSearchTextMock = jest.fn();

    //Act
    render(
      <Search
        tryFindFilmBySearch={jest.fn()}
        tryToFindFilmsByTyiping={tryToFindFilmsByTyipingMock}
        setSearchText={setSearchTextMock}
      />
    );
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test" } });

    //Assert
    expect(tryToFindFilmsByTyipingMock).toHaveBeenCalledWith("test");
    expect(tryToFindFilmsByTyipingMock).toBeCalledTimes(1);
    expect(setSearchTextMock).toBeCalledTimes(1);
    expect(setSearchTextMock).toHaveBeenCalledWith("test");
  });

  test("Press button work", () => {
    //Arrange
    const tryFindFilmBySearchMock = jest.fn();

    //Act
    render(
      <Search
        tryFindFilmBySearch={tryFindFilmBySearchMock}
        tryToFindFilmsByTyiping={jest.fn()}
        setSearchText={jest.fn()}
      />
    );
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test" } });
    const button = screen.getByRole("button");
    fireEvent.click(button);

     //Assert
    expect(tryFindFilmBySearchMock).toBeCalledTimes(1);
  });
});
