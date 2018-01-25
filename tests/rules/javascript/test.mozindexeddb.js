import { VALIDATION_WARNING } from 'const';
import JavaScriptScanner from 'scanners/javascript';
import * as messages from 'messages';


describe('mozindexeddb', () => {
  it('should warn about mozIndexedDB', async () => {
    const code = 'var myDatabase = indexeddb || mozIndexedDB;';
    const jsScanner = new JavaScriptScanner(code, 'badcode.js');

    const { linterMessages } = await jsScanner.scan();
    expect(linterMessages.length).toEqual(1);
    expect(linterMessages[0].code).toEqual(messages.MOZINDEXEDDB.code);
    expect(linterMessages[0].type).toEqual(VALIDATION_WARNING);
  });
});
