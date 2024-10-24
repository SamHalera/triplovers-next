"use server";

export const getMenuItems = async () => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/public-pages?filters[navigationType][$eq]=main`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
        },
        cache: "no-cache",
      }
    );

    const { data } = await response.json();

    const mainMenu: MenuType = data
      .sort((a: PublicPageType, b: PublicPageType) => a.priority - b.priority)
      .map((item: PublicPageType) => {
        return {
          label: item.title,
          path: item.isHomePage ? "" : item.slug,
        };
      });

    return mainMenu;
  } catch (error) {
    console.log("error getting menu items==>", error);
  }
};
