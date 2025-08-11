
'use client'

import { useReadContract, useAccount } from 'wagmi'
import { formatUnits } from 'viem'
import { DHUB_CONTRACT_ADDRESS, DHUB_CONTRACT_ABI, TOKEN_INFO, isContractConfigured } from '../utils/contract-config'
import { useMemo } from 'react'

export function useDhubBalance() {
  const { address } = useAccount()
  
  const { data: rawBalance, isLoading, error } = useReadContract({
    address: DHUB_CONTRACT_ADDRESS as `0x${string}`,
    abi: DHUB_CONTRACT_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isContractConfigured()
    }
  })

  const formattedBalance = useMemo(() => {
    if (!rawBalance) return '0'
    return formatUnits(rawBalance as bigint, TOKEN_INFO.decimals)
  }, [rawBalance])

  return {
    balance: formattedBalance,
    rawBalance,
    isLoading,
    error
  }
}

export function useDhubTotalSupply() {
  const { data: rawTotalSupply, isLoading, error } = useReadContract({
    address: DHUB_CONTRACT_ADDRESS as `0x${string}`,
    abi: DHUB_CONTRACT_ABI,
    functionName: 'totalSupply',
    query: {
      enabled: isContractConfigured()
    }
  })

  const formattedTotalSupply = useMemo(() => {
    if (!rawTotalSupply) return TOKEN_INFO.totalSupply // Fallback to static value
    const formatted = formatUnits(rawTotalSupply as bigint, TOKEN_INFO.decimals)
    return Number(formatted).toLocaleString()
  }, [rawTotalSupply])

  return {
    totalSupply: formattedTotalSupply,
    rawTotalSupply,
    isLoading,
    error,
    isLive: !!rawTotalSupply && isContractConfigured()
  }
}

export function useDhubTokenName() {
  const { data: name, isLoading, error } = useReadContract({
    address: DHUB_CONTRACT_ADDRESS as `0x${string}`,
    abi: DHUB_CONTRACT_ABI,
    functionName: 'name',
    query: {
      enabled: isContractConfigured()
    }
  })

  return {
    name: name || TOKEN_INFO.name,
    isLoading,
    error,
    isLive: !!name && isContractConfigured()
  }
}

export function useDhubTokenSymbol() {
  const { data: symbol, isLoading, error } = useReadContract({
    address: DHUB_CONTRACT_ADDRESS as `0x${string}`,
    abi: DHUB_CONTRACT_ABI,
    functionName: 'symbol',
    query: {
      enabled: isContractConfigured()
    }
  })

  return {
    symbol: symbol || TOKEN_INFO.symbol,
    isLoading,
    error,
    isLive: !!symbol && isContractConfigured()
  }
}

// Combined hook for all token data
export function useDhubTokenData() {
  const totalSupplyData = useDhubTotalSupply()
  const nameData = useDhubTokenName()
  const symbolData = useDhubTokenSymbol()
  const { address } = useAccount()
  const balanceData = useDhubBalance()

  return {
    totalSupply: totalSupplyData.totalSupply,
    name: nameData.name,
    symbol: symbolData.symbol,
    userBalance: address ? balanceData.balance : null,
    isLoading: totalSupplyData.isLoading || nameData.isLoading || symbolData.isLoading,
    isLive: totalSupplyData.isLive || nameData.isLive || symbolData.isLive,
    contractAddress: DHUB_CONTRACT_ADDRESS,
    isContractValid: isContractConfigured()
  }
}
