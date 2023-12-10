import React from "react";
import CardInfoContainer from "./_components/card-info-container";
import TableContainer from "./_components/table-container";

export default function AnalysisPage() {
  return (
    <div className="p-5 space-y-5">
      <CardInfoContainer />

      <TableContainer />
    </div>
  );
}
