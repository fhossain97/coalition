import { Box } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Box className="container mx-auto">{children}</Box>;
};

export default Layout;
