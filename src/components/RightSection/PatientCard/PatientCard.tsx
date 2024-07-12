import { type patientData } from "lib/types";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import PatientInfo from "./PatientInfo";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GppGoodIcon from "@mui/icons-material/GppGood";

const PatientCard = ({
  patient,
}: {
  patient: typeof patientData | undefined;
}) => {
  return (
    <>
      {patient ? (
        <Box className="flex h-[55vh] flex-col items-center rounded-md bg-white p-4 shadow">
          <Box className="flex flex-col items-center">
            {" "}
            <Image
              src={patient?.profile_picture}
              alt="Profile Image of the patient."
              className="mb-4 h-32 w-32 rounded-full"
              width="32"
              height="32"
            />
            <Typography variant="h5">{patient.name}</Typography>
          </Box>
          <Box className="mt-7 w-full justify-start">
            <PatientInfo
              caption="Date Of Birth"
              patientInfo={patient?.date_of_birth}
              icon={<CalendarTodayIcon />}
            />
            <PatientInfo
              caption="Gender"
              patientInfo={patient?.gender}
              icon={patient?.gender === "Male" ? <MaleIcon /> : <FemaleIcon />}
            />
            <PatientInfo
              caption="Contact Info"
              patientInfo={patient?.phone_number}
              icon={<LocalPhoneIcon />}
            />
            <PatientInfo
              caption="Emergency Contacts"
              patientInfo={patient?.emergency_contact}
              icon={<LocalPhoneIcon />}
            />
            <PatientInfo
              caption="Insurance Provider"
              patientInfo={patient?.insurance_type}
              icon={<GppGoodIcon />}
            />
          </Box>
          <Box className="w-2/3 pt-4">
            {" "}
            <Button className="rounded-full bg-blue-300" size="large">
              <Typography variant="caption">Show All Information</Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        "No patient found!"
        // I would add a skeleton loader here or replace the card with some other bit of information
      )}
    </>
  );
};

export default PatientCard;
