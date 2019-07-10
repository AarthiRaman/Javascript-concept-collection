import React from "react";
import renderer from "react-test-renderer";

import Definition from "./Definition";

describe("Definition", () => {
  it("should render the component", () => {
    const comp = renderer
      .create(
        <Definition title="some title" textContent="some text">
          Facebook
        </Definition>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });
});
