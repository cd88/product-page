'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!'
    })
  };
};
// try?
// const stripe = require('stripe')(process.env.STRIPE_ACCESS_TOKEN);

// original:
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//
// module.exports.getProductData = (event, context, callback) => {
//   return stripe.products.list({limit: 10})
//     .then((products) => {
//       const response = {
//         statusCode: 200,
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//         },
//         body: JSON.stringify({
//           data: products.data
//         }),
//       };
//       callback(null, response);
//     });
// };
//

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
