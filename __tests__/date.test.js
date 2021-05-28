const { formatDate } = require("./../libs/date");

describe("format date", () => {
  it("is ok: date, time", () => {
    const date = "Sat Jan 01 2000 00:00:00 GMT-0500";
    const expectedDate = new Date(date).toLocaleString();
    expect(formatDate(date)).toBe(expectedDate);
  });
  it("is undefined", () => {
    let date;
    expect(formatDate(date)).toBeUndefined();
  });
  it("is invalid date", () => {
    const date = "hola";
    expect(formatDate(date)).toBe("Invalid Date");
  });
});
