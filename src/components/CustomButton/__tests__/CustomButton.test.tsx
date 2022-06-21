import { render } from "@testing-library/react-native";
import { CustomButton } from "../CustomButton";

describe("<CustomButton />", () => {
  it("renders correctly", () => {
    const renderAPI = render(<CustomButton />);

    renderAPI.getByText("Button");
  });
});
