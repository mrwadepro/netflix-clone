import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
const dialog = (props) => {
  <Dialog onClose={handleClose} open={open}>
    <DialogTitle>Set backup account</DialogTitle>
    <List sx={{ pt: 0 }}>
      {emails.map((email) => (
        <ListItem button onClick={() => handleListItemClick(email)} key={email}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={email} />
        </ListItem>
      ))}
      <ListItem
        autoFocus
        button
        onClick={() => handleListItemClick("addAccount")}
      >
        <ListItemAvatar>
          <Avatar>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Add account" />
      </ListItem>
    </List>
  </Dialog>;
};

export default dialog;
