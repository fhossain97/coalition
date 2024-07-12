import { Box, Typography } from "@mui/material";

const PatientInfo = ({
  caption,
  patientInfo,
  icon,
}: {
  caption: string;
  patientInfo: string;
  icon: JSX.Element;
}) => {
  return (
    <Box className="flex items-center">
      <Box className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-slate-200">
        {icon}
      </Box>

      <Box className="flex flex-col p-1 pl-2">
        <Typography variant="caption">{caption}</Typography>
        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
          {patientInfo}
        </Typography>
      </Box>
    </Box>
  );
};

export default PatientInfo;
