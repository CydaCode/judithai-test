import Home from "../judith-test/pages/index";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Home", () => {
  it("should render without crashing", async () => {
    expect(screen.getByText("BioInfo")).toBeInTheDocument();
  });

});
