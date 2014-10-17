describe('Juicer', function () {
  var juicer, subject;

  beforeEach(function () {
    console.log(JSON.stringify(require.s.contexts._.defined));
    juicer = require('Juicer');
  });

  it('is not undefined', function () {
    expect(juicer).not.toBeUndefined();
  });
});