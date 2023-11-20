import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  // set baseUrl for api calls
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  // set redux slice
  reducerPath: "main",
  //set tags to keep info (each api dataType name)
  tagTypes: ["Kpis"],
  // api endpoint
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
  }),
});

// hook built into api based on endpoint
export const { useGetKpisQuery } = api;
