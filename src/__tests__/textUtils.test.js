import { capitalize } from "../utils/textUtils";

test("capitalizes first character", () => {

  expect(capitalize("aya"))
    .toBe("Aya");

});