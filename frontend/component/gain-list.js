/** @jsxImportSource @compiled/react */
import Image from "next/image";
import ListImage1 from "../images/list-image1.png";
import ListImage2 from "../images/list_image2.png";
import ListImage3 from "../images/list_image3.png";

export default function GainList() {
  const list = [
    {
      image: ListImage1,
      topic: "Accurate tracking ",
      description:
        "Our system proposes an accurate tracking of loan trasactions over time and generates a score based on these transactions over time",
    },
    {
      image: ListImage2,
      topic: "Improved benefits",
      description:
        "Get access to undercollaterized loans and use credit score both on and off crypto sector to enjoy diverse benefits",
    },
    {
      image: ListImage3,
      topic: "Generate credit score",
      description:
        "Users can generate credit score over time and use this outside a decentralized system ",
    },
  ];
  return (
    <div
      css={{
        fontFamily: "Manrope",
        width: "100%",
        padding: "57px 30px 32px",
        backgroundColor: "#F4F6FE",
      }}
    >
      <div
        css={{
          maxWidth: "1512px",
          width: "100%",
          margin: "auto",
          fontSize: "36px",
          lineHeight: "49px",
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "700",
        }}
      >
        <p>What you gain</p>
        <div>
          {list.map((item, index) => {
            return (
              <div
                key={index}
                css={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "54px",
                }}
              >
                <div
                  css={{
                    maxWidth: "717px",
                    height: "273px",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <Image src={item.image} alt={item.topic} layout="fill" />
                </div>
                <div
                  css={{ maxWidth: "628", width: "100%", paddingLeft: "20px" }}
                >
                  <p
                    css={{
                      fontSize: "32px",
                      lineHeight: "43px",
                      color: "#000000",
                      fontWeight: "600",
                    }}
                  >
                    {item.topic}
                  </p>
                  <p
                    css={{
                      fontSize: "24px",
                      lineHeight: "33px",
                      color: "rgba(0, 0, 0, 0.5)",
                      fontWeight: "600",
                      marginTop: "40px",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
