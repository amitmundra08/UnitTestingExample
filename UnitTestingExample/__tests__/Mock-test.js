import Users from '../source/Users';
it('Api test case', async function () {
  global.fetch = jest.fn().mockImplementation(() => {
    var p = new Promise((resolve, reject) => {
      resolve({
        json: function () {
          return {id: 2};
        },
      });
    });
    return p;
  });

  const response = await Users.all();
  expect(response.id).toEqual(2);
});
