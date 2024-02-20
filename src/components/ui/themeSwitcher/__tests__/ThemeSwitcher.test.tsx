import { fireEvent, render, screen } from "@testing-library/react";
import ThemeSwitcher from "../ThemeSwitcher";

describe("themeSwithcer components test", () => {
  test("themeSwithcer should render corectly, when theme is default", () => {
    //Act
    render(<ThemeSwitcher theme="" updateTheme={() => {}} />);
    const switcher = screen.getByRole("button");

    //Assert
    expect(switcher).toBeInTheDocument();
  });
  test("themeSwithcerFunc run corectly, when theme is default", () => {
    //Arrange
    const updateTheme = jest.fn();

    //Act
    render (
        <ThemeSwitcher theme="" updateTheme={updateTheme}/>
    )
    const switcher = screen.getByRole("button");
    fireEvent.click(switcher)
    //Assert
    expect(updateTheme).toHaveBeenCalledTimes(1);
    expect(updateTheme).toHaveBeenCalledWith("light");
  });

  test("themeSwithcerFunc run corectly, when theme is light", () => {
    //Arrange
    const updateTheme = jest.fn();

    //Act
    render (
        <ThemeSwitcher theme="light" updateTheme={updateTheme}/>
    )
    const switcher = screen.getByRole("button");
    fireEvent.click(switcher)
    //Assert
    expect(updateTheme).toHaveBeenCalledTimes(1);
    expect(updateTheme).toHaveBeenCalledWith("");
  });
});
