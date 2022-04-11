/**
 * @jest-environment jsdom
 */
import firebase from '../../src/lib/__mocks__/firebase-Auth.js';
import readFirestore from '../../src/lib/__mocks__/readFirestore.js';
import { mainPage } from '../../src/components/mainPage.js';

describe('Main page', () => {
  it('is a function', () => {
    expect(typeof mainPage).toBe('function');
  });
});
