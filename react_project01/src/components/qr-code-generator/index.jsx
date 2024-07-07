import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [value, setValue] = useState("");
  const [qrState, setQRstate] = useState("");

  return (
    <>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={qrState}
        placeholder="Enter your value here"
        onChange={(e) => setQRstate(e.target.value)}
      />
      <button
        disabled={qrState !== "" ? false : true}
        onClick={() => {
          setValue(qrState);
          setQRstate("");
        }}
      >
        Get QR
      </button>
      <div>{<QRCode size={400} value={value} />}</div>
    </>
  );
}
