require("@nomiclabs/hardhat-waffle");



module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: "0x65017e8e6754e83827d40a1faa3154e98621bb1eb2a43f928c005c81f16e7cba",
          balance: "100000000000000000000000000000000000000000000"
        },
        {
          privateKey: "0x05017e8e6754e83827d40a1faa3154e98621bb1eb2a43f928c005c81f16e7cba",
          balance: "100000000000000000000000000000000000000000000"
        },
        {
          privateKey: "0x15017e8e6754e83827d40a1faa3154e98621bb1eb2a43f928c005c81f16e7cba",
          balance: "100000000000000000000000000000000000000000000"
        },
      ],
    },
  },
};
