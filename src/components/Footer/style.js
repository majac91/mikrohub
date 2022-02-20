

//   svg {
//     width: 200px;
//     position: relative;
//     z-index: 10;
//   }

//   #heart {
//     fill: #eee;
//     stroke-width: 20px;
//     stroke: #BBA998;
//     stroke-dasharray: 1600;
//     stroke-dashoffset: 1600;
//     stroke-linecap: round;
//   }

//   span, span::after {
//     display: block;
//     width: 24px;
//     height: 24px;
//     background-color: transparent;
//     border-radius: 50%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%) scale(0);

//     box-shadow: 0 -160px 0 red, 0 160px 0 red, -160px 0 0 red, 160px 0 0 red;
//   }

//   span::after {
//     content: '';
//     transform: translate(-50%, -50%) rotate(45deg) scale(0);
//   }

//   input[type="checkbox"] {
//     display: none;
//   }

//   label {
//     cursor: pointer;
//   }

//   input[type="checkbox"]:checked + svg #heart {
//     animation: 1s draw-heart linear forwards;
//   }

//   @keyframes draw-heart {
//     0% {
//       stroke-dashoffset: 1600;
//     }
//     80% {
//       stroke-dashoffset: 0;
//       fill: #BBA998;
//     }
//     100% {
//       fill: #BBA998;
//       stroke-dashoffset: 0;
//     }
//   }






//   input[type="checkbox"]:checked + svg {
//     animation: 1s pop linear forwards;
//   }

//   @keyframes pop {
//     0% {
//       transform: scale(1);
//     }
//     70% {
//       transform: scale(1);
//     }
//     80% {
//       transform: scale(1.2);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }