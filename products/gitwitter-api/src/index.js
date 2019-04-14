import { initServer } from './server';

initServer()
  .then(server => {
    server.listen(3000, () => console.log('Gitwitter Server is listening on port 3000'));
  })
  .catch(err => console.log(err));
