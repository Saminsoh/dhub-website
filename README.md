[README.md](https://github.com/user-attachments/files/21555053/README.md)

# DHUB - Diamond Hands Desert Lizard 🦎

A professional meme coin website with comprehensive Web3 integration for the DHUB token on Ethereum mainnet.

## 🚀 Features

- **Multi-Wallet Support**: MetaMask, Coinbase Wallet, WalletConnect, Trust Wallet
- **Live Contract Data**: Real-time token information from Ethereum blockchain
- **Responsive Design**: Mobile-first design with desert lizard theme
- **Web3 Integration**: Complete wagmi + RainbowKit setup
- **Professional UI**: Modern design with smooth animations
- **SEO Optimized**: Meta tags and OpenGraph support

## 📋 Contract Information

- **Contract Address**: `0xc52ebCa549c24a49bcb69941B976baED89E540Eb`
- **Token Name**: DhubToken (Diamond Hands Desert Lizard)
- **Symbol**: DHUB
- **Total Supply**: 7.77B DHUB
- **Network**: Ethereum Mainnet
- **Decimals**: 18

## 🛠️ Setup Instructions

### 1. Clone or Download

Download this project and extract it to your desired location.

### 2. Install Dependencies

```bash
cd dhub-web
npm install
```

### 3. Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

**Required:**
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: Get from [WalletConnect Cloud](https://cloud.walletconnect.com)

**Optional (for better performance):**
- `NEXT_PUBLIC_ALCHEMY_API_KEY`: Get from [Alchemy](https://www.alchemy.com)
- `NEXT_PUBLIC_INFURA_API_KEY`: Get from [Infura](https://infura.io)

### 4. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 5. Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Upload to GitHub:**
   - Create a new repository on GitHub
   - Upload all project files to the repository
   - Make sure `.env.local` is NOT uploaded (it's in .gitignore)

2. **Connect to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Environment Variables:**
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add your environment variables:
     - `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
     - Any other optional variables

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Direct Upload

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts and add environment variables when asked.

## 📁 Project Structure

```
dhub-web/
├── src/
│   ├── app/                 # Next.js 14 App Router
│   │   ├── layout.tsx       # Root layout with providers
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── providers.tsx    # Web3 providers setup
│   │   ├── header.tsx       # Header with wallet connection
│   │   ├── hero.tsx         # Hero section
│   │   ├── token-info.tsx   # Live contract data
│   │   ├── tokenomics.tsx   # Tokenomics information
│   │   ├── community.tsx    # Social links
│   │   └── footer.tsx       # Footer
│   ├── hooks/               # Custom React hooks
│   │   └── useContractData.ts # Contract data fetching
│   └── utils/               # Utility functions
│       ├── wagmi.ts         # Wagmi configuration
│       └── contract.ts      # Contract constants
├── public/                  # Static assets
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── vercel.json             # Vercel configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
└── README.md               # This file
```

## 🎨 Customization

### Colors & Theme
- Edit `src/app/globals.css` for custom CSS
- Modify `tailwind.config.ts` for Tailwind customization
- Update RainbowKit theme in `src/components/providers.tsx`

### Content
- Update social links in `src/components/community.tsx`
- Modify tokenomics data in `src/components/tokenomics.tsx`
- Change hero content in `src/components/hero.tsx`

### Contract Integration
- Contract address is defined in `src/utils/contract.ts`
- Add more contract functions to the ABI if needed
- Extend `useContractData` hook for additional data

## 🔧 Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Wagmi**: React hooks for Ethereum
- **RainbowKit**: Wallet connection UI
- **Ethers.js**: Ethereum library
- **Framer Motion**: Animation library
- **Radix UI**: Accessible UI components

## 📱 Wallet Support

- MetaMask
- Coinbase Wallet
- WalletConnect (supports 100+ wallets)
- Trust Wallet
- Rainbow Wallet
- And many more through WalletConnect

## 🔒 Security Notes

- Never commit private keys or sensitive data
- Use environment variables for API keys
- The contract is on Ethereum mainnet - double-check all addresses
- Always verify contract addresses on Etherscan

## 📞 Support

For issues or questions:
1. Check the contract on [Etherscan](https://etherscan.io/address/0xc52ebCa549c24a49bcb69941B976baED89E540Eb)
2. Verify all environment variables are set correctly
3. Ensure you have a WalletConnect Project ID

## 🦎 Desert Lizard Philosophy

Built to survive the crypto desert with diamond hands! This website represents the DHUB community's commitment to long-term holding and weathering market storms like a resilient desert lizard.

---

**⚠️ Disclaimer**: Cryptocurrency investments are subject to high market risk. Please invest responsibly and do your own research.
