import { Box, useMediaQuery, useTheme } from "@mui/material";

type Props = {};

const gridTemplateLarge = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`;

const gridTemplateSmall = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
`;

const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLarge,
            }
          : {
              gridTemplateAreas: gridTemplateSmall,
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
            }
      }
    >
      <Box gridArea="a" bgcolor="#000"></Box>
      <Box gridArea="b" bgcolor="#000"></Box>
      <Box gridArea="c" bgcolor="#000"></Box>
      <Box gridArea="d" bgcolor="#000"></Box>
      <Box gridArea="e" bgcolor="#000"></Box>
      <Box gridArea="f" bgcolor="#000"></Box>
      <Box gridArea="g" bgcolor="#000"></Box>
      <Box gridArea="h" bgcolor="#000"></Box>
      <Box gridArea="i" bgcolor="#000"></Box>
      <Box gridArea="j" bgcolor="#000"></Box>
    </Box>
  );
};

export default Dashboard;
