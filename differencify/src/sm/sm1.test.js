import Differencify from '../oldTests/index';

const differencify = new Differencify({ debug: false, headless: false });

describe('Differencify', () => {
  beforeAll(async () => {
    await differencify.launchBrowser({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  });
  afterAll(async () => {
    await differencify.cleanup();
  });
  it('simple unchained', async () => {
    const target = differencify.init({ chain: false });
    const page = await target.newPage();
    await page.goto('https://demo.sightmachine.io/');
    await page.setViewport({ width: 1600, height: 1200 });
    await page.waitFor(1000);
    const image = await page.screenshot();
    const result = await target.toMatchSnapshot(image);
    await page.close();
    expect(result).toEqual(true);
  }, 30000);
  it('Launch new browser per test when unchained', async () => {
    const target = differencify.init({ chain: false });
    await target.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await target.newPage();
    await page.goto('https://demo.sightmachine.io/');
    await page.setViewport({ width: 1600, height: 1200 });
    await page.waitFor(1000);
    const image = await page.screenshot();
    const result = await target.toMatchSnapshot(image);
    await page.close();
    await target.close();
    expect(result).toEqual(true);
  }, 30000);
  it('Using toMatchSnapshot callback for result details', async () => {
    await differencify
      .init()
      .newPage()
      .setViewport({ width: 1600, height: 1200 })
      .goto('https://demo.sightmachine.io/')
      .waitFor(1000)
      .title()
      .screenshot()
      .toMatchSnapshot((resultDetail) => {
        expect(resultDetail).toEqual({
          testConfig: {
            chain: true,
            imageType: 'png',
            isJest: true,
            isUpdate: false,
            testId: 6,
            testName: 'Differencify Using toMatchSnapshot callback for result details',
            testNameProvided: false,
            testPath: '/differencify/src/sm/sm1.test.js',
          },
          testResult: {
            diffPercent: 0,
            distance: 0,
            matched: true,
            snapshotPath:
              '/differencify/src/sm/__image_snapshots__/Differencify Using toMatchSnapshot callback for result details.snap.png',
          },
        });
      })
      .close()
      .end();
  }, 30000);
});
