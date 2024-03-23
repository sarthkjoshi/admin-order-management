"use client";
import React, { createContext, useContext, useState } from "react";

interface TableIdContextType {
  tableId: string;
  setTableId: React.Dispatch<React.SetStateAction<string>>;
}

const TableIdContext = createContext<TableIdContextType>({
  tableId: "",
  setTableId: () => {},
});

export function TableIdProvider({ children }: { children: React.ReactNode }) {
  const [tableId, setTableId] = useState<string>("");

  return (
    <TableIdContext.Provider value={{ tableId, setTableId }}>
      {children}
    </TableIdContext.Provider>
  );
}

export const useTableId = () => {
  const context = useContext(TableIdContext);
  if (!context) {
    throw new Error("useTableId must be used within a TableIdProvider");
  }
  return context;
};
