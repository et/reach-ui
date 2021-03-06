import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";
import { Dialog } from "@reach/dialog";
import "@reach/menu-button/styles.css";
import "@reach/dialog/styles.css";

export let name = "Dropdown";

export function Example() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div>
      <button onClick={() => setShowDialog(true)}>Show Dialog</button>
      <Dialog aria-label="Announcement" isOpen={showDialog}>
        <button onClick={() => setShowDialog(false)}>Close Dialog</button>
        <Menu>
          <MenuButton>Dropdown</MenuButton>
          <MenuList>
            <MenuItem onSelect={action("Test")}>Test 1</MenuItem>
            <MenuItem onSelect={action("Test")}>Test 2</MenuItem>
            <MenuItem onSelect={action("Test")}>Test 3</MenuItem>
          </MenuList>
        </Menu>
      </Dialog>
    </div>
  );
}
