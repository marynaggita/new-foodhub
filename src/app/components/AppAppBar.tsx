"use client"

import * as React from "react"
import { type PaletteMode, useTheme, useMediaQuery } from "@mui/material"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import MenuItem from "@mui/material/MenuItem"
import Drawer from "@mui/material/Drawer"
import MenuIcon from "@mui/icons-material/Menu"
import ToggleColorMode from "../components/ToggleColorMode"

interface AppAppBarProps {
  mode: PaletteMode
  toggleColorMode: () => void
}

function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"))

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)
    const offset = 128
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset
      sectionElement.scrollIntoView({ behavior: "smooth" })
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      })
      setOpen(false)
    }
  }

  const menuItems = ["features", "testimonials", "highlights", "pricing", "faq"]

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor: theme.palette.mode === "light" ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 72,
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-18px",
              px: 0,
            }}
          >
            <Box
              component="img"
              src="../images/newkachai.png"
              alt="logo of nergie treats"
              sx={{
                height: 60,
                width: "auto",
                mr: 2,
                cursor: "pointer",
              }}
            />
            <Typography
              variant="h6"
              color="#a52a2a"
              sx={{
                fontWeight: "bold",
                fontFamily: "serif",
                mr: 2,
                display: { xs: "none", sm: "block" },
              }}
            >
              KACHAI DOTCOM
            </Typography>

            {isMdUp && (
              <Box sx={{ display: "flex" }}>
                {menuItems.map((item) => (
                  <MenuItem key={item} onClick={() => scrollToSection(item)} sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            )}
          </Box>
          {isMdUp ? (
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-up/"
                target="_blank"
              >
                Sign up
              </Button>
            </Box>
          ) : (
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <MenuIcon />
            </Button>
          )}
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            minWidth: "60vw",
            p: 2,
            backgroundColor: "background.paper",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              mb: 2,
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          {menuItems.map((item) => (
            <MenuItem key={item} onClick={() => scrollToSection(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </MenuItem>
          ))}
          <Divider sx={{ my: 2 }} />
          <Button
            color="primary"
            variant="contained"
            component="a"
            href="/material-ui/getting-started/templates/sign-up/"
            target="_blank"
            fullWidth
            sx={{ mb: 1 }}
          >
            Sign up
          </Button>
          <Button
            color="primary"
            variant="outlined"
            component="a"
            href="/material-ui/getting-started/templates/sign-in/"
            target="_blank"
            fullWidth
          >
            Sign in
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default AppAppBar

