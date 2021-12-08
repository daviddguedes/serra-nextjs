import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GeneralCtx } from "../context/GeneralCtx";

const navigation = [
  { key: "home", label: "Home", href: "#", current: true },
  { key: "about", label: "About", href: "#", current: false },
];

const languages = [
  { key: "pt", label: "PT", current: true },
  { key: "gb", label: "GB", current: false },
  { key: "es", label: "ES", current: false },
  { key: "fr", label: "FR", current: false },
  { key: "de", label: "DE", current: false },
];

const MenuLng = () => {
  const { state, updateLanguage } = useContext(GeneralCtx);
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<span className={`flag-icon flag-icon-${state.language}`} />}
        variant="outline"
      />
      <MenuList>
        {languages
          .filter((el) => el.key !== state.language)
          .map((lang) => (
            <MenuItem
              key={lang.key}
              icon={<span className={`flag-icon flag-icon-${lang.key}`} />}
              onClick={() => updateLanguage(lang.key)}
            >
              {lang.label}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default function AppHeader() {
  const { t } = useTranslation();
  return (
    <div style={{ position: 'fixed', top: '0', width: '100%', zIndex: '999999' }}>
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
                {navigation.map((menu) => (
                  <MenuItem key={menu.key}>{menu.label}</MenuItem>
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
              {t("Serra da Estrela")}
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
