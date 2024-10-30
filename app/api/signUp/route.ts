import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstname, lastname, email, password } = body;

    const userInformation = {
      firstname,
      lastname,
      username: email,
      email,
      password,
    };

    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
        },
        body: JSON.stringify(userInformation),
      }
    );
    const data = await res.json();
    console.log("data==>", data);
    const { error } = data;

    if (error) {
      const { status, message } = error;
      return NextResponse.json(
        { error: { message } },
        {
          status,
        }
      );
    } else {
      return NextResponse.json({
        status: 200,
      });
    }
  } catch (error) {
    console.log("[RegisterFromStrapi_POST]", error);
  }
}
