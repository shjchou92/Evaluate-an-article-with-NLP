import {checkForUrl} from './nameChecker'

const testUrl = "https://www.valentinog.com/blog/jest/";
const failUrl = "https://www.googlecom";

test('Return true to valid URL', () => {
	expect(checkForUrl(testUrl).toEqual(true));
});

test('Return false to invalid URL', () => {
	expect(checkForUrl(failUrl).toEqual(false));
})