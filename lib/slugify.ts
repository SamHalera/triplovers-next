export const slugify = (strToSlugify: string) => {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  if (strToSlugify) {
    const slug = strToSlugify
      .toString()
      .toLowerCase()
      .replace("'", "-")
      .replace(/\s+/g, "-") //replace spaces with -
      .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text

    return slug;
  }
  return null;
};
