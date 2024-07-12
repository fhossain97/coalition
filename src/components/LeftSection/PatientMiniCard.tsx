import { type patientData } from "lib/types";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const PatientMiniCard = ({ patient }: { patient: typeof patientData }) => {
  return (
    <Box className="mb-4 flex items-center">
      <Image
        src={patient?.profile_picture}
        alt="Profile image of the patient"
        className="h-12 w-12 rounded-full"
        width={48}
        height={48}
      />
      <Box className="ml-4 flex w-[80%] flex-row items-center justify-between">
        <Box className="flex flex-col">
          <Typography>{patient.name}</Typography>
          <Typography className="text-sm text-gray-600">
            {patient.gender}, {patient.age}
          </Typography>
        </Box>
        <Box className="pr-2">
          {" "}
          <MoreHorizIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default PatientMiniCard;
