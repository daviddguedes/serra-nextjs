import { useContext, useEffect, useRef } from "react";
import { Input, Stack, Button } from "@chakra-ui/react";
import { GeneralCtx } from "./../context/GeneralCtx";
import styles from "../styles/DatePickerComponent.module.css";
import { t } from "i18next";

export const DATA_OPTIONS = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Europe/Lisbon",
};

export default function DatePickerComponent() {
  const { state } = useContext(GeneralCtx);
  const containerDateRef = useRef(null);

  useEffect(() => {
    containerDateRef.current.style.height = "0vh";
  }, [containerDateRef]);

  const showSelectedDateFormated = () => {
    const date = new Date(state.selectedDate);
    return date.toLocaleString(state.language, DATA_OPTIONS);
  };

  const toggleContainerDate = () => {
    const currentVisibility = containerDateRef.current.style.height;
    containerDateRef.current.style.height =
      currentVisibility === "0vh" ? "40vh" : "0vh";
  };

  return (
    <div className={styles.boxDate}>
      <Stack spacing={3}>
        <Input
          variant="filled"
          borderRadius="0"
          backgroundColor="#e9e9e9"
          value={showSelectedDateFormated()}
          onChange={() => {}}
          onClick={toggleContainerDate}
          size="lg"
        />
      </Stack>
      <input className="form-control" type="text" id="date-group1-1" placeholder="YYYY-MM" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem
        non illo, dicta perspiciatis recusandae officiis rem atque animi
        dignissimos quam ex aliquam asperiores amet itaque quis ducimus eum
        sequi?
      </p>
      <div className={styles.containerDate} ref={containerDateRef}>
        <Stack
          direction="row"
          size={2}
          justifyContent="space-between"
          borderBottom="1px solid #c9c9c9"
        >
          <Button
            colorScheme="dark"
            variant="ghost"
            onClick={toggleContainerDate}
          >
            {t("Cancel")}
          </Button>
          <Button colorScheme="dark" variant="ghost">
            {t("Select")}
          </Button>
        </Stack>
        <div className={styles.wrapperDate}>
          <div className="date-selector">
            <div className="year" id="year1"></div>
            <div className="month" id="month1"></div>
            <div className="day" id="day1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
