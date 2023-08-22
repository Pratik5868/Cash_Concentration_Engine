import { AppBar, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useTheme, Theme } from "@mui/material/styles";
import AppsIcon from "@mui/icons-material/Apps";

const drawerWidth = 240;

const themedStyles = (theme: Theme) => {
  return {
    menuButton: {
      marginRight: 2
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      "& .MuiBackdrop-root": {
        display: "none"
      }
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "rgba(120,120,120,0.2)"
    },
    content: {
      padding: 3,
      maxWidth: 720,
      minWidth: 375,
      marginLeft: drawerWidth + 8,
    }
  }
}

export default function CustomZIndexAppBar() {
  const theme = useTheme();

  return (
    <div>
      <AppBar position="fixed" sx={{ ...themedStyles(theme).appBar }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            MUI AppBar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        disableEnforceFocus
        variant="temporary"
        open={true}
        sx={themedStyles(theme).drawer}
        PaperProps={{
          sx: themedStyles(theme).drawerPaper,
          elevation: 9
        }}
      >
        {/* <Toolbar /> */}
        <List sx={{ mt: "4rem" }}>
          {["Home", "Page 1", "Page 2", "Page 3"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
      <main style={{ ...themedStyles(theme).content }}>
        <Typography>App Content Area</Typography>
      </main>
    </div>
  )
}
