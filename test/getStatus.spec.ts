import { assert } from "chai";

import { getStatus } from "../src/utils/getStatus";

suite("getStatus helper", () => {
  test("should return a valid status", async () => {
    const status = await getStatus("https://httpstat.us/200");
    assert.equal(status, 200);
  });

  test("should return an invalid status", async () => {
    const status = await getStatus("https://httpstat.us/404");
    assert.equal(status, 404);
  });

  test("should return a server error status", async () => {
    const status = await getStatus("https://httpstat.us/500");
    assert.equal(status, 500);
  });
});
