// * controller and link
// * link can touch the DOM contents
// * second directive
// * pre and post link


angular.module('app', [])
  .directive('firstDirective', function() {
    return {
      scope: true,
      compile: function(el, attrs) {
        console.log('first directive compile');
        return {
          pre: function() {
            console.log('first directive pre link');
          },
          post: function() {
            console.log('first directive post link');
          }
        }
      },
      controller: function($scope) {
        console.log('first directive controller');
      }
    }
  })
  .directive('secondDirective', function() {
    return {
      scope: true,
      compile: function() {
        console.log('second directive compile');
        return {
          pre: function() {
            console.log('second directive pre link');
          },
          post: function() {
            console.log('second directive post link');
          }
        }
      },
      controller: function($scope) {
        console.log('second directive controller');
      }
    }
  })
  //.directive('secondDirective', function() {
  //  return {
  //    scope: true,
  //    controller: function($scope) {
  //      console.log('second directive controller');
  //    },
  //    link: function() {
  //      console.log('second directive link');
  //    }
  //  }
  //})




// link: {
//   pre:function() {
//     console.log('First pre directive link');
//   },
//   post:function() {
//     console.log('First post directive link');
//   }
// }

// compile: function(el, attrs) {
//   console.log('First compile');
//   return {
//     pre:function() {
//       console.log('First pre directive link');
//     },
//     post:function() {
//       console.log('First post directive link');
//     }
//   }
// },





// initial state

// angular.module('app', [])
//   .directive('firstDirective', function() {
//     return {
//       scope: true,
//       controller: function($scope) {
//         console.log('first directive controller');
//       },
//       link: function() {
//         console.log('first directive link');
//       }
//     }
//   })
//   //.directive('secondDirective', function() {
//   //  return {
//   //    scope: true,
//   //    controller: function($scope) {
//   //      console.log('second directive controller');
//   //    },
//   //    link: function() {
//   //      console.log('second directive link');
//   //    }
//   //  }
//   //})
