import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from "./Components/Login";
describe("App Component", () => {
  test("is this home", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("this is Home");
  });
});

describe("Login Component", () => {
  it("is user", () => {
    const erapper = shallow(<Login />);
    const text = erapper.find("iyvin").text();
    console.log(text);
  });
});
