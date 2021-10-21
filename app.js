// let javascriptBarcodeReader =  require("javascript-barcode-reader");

// let image = new Image();
// image.crossOrigin = "Anonymous";
// image.src = "code-93.jpg";
// image.onload = function () {
//   javascriptBarcodeReader({
//     image: image,
//     barcode: "code-93"
//     // barcodeType: "interleaved"
//   })
//     .then((result) => {
//       console.log(result)
//     })
//     .catch(console.log);
// };

let javascriptBarcodeReader =  require("javascript-barcode-reader");

javascriptBarcodeReader({
  /* Image file Path || {data: Uint8ClampedArray, width, height} || HTML5 Canvas ImageData */
  image: "e.gif",
  barcode: "code-39",
  // barcodeType: 'industrial',
  options: {    
    // useAdaptiveThreshold: true // for images with sahded portions
    // singlePass: true
  }
})
  .then(code => {
    console.log(code)
  })
  .catch(err => {
    console.log(err)
  })

 // javascriptBarcodeReader();