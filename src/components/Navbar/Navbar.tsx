import {
  Box,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ApiIcon from "@mui/icons-material/Api";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Item = (pathName: string, icon: JSX.Element) => {
  return (
    <ListItem
      disablePadding
      sx={{ display: "block" }}
      className="rounded-full hover:bg-blue-400"
    >
      <ListItemButton>
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: 1,
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              sx={{
                whiteSpace: "normal",
                overflowWrap: "break-word",
              }}
            >
              {pathName}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

const Navbar = () => {
  return (
    <Box className="mx-auto mt-4 grid h-[60px] w-[95%] grid-cols-3 items-center rounded-full bg-white shadow-lg">
      <Box className="flex items-center justify-start p-2">
        <Box>
          <ApiIcon />
        </Box>
        <Typography variant="h6" className="pl-1">
          Tech.Care
        </Typography>
      </Box>

      <Box className="flex items-center justify-center ">
        {Item("Overview", <HomeIcon />)}
        {Item("Patients", <GroupIcon />)}
        {Item("Schedule", <CalendarTodayIcon />)}
        {Item("Message", <ChatBubbleIcon />)}
        {Item("Transactions", <CreditCardIcon />)}
      </Box>

      <Box className="flex items-center justify-end p-2">
        {/* This would be an image attribute, however for the purposes of this build, leaving it as a placeholder. Here is the correct alternative:
        <Image
          className="mr-1 h-[40px] w-[40px] rounded-full bg-black"
          src="image src"
          alt="Doctor smiling and holding a tablet"
          width={48}
          height={48}
        /> */}
        <Box className="mr-1 h-[40px] w-[40px] rounded-full bg-black"></Box>
        <Box className="flex flex-row items-center">
          <Box className="mr-2 flex flex-col">
            <Typography variant="caption">Dr. Jose Simmons</Typography>
            <Typography variant="caption">General Practitioner</Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box className="flex flex-row space-x-1 pl-1">
            <SettingsIcon />
            <MoreVertIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
