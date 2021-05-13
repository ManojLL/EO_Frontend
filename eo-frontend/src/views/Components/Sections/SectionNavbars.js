import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import Header from "components/Header/Header.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import profileImage from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>

      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
        >
          <Header
            brand="EVENT ORGANIZER"
            fixed
            rightLinks={


              <List className={classes.list}>

                  <ListItem className={classes.listItem}>
                      <Button
                          href="#pablo"
                          className={classes.navLink}
                          onClick={(e) => e.preventDefault()}
                          color="transparent"
                      >
                          HOME
                      </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                      <Button
                          href="#pablo"
                          className={classes.navLink}
                          onClick={(e) => e.preventDefault()}
                          color="transparent"
                      >
                        MY EVENTS
                      </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                      <Button
                          href="#pablo"
                          className={classes.navLink}
                          onClick={(e) => e.preventDefault()}
                          color="transparent"
                      >
                         ORGANIZATIONS
                      </Button>
                  </ListItem>

                  <ListItem className={classes.listItem}>
                      <CustomDropdown
                          left
                          caret={false}
                          hoverColor="black"
                          dropdownHeader="Dropdown Header"
                          buttonText={
                              <img
                                  src={profileImage}
                                  className={classes.img}
                                  alt="profile"
                              />
                          }
                          buttonProps={{
                              className:
                                  classes.navLink + " " + classes.imageDropdownButton,
                              color: "transparent",
                          }}
                          dropdownList={[
                              "My Profile",
                              "Settings",
                              "Sign out",
                          ]}
                      />
                  </ListItem>
              </List>
            }
          />

        </div>
      </div>
    </div>
  );
}
