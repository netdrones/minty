require("@nomiclabs/hardhat-waffle");

/* suck out variable with dotenv */
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.7.3",

    defaultNetwork: 'localhost',
    networks: {
        hardhat: {},
        localhost: {},
        rinkeby: {
            url: `https://eth-rinkeyby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
            account: [`0x${process.env.RINKEBY_PRIVATE_KEY}`],
        },
    },
};

