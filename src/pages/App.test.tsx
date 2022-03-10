import { Component } from "react";
import { mount, findByTestAttr, Provider, store } from "../testUtils";
import App from "./App";

const setup = () => {
  return mount<Component>(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("App Container", () => {
  let wrapper: any = null;

  beforeEach(() => {
    wrapper = setup();
  });

  it("renders without crashing", async () => {
    const app = await findByTestAttr(wrapper, "app-container");
    expect(app.exists()).toBe(true);
  });
});
