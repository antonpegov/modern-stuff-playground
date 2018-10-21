import { Server } from 'http';

export default async (server: Server) => {
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
