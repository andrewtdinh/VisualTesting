import { setup, teardown } from '../jest/test.utils.js';

beforeAll(() => { chromeless = setup() });
afterAll(async () => { await teardown(chromeless) });

test("+++ home renders correctly", async () => {
  const html = await chromeless
    .goto(global.config.baseUrl)
    .wait(".content")
    .evaluate(() => document.querySelector(".content").innerHTML);
  expect(html).toMatchSnapshot();
});
