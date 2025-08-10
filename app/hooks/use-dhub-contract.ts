
'use client'

import { useReadContract, useAccount } from 'wagmi'
import { DHUB_CONTRACT_ADDRESS, DHUB_CONTRACT_ABI } from '../utils/contract-config'

export function useDhubBalance() {
  const { address } = useAccount()
  
  return useReadContract({
    address: DHUB_CONTRACT_ADDRESS as `0x${string}`,
    abi: DHUB_CONTRACT_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address
    }
  })
}

export function useDhubTotalSupply() {
  return useReadContract({
    address: DHUB_CONTRACT_ADDRESS as `0x${string}`,
    abi: DHUB_CONTRACT_ABI,
    functionName: 'totalSupply'
  })
}
