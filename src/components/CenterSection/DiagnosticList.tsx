import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { type patientData } from "lib/types";

const DiagnosticList = ({
  diagList,
}: {
  diagList: (typeof patientData)["diagnostic_list"] | undefined;
}) => {
  return (
    <Box className="rounded-md bg-white" style={{ overflowX: "auto" }}>
      <Box className="flex p-4">
        {" "}
        <Typography
          className="rounded-md"
          variant="h5"
          sx={{ flex: 1, height: "30px" }}
        >
          Diagnostic List
        </Typography>
      </Box>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="rounded-xl bg-slate-100">
              <TableCell sx={{ fontWeight: "bold" }}>
                Problem/Diagnosis
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflowX: "auto" }}>
            {diagList
              ? diagList.map((diag, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{diag?.name}</TableCell>
                    <TableCell>{diag?.description}</TableCell>
                    <TableCell>{diag?.status}</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DiagnosticList;
