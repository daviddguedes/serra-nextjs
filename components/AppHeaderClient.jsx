import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useState } from "react";

const navigation = [
  { key: "home", label: "Home", href: "#", current: true },
  { key: "about", label: "About", href: "#", current: false },
];

const languages = [
  { key: "pt", label: "PT" },
  { key: "gb", label: "GB" },
  { key: "es", label: "ES" },
  { key: "fr", label: "FR" },
  { key: "de", label: "DE" },
];

const MenuLng = () => {
  const [lng, setLng] = useState("gb");
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<span className={`flag-icon flag-icon-${lng}`} />}
        variant="outline"
      />
      <MenuList>
        {languages
          .filter((el) => el.key !== lng)
          .map((lang) => (
            <MenuItem
              key={lang.key}
              icon={<span className={`flag-icon flag-icon-${lang.key}`} />}
              onClick={() => setLng(lang.key)}
            >
              {lang.label}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default function AppHeader() {
  return (
    <div>
      <Box bg="#696969" w="100%" p={4}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon color="white" />}
                variant="outline"
              />
              <MenuList>
                {navigation.map((el) => (
                  <MenuItem key={el.key}>{el.label}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </GridItem>
          <GridItem
            colSpan={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading as="h4" size="md" color="#ffffff">
              Serra Admin
            </Heading>
          </GridItem>
          <GridItem colSpan={1} display="flex" justifyContent="end">
            <MenuLng />
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}
