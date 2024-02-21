import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../ErrorBoundary";

describe("ErrorBoudary component tests", () => {
  test("Component should work corectly", () => {
    //Arrange
    const ThrowError = () => {
      throw new Error("Test");
    };

    //Act
    render(
      <ErrorBoundary theme="">
        <ThrowError />
        <p>Everything is fine</p>
      </ErrorBoundary>
    );

    //Assert
    expect(screen.queryByText(/Everything is fine/i)).not.toBeInTheDocument();
  });
});
