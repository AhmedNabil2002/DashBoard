import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./components/ui";

function Translate() {
  const [lan, setlan] = useState("en");
  const { t, i18n } = useTranslation();
  function changeThelanguage() {
    if (lan == "en") {
      setlan("ar");
    } else {
      setlan("en");
    }
  }
  useEffect(() => {
    i18n.changeLanguage(lan);
  }, [lan]);
  return (
    <>
      <div dir={lan == "en" ? "ltr" : "rtl"}>
        <Button onClick={changeThelanguage}>
          {lan == "en" ? "Arabic" : "انجليزي"}
        </Button>
        {t("hello_world")}
      </div>
    </>
  );
}

export default Translate;
