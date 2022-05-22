/** @jsxImportSource @compiled/react */

import Link from "next/link";

export default function Footer() {
  return (
    <div
      css={{
        fontFamily: "Manrope",
        width: "100%",
        padding: "44px 30px",
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
        <div
          css={{
            fontSize: "24px",
            lineHeight: "33px",
            color: "rgba(0, 0, 0, 0.4)",
            fontWeight: "800",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <p css={{ margin: "0" }}>Copyright 2022</p>
          <div
            css={{
              fontSize: "16px",
              lineHeight: "22px",
              color: "#181350",
              marginTop: "7px",
            }}
          >
            <Link
              href="/"
              css={{ fontSize: "28px", lineHeight: "38px", color: "#181350" }}
            >
              CrediScore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
