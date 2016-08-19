// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallback('Philadelphia', function(err,temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// })

// Challange

function addPromise (a, b) {
  return new Promise (function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('both not numbers');
    }
  });
}


addPromise(2,3).then(function(sum){
  console.log('success', sum);
}, function(err) {
  console.log('fail', err);
});

addPromise('wow',9).then(function(sum){
console.log('this should not show');
}, function(err) {
  console.log('this should appear', err);
});
