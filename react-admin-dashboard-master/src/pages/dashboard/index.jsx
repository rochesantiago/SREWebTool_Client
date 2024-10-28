import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import React, { useState, useEffect } from "react";
import DataProvider, { DASHBOARD_API_URL } from "../../data/provider";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(DASHBOARD_API_URL)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  // Temporary. Will refactor this from API to improve performance and readability
  var thbModel = {
    tscbi: 0,
    tktbi: 0,
    tkkbi: 0,
    tbbli: 0,
  };
  var myrModel = {
    mhlbi: 0,
    mpbbc: 0,
    mmbmi: 0,
  };
  var idrModel = {
    imanb: 0,
    ibcai: 0,
    ibnii: 0,
    iperb: 0,
  };
  var vndModel = {
    vacbi: 0,
    vvcbi: 0,
    vsaci: 0,
    vdabi: 0,
    vvtbi: 0,
  };
  var totalActiveScrapers = 0;
  var totalFailedScrapers = 0;

  if (data.length > 0) {
    var thbDashboards = data
      .filter((i) => i.currencyCode === "THB")
      .map((i) => i.dashboard)[0];
    thbModel.tscbi = parseInt(
      thbDashboards
        .filter((i) => i.bankCode === "TSCBI")
        .map((i) => i.runningScrapers)
    );
    thbModel.tktbi = parseInt(
      thbDashboards
        .filter((i) => i.bankCode === "TKTBI")
        .map((i) => i.runningScrapers)
    );
    thbModel.tkkbi = parseInt(
      thbDashboards
        .filter((i) => i.bankCode === "TKKBI")
        .map((i) => i.runningScrapers)
    );
    thbModel.tbbli = parseInt(
      thbDashboards
        .filter((i) => i.bankCode === "TBBLI")
        .map((i) => i.runningScrapers)
    );

    var myrDashboards = data
      .filter((i) => i.currencyCode === "MYR")
      .map((i) => i.dashboard)[0];
    myrModel.mhlbi = parseInt(
      myrDashboards
        .filter((i) => i.bankCode === "MHLBI")
        .map((i) => i.runningScrapers)
    );
    myrModel.mpbbc = parseInt(
      myrDashboards
        .filter((i) => i.bankCode === "MPBBC")
        .map((i) => i.runningScrapers)
    );
    myrModel.mmbmi = parseInt(
      myrDashboards
        .filter((i) => i.bankCode === "MMBMI")
        .map((i) => i.runningScrapers)
    );

    var idrDashboards = data
      .filter((i) => i.currencyCode === "IDR")
      .map((i) => i.dashboard)[0];
    idrModel.imanb = parseInt(
      idrDashboards
        .filter((i) => i.bankCode === "IMANB")
        .map((i) => i.runningScrapers)
    );
    idrModel.ibcai = parseInt(
      idrDashboards
        .filter((i) => i.bankCode === "IBCAI")
        .map((i) => i.runningScrapers)
    );
    idrModel.ibnii = parseInt(
      idrDashboards
        .filter((i) => i.bankCode === "IBNII")
        .map((i) => i.runningScrapers)
    );
    idrModel.iperb = parseInt(
      idrDashboards
        .filter((i) => i.bankCode === "IPERB")
        .map((i) => i.runningScrapers)
    );

    var vndDashboards = data
      .filter((i) => i.currencyCode === "VND")
      .map((i) => i.dashboard)[0];
    vndModel.vacbi = parseInt(
      vndDashboards
        .filter((i) => i.bankCode === "VACBI")
        .map((i) => i.runningScrapers)
    );
    vndModel.vvcbi = parseInt(
      vndDashboards
        .filter((i) => i.bankCode === "VVCBI")
        .map((i) => i.runningScrapers)
    );
    vndModel.vsaci = parseInt(
      vndDashboards
        .filter((i) => i.bankCode === "VSACI")
        .map((i) => i.runningScrapers)
    );
    vndModel.vdabi = parseInt(
      vndDashboards
        .filter((i) => i.bankCode === "VDABI")
        .map((i) => i.runningScrapers)
    );
    vndModel.vvtbi = parseInt(
      vndDashboards
        .filter((i) => i.bankCode === "VVTBI")
        .map((i) => i.runningScrapers)
    );

    var totalActiveThb = data.filter((i) => i.currencyCode === "THB")[0]
      .totalActiveScrapers;
    var totalActiveMyr = data.filter((i) => i.currencyCode === "MYR")[0]
      .totalActiveScrapers;
    var totalActiveIdr = data.filter((i) => i.currencyCode === "IDR")[0]
      .totalActiveScrapers;
    var totalActiveVnd = data.filter((i) => i.currencyCode === "VND")[0]
      .totalActiveScrapers;

    var totalFailedThb = data.filter((i) => i.currencyCode === "THB")[0]
      .totalFailedScrapers;
    var totalFailedMyr = data.filter((i) => i.currencyCode === "MYR")[0]
      .totalFailedScrapers;
    var totalFailedIdr = data.filter((i) => i.currencyCode === "IDR")[0]
      .totalFailedScrapers;
    var totalFailedVnd = data.filter((i) => i.currencyCode === "VND")[0]
      .totalFailedScrapers;

    totalActiveScrapers = parseInt(
      totalActiveThb + totalActiveMyr + totalActiveIdr + totalActiveVnd
    );
    totalFailedScrapers = parseInt(
      totalFailedThb + totalFailedMyr + totalFailedIdr + totalFailedVnd
    );
  }

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={
              "TSCBI: " +
              thbModel.tscbi +
              " | TKTBI: " +
              thbModel.tktbi +
              " | TKKBI: " +
              thbModel.tkkbi +
              " | TBBLI: " +
              thbModel.tbbli
            }
            subtitle="Running Pods THB"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={
              "MHLBI: " +
              myrModel.mhlbi +
              " | MPBBC: " +
              myrModel.mpbbc +
              " | MMBMI: " +
              myrModel.mmbmi
            }
            subtitle="Running Pods MYR"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={
              "IMANB: " +
              idrModel.imanb +
              " | IBCAI: " +
              idrModel.ibcai +
              " | IBNII: " +
              idrModel.ibnii +
              " | IPERB: " +
              idrModel.iperb
            }
            subtitle="Running Pods IDR"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={
              "VACBI: " +
              vndModel.vacbi +
              " | VVCBI: " +
              vndModel.vvcbi +
              " | VSACI: " +
              vndModel.vsaci +
              " | VDABI: " +
              vndModel.vdabi +
              " | VVTBI: " +
              vndModel.vvtbi
            }
            subtitle="Running Pods VND"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Total Scrapers Active
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                {totalActiveScrapers}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
      </Box>
    </Box>
  );
};

export default Dashboard;
