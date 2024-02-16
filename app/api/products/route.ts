import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const fileData = await fs.readFile(
    process.cwd() + "/mocks/products-list.json",
    "utf8"
  );
  const productsList = JSON.parse(fileData);
  return NextResponse.json(productsList, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
