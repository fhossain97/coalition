import { type patientData } from "lib/types";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const healthData = await fetch(String(process.env.URL), {
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${process.env.USERNAME}:${process.env.PASSWORD}`,
    ).toString("base64")}`,
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => data as (typeof patientData)[])
  .catch((e) => {
    throw new Error(`Unable to retrieve data: ${e}`);
  });

export const patientRouter = createTRPCRouter({
  healthData: publicProcedure.query(async ({ input }) => {
    try {
      return healthData;
    } catch (error) {
      throw new Error(`No data found: ${JSON.stringify(error)}`);
    }
  }),

  patient: publicProcedure
    .input(z.object({ patientName: z.string() }))
    .query(async ({ input }) => {
      const { patientName } = input;
      try {
        if (Array.isArray(healthData) && healthData.length > 0) {
          return healthData.find(
            (patient) => patient.name === String(patientName),
          );
        }
        return undefined;
      } catch {
        throw new Error(`Patient - ${patientName} not found.`);
      }
    }),
});
