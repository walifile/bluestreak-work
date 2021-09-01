// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log("Making request to Google");
//     if (location === "Google") {
//       resolve(`Google says hi`);
//     } else {
//       reject(`We can only talk to Goolge people`);
//     }
//   });
// }

// function processRequest(response) {
//   return new Promise((resolve) => {
//     console.log("Processing response");
//     resolve(`Extra information ${response}`);
//   });
// }

// Promises method

// makeRequest("Google")
//   .then((response) => {
//     console.log(response);
//     return processRequest(response).then((processedResponse) => {
//       console.log(processedResponse);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async await method

// async function responseCall() {
//   try {
//     const reponse = await makeRequest("Google");
//     console.log(reponse);
//     const processedResponse = await processRequest(reponse);
//     console.log(processedResponse);
//   } catch (error) {
//     console.log(error);
//   }
// }

//responseCall();

async function callJSONPlaceholder() {
  const response = await fetch("/problems.json");
  const res = response.json();
  console.log(res);
  return res;
}

callJSONPlaceholder()
  .then((response) => {
    const question = response.map((problems) => problems.problem);
    console.log(question);
  })
  .catch((error) => {
    console.log(error);
  });
