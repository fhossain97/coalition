import { Box, Typography } from "@mui/material";
import type { patientData } from "lib/types";
import { useState } from "react";
import {
  Chart,
  type ReactGoogleChartEvent,
  type GoogleChartWrapper,
} from "react-google-charts";

export const options = {
  title: "Blood Pressure",
  curveType: "function",
  legend: { position: "right", Systolic: 6, Diastolic: 6 },
};

const History = ({
  diagHis,
}: {
  diagHis: (typeof patientData)["diagnosis_history"] | undefined;
}) => {
  const [selectedData, setSelectedData] = useState<{
    time: string | number | boolean | Date | number[] | null | undefined;
    pressure: string | number | boolean | Date | number[] | null | undefined;
    value: string | number | boolean | Date | number[] | null | undefined;
  }>({ time: "", pressure: "", value: 0 });

  const formattedHistory = diagHis?.map((his) => {
    return [
      `${his.month}, ${his.year}`,
      his.blood_pressure.systolic.value,
      his.blood_pressure.diastolic.value,
    ];
  });

  formattedHistory?.unshift(["Date", "Systolic", "Diastolic"]);

  const chartEvents: ReactGoogleChartEvent[] = [
    {
      eventName: "select",
      callback: ({ chartWrapper }: { chartWrapper: GoogleChartWrapper }) => {
        const chart = chartWrapper.getChart().getSelection();
        if (chart.length === 1) {
          const [selectedItem] = chart;
          const dataTable = chartWrapper.getDataTable();
          const { row, column } = selectedItem as {
            row: number;
            column: number;
          };
          const date = dataTable?.getValue(row, 0);
          const pressureType = dataTable?.getColumnLabel(column);
          const pressureValue = dataTable?.getValue(row, column);
          setSelectedData({
            time: date,
            pressure: pressureType,
            value: pressureValue,
          });
        }
      },
    },
  ];

  const vitalsData = diagHis
    ?.filter((his) => {
      if (selectedData && selectedData !== null) {
        const time = (
          selectedData as { time: string; pressure: string; value: number }
        ).time.split(",");

        if (his.month === time[0] && his.year === Number(time[1])) {
          return his;
        }
      }
    })
    .map((his) => ({
      level: his?.blood_pressure,
      heart_rate: his.heart_rate.value,
      respiratory: his.respiratory_rate.value,
      temperature: his.temperature.value,
    }));

  return (
    <Box className="mb-5 h-[80vh] rounded-md bg-white">
      <Box className="pt-4">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={formattedHistory}
          options={options}
          chartEvents={chartEvents}
        />
      </Box>

      <Box className="flex flex-col gap-3 p-2">
        {vitalsData?.map((vital, index) => (
          <Box key={index} className="w-full">
            <Box className="mb-3 w-full rounded-md bg-gray-200 p-3 text-center">
              <Typography>
                Systolic: {vital.level.systolic.value}{" "}
                {vital.level.systolic.levels}
              </Typography>
            </Box>
            <Box className="mb-3 w-full rounded-md bg-gray-200 p-4 text-center">
              <Typography>
                Diastolic: {vital.level.diastolic.value}{" "}
                {vital.level.diastolic.levels}
              </Typography>
            </Box>
            <Box className="mb-3 w-full rounded-md bg-gray-200 p-4 text-center">
              <Typography>Respiratory Rate: {vital.respiratory}</Typography>
            </Box>
            <Box className="mb-3 w-full rounded-md bg-gray-200 p-4 text-center">
              <Typography>Heart Rate: {vital.heart_rate}</Typography>
            </Box>
            <Box className="w-full rounded-md bg-gray-200 p-4 text-center">
              <Typography>Temperature: {vital.temperature}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default History;
