import WebServer from './web.server';

let webServer = new WebServer();

// Log
console.log('-- web server');

webServer
  .start()
  .then(()=>{
    console.log(' - start');
  })
  .catch((e)=>{
    console.error(e);
    console.log(' - start error');
  })