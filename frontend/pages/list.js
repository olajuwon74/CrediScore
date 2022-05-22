/** @jsxImportSource @compiled/react */
import { useAppContext } from "../context/state";
import React from "react";
import Header from "../component/header";
import Link from "next/link";
import Download from "../images/dowload2.svg";
import Upload from "../images/upload.svg";
import Pdf from "react-to-pdf";
import { Web3Storage } from "web3.storage";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function List() {
  const { ipfsCid, setIpfsCid } = useAppContext();
  const ref = React.createRef();

  async function storeFiles(files) {
    const client = makeStorageClient();
    console.log(2);
    const cid = await client.put(files);
    console.log(3);
    setIpfsCid(cid);
    return cid;
  }

  const uploadFile = async (e) => {
    if (e.target.files.length > 0) {
      toast.success("File uploaded to website");
      toast.success("uploading to ipfs in progress");
      try {
        const cid = await storeFiles(e.target.files);
        console.log(cid);
        toast.success("uploading to ipfs successful");
      } catch {
        toast.error("uploading to ipfs failed");
      }
    }
  };

  function makeStorageClient() {
    console.log(1);
    return new Web3Storage({
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM0RkE5MjdCRDIzMjg4YzZkQmJlZDViODYxMDk5RTgxODJBMEQ0NGQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTMyMjMzNDI0NjEsIm5hbWUiOiJhZGViYXlvIn0.OLidIiQnaV2jdj-0FDS2kBisY00bIT2qX5giUQ9dN-E`,
    });
  }

  const options = {
    orientation: "landscape",
    unit: "in",
  };

  const header = [
    "Loam Amount",
    "Platform",
    "Date collected",
    "Repayment Date",
    "Status",
    "Verdict ",
  ];
  const content = [
    {
      loamAmount: "$400",
      platform: "Aave",
      dateCollected: "12/05/22",
      repaymentDate: "13/05/22",
      status: "Completed",
      verdict: "Positive",
    },
    {
      loamAmount: "$400",
      platform: "Aave",
      dateCollected: "12/05/22",
      repaymentDate: "13/05/22",
      status: "Completed",
      verdict: "Positive",
    },
    {
      loamAmount: "$400",
      platform: "Aave",
      dateCollected: "12/05/22",
      repaymentDate: "13/05/22",
      status: "Completed",
      verdict: "Positive",
    },
    {
      loamAmount: "$400",
      platform: "Aave",
      dateCollected: "12/05/22",
      repaymentDate: "13/05/22",
      status: "Completed",
      verdict: "Positive",
    },
    {
      loamAmount: "$400",
      platform: "Aave",
      dateCollected: "12/05/22",
      repaymentDate: "13/05/22",
      status: "Completed",
      verdict: "Positive",
    },
  ];
  return (
    <div>
      <Header />
      <div
        css={{
          fontFamily: "Manrope",
          width: "100%",
          padding: "92px 30px 104px",
          backgroundColor: "#F4F6FE",
          minHeight: "100vh",
        }}
      >
        <div
          ref={ref}
          css={{
            maxWidth: "1110px",
            width: "100%",
            margin: "auto",
            fontSize: "36px",
            lineHeight: "49px",
            backgroundColor: "rgba(224, 227, 237, 0.5)",
            padding: "26px 15px 80px",
            fontWeight: "700",
            borderRadius: "10px",
          }}
        >
          <div
            css={{
              backgroundColor: "#F4F6FE",
              padding: "24px 5px",
              width: "100%",
              display: "flex",
              fontSize: "20px",
              lineHeight: "27px",
              fontWeight: "600",
            }}
          >
            {header.map((item, index) => {
              return (
                <div
                  key={index}
                  css={{
                    width: "19%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p css={{ margin: "0" }}>{item}</p>
                </div>
              );
            })}
          </div>
          <div
            css={{
              padding: "11px 5px 20px",
              width: "100%",
              fontSize: "16px",
              lineHeight: "22px",
              fontWeight: "600",
            }}
          >
            {content.map((item, index) => {
              return (
                <div key={index} css={{ padding: "35px 0px", display: "flex" }}>
                  <div
                    key={index}
                    css={{
                      width: "19%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p css={{ margin: "0" }}>{item.loamAmount}</p>
                  </div>
                  <div
                    key={index}
                    css={{
                      width: "19%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p css={{ margin: "0" }}>{item.platform}</p>
                  </div>
                  <div
                    key={index}
                    css={{
                      width: "19%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p css={{ margin: "0" }}>{item.dateCollected}</p>
                  </div>
                  <div
                    key={index}
                    css={{
                      width: "19%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p css={{ margin: "0" }}>{item.repaymentDate}</p>
                  </div>
                  <div
                    key={index}
                    css={{
                      width: "19%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p css={{ margin: "0" }}>{item.status}</p>
                  </div>
                  <div
                    key={index}
                    css={{
                      width: "19%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p css={{ margin: "0" }}>{item.verdict}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          css={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Pdf
            targetRef={ref}
            filename="report.pdf"
            options={options}
            x={0.5}
            y={0.5}
            scale={0.8}
          >
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                css={{
                  padding: "18px 20px",
                  marginRight: "30px",
                  backgroundColor: "#8772FE",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  fontSize: "24px",
                  lineHeight: "33px",
                  fontWeight: "600",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="file"
                  css={{
                    display: "none",
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
                <p css={{ margin: "0", marginRight: "32px" }}>
                  Download report
                </p>
                <Download />
              </button>
            )}
          </Pdf>
          <button
            css={{
              padding: "18px 20px",
              marginRight: "30px",
              color: "#8772FE",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              fontSize: "24px",
              lineHeight: "33px",
              fontWeight: "600",
              border: "1px solid #8772FE",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <input
              onChange={(e) => {
                uploadFile(e);
              }}
              type="file"
              css={{
                width: "100%",
                height: "100%",
                opacity: "0",
                position: "absolute",
              }}
            />
            <p css={{ margin: "0", marginRight: "32px" }}>Export report</p>
            <Upload />
          </button>
        </div>
        <div
          css={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {ipfsCid && <p> Ipfs CID for report: {ipfsCid}</p>}
        </div>
      </div>
    </div>
  );
}
