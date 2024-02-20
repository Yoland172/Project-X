import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

describe("Search component tests", () => {
  test("Search should render correctly", () => {
    render(
      <Search
        onSearchChange={jest.fn()}
        onSearchClickButton={jest.fn()}
        searchText={"testValue"}
      />
    );
    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
  });

  test("OnChange should be called with correct params", () => {
    //Arrange
    const onSearchChangeMock = jest.fn();

    //Act
    render(
      <Search
        onSearchChange={onSearchChangeMock}
        onSearchClickButton={() => {}}
        searchText={""}
      />
    );
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test" } });

    //Assert
    expect(onSearchChangeMock).toHaveBeenCalledWith("test");
    expect(onSearchChangeMock).toBeCalledTimes(1);
  });

  test("Press button work", () => {
    //Arrange
    const onSearchClickButtonMock = jest.fn();

    //Act
    render(
      <Search
        onSearchChange={() => {}}
        onSearchClickButton={onSearchClickButtonMock}
        searchText={""}
      />
    );
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test" } });
    const button = screen.getByRole("button");
    fireEvent.click(button);

    //Assert
    expect(onSearchClickButtonMock).toBeCalledTimes(1);
  });
});
