/** @jsxImportSource @compiled/react */
import Header from "../component/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Details() {
  const router = useRouter();
  // form validation rules
  const validationSchema = Yup.object().shape({
    platform: Yup.string().required("Platform is required"),
    apiKey: Yup.string().required("Api Key is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    router.push("/dashboard");
    return false;
  }
  return (
    <div>
      <Header />
      <div
        css={{
          fontFamily: "Manrope",
          width: "100%",
          padding: "83px 30px 32px",
          backgroundColor: "#F4F6FE",
          minHeight: "100vh",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          css={{
            maxWidth: "892px",
            width: "100%",
            margin: "auto",
            fontSize: "36px",
            lineHeight: "49px",
            backgroundColor: "rgba(224, 227, 237, 0.5)",
            padding: "38px 59px 70px",
            fontWeight: "700",
            borderRadius: "10px",
          }}
        >
          <div css={{ width: "100%", marginBottom: "33px" }}>
            <p
              css={{
                fontSize: "16px",
                lineHeight: "22px",
                fontWeight: "600",
                color: "rgba(0, 0, 0, 0.5)",
                marinBottom: "10px",
                marginLeft: "20px",
              }}
            >
              Choose platform
            </p>
            <select
              name="platform"
              {...register("platform")}
              css={{
                backgroundColor: "#F4F6FE",
                width: "100%",
                height: "100px",
                border: "none",
                padding: "0 30px",
                color: "rgba(0, 0, 0, 0.5)",
                fontSize: "16px",
                lineHeight: "22px",
                marginBottom: "30px",
                "&:focus": {
                  border: "none",
                },
              }}
              required
            >
              <option value="KUCOIN" css={{ height: "60px" }}>
                KUCOIN
              </option>
              <option value="KUCOIN2" css={{ height: "60px" }}>
                KUCOIN2
              </option>
            </select>
            <div
              css={{
                color: "red",
                fontSize: "16px",
                lineHeight: "22px",
              }}
            >
              {errors.platform?.message}
            </div>
          </div>
          <div css={{ width: "100%", marginBottom: "26px" }}>
            <p
              css={{
                fontSize: "16px",
                lineHeight: "22px",
                fontWeight: "600",
                color: "rgba(0, 0, 0, 0.5)",
                marinBottom: "10px",
                marginLeft: "20px",
              }}
            >
              Enter generated API KEY
            </p>
            <input
              name="apiKey"
              {...register("apiKey")}
              css={{
                backgroundColor: "#F4F6FE",
                border: "none",
                height: "100px",
                width: "100%",
                padding: "0 30px",
              }}
              type="password"
            ></input>
            <div
              css={{
                color: "red",
                fontSize: "16px",
                lineHeight: "22px",
              }}
            >
              {errors.apiKey?.message}
            </div>
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "16px",
              lineHeight: "22px",
              fontWeight: "600",
              color: "rgba(135, 114, 254, 0.8)",
            }}
          >
            <div
              css={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                name="acceptTerms"
                {...register("acceptTerms")}
                required
                type="checkbox"
                css={{
                  height: "20px",
                  width: "20px",
                  backgroundColor: "#F4F6FE",
                  border: "none",
                }}
              ></input>
              <p
                css={{
                  fontSize: "14px",
                  lineHeight: "12px",
                  fontWeight: "400",
                  margin: "0",
                  marginLeft: "10px",
                }}
              >
                I acknowledge that the information provided belongs to me
              </p>
            </div>
            <Link href="/">How to get my API key</Link>
          </div>
          <div
            css={{
              color: "red",
              fontSize: "16px",
              lineHeight: "22px",
            }}
          >
            {errors.acceptTerms?.message}
          </div>
          <div
            css={{
              display: "flex",
              marginTop: "50px",
              justifyContent: "center",
            }}
          >
            <button
              css={{
                padding: "18px 91px",
                marginRight: "30px",
                backgroundColor: "#181350",
                color: "#FFFFFF",
                borderRadius: "5px",
                fontSize: "24px",
                lineHeight: "33px",
                fontWeight: "600",
                border: "none",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
