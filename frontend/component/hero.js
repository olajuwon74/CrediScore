/** @jsxImportSource @compiled/react */

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Image from "next/image";
import { useAppContext } from "../context/state";
import HeroImage from "../images/hero-image.png";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Hero() {
  const router = useRouter();
  const providerOptions = {
    walletlink: {
      package: CoinbaseWalletSDK,
      options: {
        appName: "Web 3 Modal Demo",
        infuraId: "2007d5f12608499d9cbddfe532a9759b",
      },
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "434d293815cd474081e89aefc46a5371",
      },
    },
    // binancechainwallet: {
    //   package: true,
    // },
  };

  const {
    connected,
    setConnected,
    library,
    setLibrary,
    signer,
    setSigner,
    network,
    setNetwork,
    accounts,
    setAccount,
    setProvider,
  } = useAppContext();

  const web3ModalRef = React.useRef();

  const connectWallet = async () => {
    try {
      const provider = await web3ModalRef.current.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const { chainId } = await library.getNetwork();

      if (chainId !== 4) {
        toast.error("Change the network to Rinkeby");
        throw new Error("Change network to Rinkeby");
      }

      const accounts = await library.listAccounts();
      const network = await library.getNetwork().name;
      const signer = library.getSigner();
      setProvider(provider);
      setLibrary(library);
      setSigner(signer);
      setConnected(true);
      if (accounts) setAccount(accounts[0]);
      setNetwork(network);
      toast.success("wallet Connected");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const refreshState = () => {
    setConnected(false);
  };

  const disconnectWallet = async () => {
    web3ModalRef.current = new Web3Modal({
      network: "rinkeby",
      cacheProvider: true,
      // disableInjectedProvider: true,
      providerOptions,
    });
    await web3ModalRef.current.clearCachedProvider();
    refreshState();
    setConnected(false);
    toast.success("Wallet Disconnected");
  };

  React.useEffect(() => {
    if (connected == false) {
      web3ModalRef.current = new Web3Modal({
        network: "rinkeby",
        cacheProvider: true,
        // disableInjectedProvider: true,
        providerOptions,
      });
    }
  }, []);
  return (
    <div
      css={{
        width: "100%",
        position: "relative",
        height: "481px",
      }}
    >
      <Image src={HeroImage} alt="Hero Image" layout="fill" />
      <div
        css={{
          width: "100%",
          position: "absolute",
          padding: "0 30px",
          top: "0px",
          left: "0px",
        }}
      >
        <div
          css={{
            maxWidth: "1512px",
            width: "100%",
            margin: "auto",
          }}
        >
          <div
            css={{
              maxWidth: "649px",
              width: "100%",
              fontSize: "32px",
              lineHeight: "43px",
              fontWeight: "600",
              fontFamily: "Manrope",
              zIndex: "9",
              color: "#000000",
              // position: "absolute",
              paddingTop: "108px",
              // left: "0px",
            }}
          >
            <p css={{ marginBottom: "94px" }}>
              Get access to undercollaterized loans and use credit score both on
              and off crypto sector to enjoy diverse benefits
            </p>
            {connected ? (
              <button
                onClick={disconnectWallet}
                css={{
                  padding: "18px 44px",
                  marginRight: "30px",
                  backgroundColor: "#8772FE",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  fontSize: "24px",
                  lineHeight: "33px",
                  fontWeight: "600",
                  border: "none",
                  ":hover": {
                    backgroundColor: "rgba(135, 114, 254, 0.8)",
                  },
                }}
              >
                Disconnect Wallet
              </button>
            ) : (
              <button
                onClick={connectWallet}
                css={{
                  padding: "18px 44px",
                  marginRight: "30px",
                  backgroundColor: "#8772FE",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  fontSize: "24px",
                  lineHeight: "33px",
                  fontWeight: "600",
                  border: "none",
                  ":hover": {
                    backgroundColor: "rgba(135, 114, 254, 0.8)",
                  },
                }}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
