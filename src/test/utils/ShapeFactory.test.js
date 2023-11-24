const ShapeFactory = require('../../main/utils/ShapeFactory');

describe('ShapeFactory', () => {
  it('should create a new instance of ShapeFactory with the given name', () => {
    const pyramid = new ShapeFactory('Pyramid');
    expect(pyramid).toBeInstanceOf(ShapeFactory);
    expect(pyramid.name).toBe('Pyramid');
  });
});