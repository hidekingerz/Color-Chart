import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { ChangeEvent } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

type SearchAppBarProps = {
  inputValue: string;
  onInputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onResetHandler: () => void;
};

/**
 * 検索用インプット付きのAppBarコンポーネント
 * @param {string} inputValue
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} onInputHandler
 * @param {() => void} onResetHandler
 * @returns {JSX.Element}
 */
export default function SearchAppBar({ inputValue, onInputHandler, onResetHandler }: SearchAppBarProps): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Tamiya Colors
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={inputValue}
              onChange={onInputHandler}
            />
          </Search>
          {inputValue !== "" && (
            <Button onClick={onResetHandler}>
              <Typography sx={{ color: "#fff" }}>Reset</Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
