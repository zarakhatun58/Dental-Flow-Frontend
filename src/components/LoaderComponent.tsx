// src/Components/LoaderComponent.tsx
import React from "react";
import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/system";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled("div")(({ theme }) => ({
  width: "50px",
  height: "50px",
  border: "3px solid rgba(0, 0, 0, 0.1)",
  borderTop: "3px solid var(--PrimaryThemeColor)", // Purple color similar to the image
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
}));

const LoaderComponent: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      bgcolor="rgba(255, 255, 255, 0.7)"
      zIndex={9999}
    >
      <Spinner />
    </Box>
  );
};

export default LoaderComponent;
