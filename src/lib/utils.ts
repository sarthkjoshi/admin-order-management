import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";

export const exportTableToPDF = (tableId: string): void => {
  const doc = new jsPDF();
  const table = document.getElementById(tableId);

  if (table) {
    // Use html2canvas to render table as image
    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Calculate aspect ratio
      const imgWidth = doc.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add image to PDF, fitting entire image within page
      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Save PDF
      doc.save("orders.pdf");
    });
  } else {
    console.error(`Table with id ${tableId} not found.`);
  }
};

export const exportTableToExcel = (tableId: string): void => {
  const table = document.getElementById(tableId);
  if (table) {
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, "orders.xlsx");
  } else {
    console.error(`Table with id ${tableId} not found.`);
  }
};

export const getStatusClass = (status: string) => {
  switch (status) {
    case "SUCCESS":
      return "border-green-500 text-green-500";
    case "FAILURE":
      return "border-red-500 text-red-500";
    case "PENDING":
      return "border-yellow-500 text-yellow-400";
    case "SENT":
      return "border-orange-500 text-amber-600";
    case "REFUND INITIATED":
      return "border-blue-800 text-indigo-800";
    case "REFUND COMPLETED":
      return "border-purple-500  text-fuchsia-700";
    default:
      return "";
  }
};
