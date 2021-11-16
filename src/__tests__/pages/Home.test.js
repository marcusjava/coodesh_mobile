import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PacientContext } from "../../context/pacient";
import Home from "../../pages/Home";
import {
  fakePacientsfromAPI,
  fakePacientsfromContext,
} from "../../utils/fakePacients";
import { getPacientsFromAPI, BASE_URL, api } from "../../services/api";

import axios from "axios";

jest.mock("axios");

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
            pacient,
            loading: true,
          }}
        >
          {ui}
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
      debug,
      getByRole,
      getByTestId,
      getByA11yLabel,
    } = renderWithProvider(<Home />);
    const searchInput = getByPlaceholderText("Searching");
    expect(searchInput).toBeTruthy();
    const button = getByA11yLabel("search");
    expect(button).not.toBeNull();
  });
  it("should render Richard Sullivan data on list", () => {
    const {
      getByPlaceholderText,
      debug,
      queryByA11yLabel,
      getAllByA11yLabel,
      getByRole,
      getByText,
      getByTestId,
      getByA11yLabel,
    } = renderWithProvider(<Home />, fakePacientsfromContext);

    //check items
    const list = getByA11yLabel("pacients list");

    expect(list.props.children).toHaveLength(2);

    const name = getByText(/richard sullivan/i);
    expect(name.props.children).toEqual("Richard Sullivan");
    const picture = getAllByA11yLabel("Thumbnail")[0];
    expect(picture.props.source.uri).toEqual(
      "https://randomuser.me/api/portraits/men/63.jpg"
    );
    debug();
  });
});
