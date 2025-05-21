import { ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";

const db = { message: "Hello world!" };

export async function loader(_args: LoaderFunctionArgs) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return { message: db.message };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  db.message = String(formData.get("message"));
  return { ok: true };
}
