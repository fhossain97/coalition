import Layout from "~/components/Layout/Layout";
import Navbar from "~/components/Navbar/Navbar";
import PatientCard from "~/components/RightSection/PatientCard/PatientCard";
import { Box } from "@mui/material";
import { api } from "~/utils/api";
import LabResults from "~/components/RightSection/LabResults";
import DiagnosticList from "~/components/CenterSection/DiagnosticList";
import AllPatients from "~/components/LeftSection/AllPatientsBar";
import History from "~/components/CenterSection/History";

export default function Home() {
  const { data: patient } = api.patients.patient.useQuery({
    patientName: "Jessica Taylor",
  });

  return (
    <Layout>
      <Navbar />
      <Box className="mt-6 grid grid-cols-12 gap-4">
        <Box className="col-span-3">
          <AllPatients />
        </Box>
        <Box className="col-span-6">
          <Box>
            <History diagHis={patient?.diagnosis_history} />
            <DiagnosticList diagList={patient?.diagnostic_list} />
          </Box>
        </Box>
        <Box className="col-span-3 flex flex-col">
          <Box className="mb-4">
            <PatientCard patient={patient} />
          </Box>
          <LabResults labResults={patient?.lab_results} />
        </Box>
      </Box>
    </Layout>
  );
}
