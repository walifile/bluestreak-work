// // backend logic
// function calculate(num_1, num_2, operator) {
//   let fractionEnabled = false,
//     sum,
//     length;

//   switch (operator) {
//     case "+":
//       sum = num_1 + num_2;
//       break;

//     case "-":
//       sum = num_1 - num_2;
//       break;

//     case "*":
//       sum = num_1 * num_2;
//       break;

//     case "/":
//       sum = num_1 / num_2;
//       break;
//   }
//   length = sum.toString().length;

//   const answer = document.getElementById("ans");
//   let counter = 0;
//   const inputs = document.querySelectorAll(".img img");

//   inputs.forEach((input) => {
//     input.addEventListener("click", () => {
//       if (length === 2) {
//         if (counter === 2) {
//           console.log(answer.textContent);
//           counter = 0;
//           answer.textContent = "?";
//         }
//         if (answer.textContent === "?") {
//           answer.textContent = input.getAttribute("id");
//           console.log(answer.textContent);
//         } else {
//           answer.textContent += input.getAttribute("id");
//           console.log(answer.textContent);
//         }
//       }
//       counter++;
//     });
//   });
// }
// calculate(1, 52, "+");
