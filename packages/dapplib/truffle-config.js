require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad gloom process outer track'; 
let testAccounts = [
"0xdbb7ab8ab57cf4338751423b74ea0dbce052568f09f4c944945b3c6b319077a7",
"0xc96338e474309f790a2df4c13611ff310761050294d5f7721f38bd473af71157",
"0x7106be3b19154090972f8a9d88feb431d4772679c939863c3e39d09a31b64d47",
"0x96492815735b58061cceff5ffc4ef5b1fc37d8563aded4d4038d6ba892eba939",
"0xfabaa25366255e2b87162810e4b9fdfb948113571d62b82d97c41a934915d276",
"0xd56fbb9917c8bc40031dca2aa1edf4247165207bb1635ae0d907f688489273c2",
"0xb20ee19140796b47c2f602ddfe27c0581b9bdd472d3759938dfb49ddb0fab76d",
"0xd701df99ddc504cf4b74cdbfb9ea5b161d12dac55c9fdc5ac433b2fb8740c826",
"0xd46166313652fc99dc67bea954f1affe4599ad6a88760d84e6bc2082fb237c0a",
"0x69d6899e67acf2a063f26e74c153b4b87da74db571283372aaf7b2dcb5884760"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
