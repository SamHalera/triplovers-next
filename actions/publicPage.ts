"use server";
export const getPublicPage = async (path: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/custom/getPageDataByPath?path=${path}`,
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
    console.log("error==>", error);
  }
};
