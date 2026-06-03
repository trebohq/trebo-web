"use client";

import React from "react";

interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
  onRowClick?: (item: T) => void;
}

export function DataTable<T>({ data, columns, keyExtractor, onRowClick }: DataTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-[#eae6df] bg-white">
      <table className="w-full text-sm text-left whitespace-nowrap">
        <thead className="bg-[#f9fafb] text-[#0a1a3b]/60 text-xs uppercase font-bold tracking-wider border-b border-[#eae6df]">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className={`px-5 py-3.5 ${col.className || ""}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#eae6df]">
          {data.map((item) => (
            <tr
              key={keyExtractor(item)}
              onClick={() => onRowClick?.(item)}
              className={`hover:bg-[#f9fafb]/50 transition-colors ${onRowClick ? "cursor-pointer" : ""}`}
            >
              {columns.map((col, i) => (
                <td key={i} className={`px-5 py-4 text-[#0a1a3b] font-medium ${col.className || ""}`}>
                  {col.cell ? col.cell(item) : col.accessorKey ? (item[col.accessorKey] as React.ReactNode) : null}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-5 py-12 text-center text-[#0a1a3b]/50">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
