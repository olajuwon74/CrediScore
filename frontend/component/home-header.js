/** @jsxImportSource @compiled/react */

import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function HomeHeader() {
  return (
    <div>
      <ToastContainer />
      <div
        css={{
          fontFamily: "Manrope",
          width: "100%",
          padding: "40px 30px",
          backgroundColor: "rgba(146, 128, 247, 0.14)",
        }}
      >
        <div
          css={{
            maxWidth: "1512px",
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "28px",
            lineHeight: "38px",
            color: "#181350",
            fontWeight: "700",
          }}
        >
          <Link
            href="/"
            css={{ fontSize: "28px", lineHeight: "38px", color: "#181350" }}
          >
            CrediScore
          </Link>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "300px",
              width: "100%",
              fontSize: "24px",
              lineHeight: "33px",
              color: "rgba(0, 0, 0, 0.4)",
              fontWeight: "800",
            }}
          >
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
