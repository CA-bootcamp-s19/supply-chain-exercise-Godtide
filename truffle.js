module.exports = {
  compilers: {
   solc: '0.5.0'
    },  
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
