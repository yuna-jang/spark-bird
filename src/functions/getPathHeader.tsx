import menu from "../enum/menu";

function getPathHeader(pathname: string): string {
  const lowerPath = pathname.toLowerCase();
  var pathHeader = "Spark Bird Tour";
  Object.values(menu).forEach((element) => {
    if (lowerPath.includes(element.toString())) {
      pathHeader = element.toString().toUpperCase();
    }
  });
  return pathHeader;
}
export default getPathHeader;
