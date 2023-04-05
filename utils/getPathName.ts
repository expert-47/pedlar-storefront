export const getStoreName = (route: any) => {
  let path = route.asPath.split("/");
  if (path.length > 1) {
    return `/${path[1]}`;
  }
  return "";
};
