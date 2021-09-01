import { render, screen } from "@testing-library/react";
import Icon from "./index";

describe("IconComponent", () => {
  it("should iconComponent render when valid name is passed", () => {
    render(<Icon name="clear" />);
    const element = screen.getByTestId("Icon");
    expect(element).toBeInTheDocument();
  });
  it("should iconComponent not render when invalid name is passed", () => {
    render(<Icon name="INVALID_ICON_NAME" />);
    const element = screen.queryByTestId("Icon");
    expect(element).not.toBeInTheDocument();
  });
});
