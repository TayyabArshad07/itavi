import React from "react";

const TRDownloadBtn = () => {
  const handleDownload = () => {
    const pdfUrl = "/pdf/TR.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "example.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-[#ca8a04] w-fit hover:bg-[#ca8b04] text-white btnshadow font-bold py-2 px-4 rounded relative z-[9999999999]"
    >
      Download Report
    </button>
  );
};

export default TRDownloadBtn;
