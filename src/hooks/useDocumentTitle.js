import { useLocation } from "react-router-dom";
const useDocumentTitle = () => {
  const { pathname } = useLocation();
  if (pathname === "/signin") {
    document.title = `SIGN - IN | ELEGANZ`;
  } else if (pathname !== "/") {
    document.title = `${pathname.split("/")[1].toUpperCase()} | Eleganz`;
  } else {
    document.title = `Eleganz Store`;
  }
  return pathname;
};
export { useDocumentTitle };
