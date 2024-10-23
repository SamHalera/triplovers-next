"use server";

export const getRoomsList = async () => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/custom/getRoomsList`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
        },
      }
    );
    const roomsList = await response.json();

    return roomsList;
  } catch (error) {
    console.log("error getting room list==>", error);
  }
};

export const getSingleRoom = async (slug: string) => {
  try {
    const response = await await fetch(
      `${process.env.STRAPI_API_URL}/api/custom/getRoomBySlug?slug=${slug}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error getting room single==>", error);
  }
};
