export default function FreeNFT() {

    return (
        <div style={{height: "100vh", backgroundColor: "#242424", display: "flex", flexDirection: "column", gap: 20, background: "rgba(0,0,0,0.7)", padding:20}}>
          <h2>Para obtener tu NFT solo conecta tu wallet y luego pulsa en "Mint (Free)"</h2>
          <iframe
            src="https://gateway.ipfscdn.io/ipfs/QmPaVYdGue8zEXFKqrtVHpvzBvufM1DYzw5n1of3KVPG88/nft-drop.html?contract=0xBc28a666F9Dc2591c6D2206c0Fb6DeCaE93ec4d4&chainId=80001&theme=dark&primaryColor=orange"
            width="600px"
            height="600px"
            style={{maxWidth:"100%"}}
            frameborder="0"
        ></iframe>
        </div>
      );
  }