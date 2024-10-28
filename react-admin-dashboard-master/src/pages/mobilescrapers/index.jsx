import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MOBILESCRAPER_API_URL } from "../../data/provider";

const Mobilescrapers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(MOBILESCRAPER_API_URL)
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, []);

  console.log(tableData);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "nodeName",
      headerName: "NodeName",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "startTime",
      headerName: "StartTime",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="MOBILESCRAPERS PROD"
        subtitle="List of available mobile scrapers"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={tableData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Mobilescrapers;
