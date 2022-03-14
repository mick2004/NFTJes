const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Bored APS",
      attributes: [
        {
          "trait_type": "Bored",
          "value": "Extremely High"
        },
        {
          "trait_type": "Naughty",
          "value": "A bit"
        }
      ],
     
      image: "https://gateway.ipfs.io/ipfs/QmU6HdS5t52C12e3vBEKidPiagjseSmpM5Lh46uccWjKSD",
      description: "Bored state APS!"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
