require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strategy dash rifle color harvest light army gather'; 
let testAccounts = [
"0x1ea933d4b6b0bb922fadc619c2e6823e4261e688ab70b69725bc72789c486b8a",
"0x90e433c43412f3a1c17795ca20c20fe77831a1dc5524cca90be84b339fb547f6",
"0xfb24ef20dd0cf0db12c86883c2212e19bdf623959ff9e5eba9a91f92d9e0c73f",
"0xd38ed9086da9aa2906a6489bc22b55bced6053d4f0b73b1a4d7a4f98664840eb",
"0xf7759773f088a86607688d0743f24bce3237ac6fd62ee5aadec58f719e7e3e43",
"0x6e7178e972f4d3fb03331c18fbc15b73fac5004b9928734be3c70a62d8904dba",
"0x7b546330d1722b880ef1c2da7f7d51740f41c2366d3088e8a296abccd81e824d",
"0xc5530a76624219c5dd139074d3ab0899f8aa080520aa3faa0443440bd569bd56",
"0xe4ae231674a89b6f1ce0b203fab42112765f8025c05b5079dcb15e0560207b31",
"0x76749e8ca295e53d26a4229601e72000a40c112cabc3e3f74d417624a5d7920a"
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
