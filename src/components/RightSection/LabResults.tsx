import { Box, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const LabResults = ({ labResults }: { labResults: string[] | undefined }) => {
  return (
    <Box
      className="rounded-md bg-white"
      style={{ overflowY: "auto", overflowX: "auto" }}
    >
      <Box className="p-2">
        <Typography variant="h5" sx={{ flex: 1 }}>
          Lab Results
        </Typography>
      </Box>
      <Box className="ml-3">
        {labResults
          ? labResults.map((res, i) => (
              <Typography
                className="flex items-center justify-between p-2 hover:bg-slate-400"
                key={i}
                variant="caption"
              >
                {res}
                <Box className="pr-2">
                  <DownloadIcon />
                </Box>
              </Typography>
            ))
          : null}
      </Box>
    </Box>
  );
};

export default LabResults;
