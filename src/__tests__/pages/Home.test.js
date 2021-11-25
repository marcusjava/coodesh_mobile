import React from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  cleanup,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PacientContext } from "../../context/pacient";
import { Host } from "react-native-portalize";
import Home from "../../pages/Home";
import {
  fakePacientsfromAPI,
  fakePacientsfromContext,
} from "../../utils/fakePacients";
import { server } from "../../utils/mocks/server";
import { rest } from "msw";

beforeEach(() => {
  cleanup();
});

const renderWithProvider = (
  ui,
  mockedPacients = [],
  mockedSearchedPacients = [],
  pacient = {}
) => {
  return {
    ...render(
      <NavigationContainer>
        <PacientContext.Provider
          value={{
            pacients: mockedPacients,
            search: mockedSearchedPacients,
            searchPacients: jest.fn(),
            pacient,
            loading: false,
            setPacient: jest.fn(),
            pacient: {},
          }}
        >
          <Host>{ui}</Host>
        </PacientContext.Provider>
      </NavigationContainer>
    ),
  };
};

describe("testing Home Component render properly", () => {
  it("render no items when list is empty", async () => {
    const { getByText } = renderWithProvider(<Home />);
    expect(getByText("No Items").props.children).toEqual("No Items");
  });
  it("shows logo", () => {
    const { getByRole } = renderWithProvider(<Home />);
    expect(getByRole("image")).toBeTruthy();
  });
  it("shows search input and button ", () => {
    const {
      getByPlaceholderText,

      getByA11yLabel,
    } = renderWithProvider(<Home />);
    const searchInput = getByPlaceholderText("Searching");
    expect(searchInput).toBeTruthy();
    const button = getByA11yLabel("search");
    expect(button).not.toBeNull();
  });
  it("should render Richard Sullivan data on flatlist", () => {
    const { getAllByA11yLabel, getByText, getByA11yLabel } = renderWithProvider(
      <Home />,
      fakePacientsfromContext
    );

    //check items
    const list = getByA11yLabel("pacients list");

    expect(list.props.children).not.toBeNull();

    const name = getByText(/richard sullivan/i);
    expect(name.props.children).toEqual("Richard Sullivan");
    const picture = getAllByA11yLabel("Thumbnail")[0];
    expect(picture.props.source.uri).toEqual(
      "https://randomuser.me/api/portraits/men/63.jpg"
    );
  });
  it("should render Jusseline data on flatlist", () => {
    const { getAllByA11yLabel, getByText, getByA11yLabel } = renderWithProvider(
      <Home />,
      fakePacientsfromContext
    );

    //check items
    const list = getByA11yLabel("pacients list");

    expect(list.props.children).not.toBeNull();

    const name = getByText(/Jusseline Melo/i);
    expect(name.props.children).toEqual("Jusseline Melo");
    const picture = getAllByA11yLabel("Thumbnail")[1];
    expect(picture.props.source.uri).toEqual(
      "https://randomuser.me/api/portraits/women/80.jpg"
    );
  });
});

describe("testing search pacients", () => {
  it("searching for a specific pacient", () => {
    const { getByText, getByA11yLabel, getByPlaceholderText, debug } =
      renderWithProvider(<Home />, fakePacientsfromContext);
    const pacient = "marcus";
    const list = getByA11yLabel("pacients list");
    const input = getByPlaceholderText("Searching");
    const searchButton = getByA11yLabel("search");
    fireEvent.changeText(input, pacient);
    fireEvent.press(searchButton);
    expect(getByText(/marcus/i).props.children).toEqual("Marcus Melo");
  });
});
