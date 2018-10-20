import server from '../';

export default async () => {
  return new Promise(async (resolve, reject) => {
    try {
      // Empty yet...
      resolve();
    } catch (e) {
      console.log(e);
      console.log('Server has been closed');
      server.close();
      reject();
    }
  });
};
