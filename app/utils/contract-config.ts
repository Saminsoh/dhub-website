
// DHUB Token Contract Configuration
// Replace these with your actual deployed contract details

export const DHUB_CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000' // Replace with your contract address

export const DHUB_CONTRACT_ABI = [
  // Replace with your contract ABI
  {
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
] as const

// Token Information
export const TOKEN_INFO = {
  name: 'DHUB',
  symbol: 'DHUB',
  decimals: 18,
  totalSupply: '1000000000', // 1 Billion tokens
  description: 'The Gulf Gecko Token - Powered by the spirit of the desert!'
}
