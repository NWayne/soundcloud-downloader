import '../manifest.json';

console.log('asd');

window.fetch(`https://api.soundcloud.com/resolve.json?url=${escape(window.location.href)}&client_id=a3e059563d7fd3372b49b37f00a00bcf`).then(function(data) {
  console.log(data);
}).catch(function(error) {
  console.log(error);
});

