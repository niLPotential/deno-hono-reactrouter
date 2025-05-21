import { useLoaderData } from "react-router";
import type loader from "./about.loader.tsx";

export default function About() {
  const data = useLoaderData<typeof loader>();
  return <h1>{data.message}</h1>;
}
