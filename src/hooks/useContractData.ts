
import { useReadContract } from 'wagmi'
import { CONTRACT_ADDRESS, ERC20_ABI } from '@/utils/contract'
import { formatUnits } from 'ethers'

export function useContractData() {
  const { data: name } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ERC20_ABI,
    functionName: 'name',
  })

  const { data: symbol } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ERC20_ABI,
    functionName: 'symbol',
  })

  const { data: decimals } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ERC20_ABI,
    functionName: 'decimals',
  })

  const { data: totalSupplyRaw } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ERC20_ABI,
    functionName: 'totalSupply',
  })

  const totalSupply = totalSupplyRaw && decimals 
    ? formatUnits(totalSupplyRaw.toString(), Number(decimals))
    : undefined

  return {
    data: {
      name: name as string,
      symbol: symbol as string,
      decimals: decimals?.toString(),
      totalSupply,
    },
    isLoading: !name || !symbol || !decimals || !totalSupplyRaw,
  }
}
