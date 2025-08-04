
export const DHUB_CONTRACT_ADDRESS = '0xc52ebCa549c24a49bcb69941B976baED89E540Eb'

export const TOKEN_INFO = {
  name: 'DesertDhub',
  symbol: 'Dhub',
  totalSupply: '7,777,777,777',
  decimals: 18,
  description: 'The premier meme token representing the spirit of the Gulf desert and the resilient dhub lizard.',
}

export const DHUB_ABI = [
  // ERC-20 Standard Functions
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
