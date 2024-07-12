import { api } from "~/utils/api";
import { Box, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PatientMiniCard from "./PatientMiniCard";

const AllPatients = () => {
  const { data: patients } = api.patients.healthData.useQuery();
  return (
    <Box
      className="rounded-md bg-white"
      style={{ maxHeight: "100vh", overflowY: "auto" }}
    >
      <Box className="flex h-[80px] items-center justify-center p-2">
        <Typography variant="h5" sx={{ flex: 1, paddingLeft: 1 }}>
          Patients
        </Typography>
        <IconButton aria-label="search" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box className="ml-3">
        {patients?.map((p, index) => (
          <PatientMiniCard key={index} patient={p} />
        ))}
      </Box>
    </Box>
  );
};

export default AllPatients;
