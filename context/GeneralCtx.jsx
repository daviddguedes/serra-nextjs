import { createContext, useEffect, useState } from "react";
import i18n from "./../config/i18n";

export const GeneralCtx = createContext({});

const GeneralCtxProvider = ({ children }) => {
  const today = new Date();
  const [state, setState] = useState({
    language: "gb",
    selectedDate: new Date(today.setHours(0, 0, 0, 0)).toISOString(),
    passeios: [],
  });

  useEffect(() => {
    const locale = window.localStorage.getItem("h-locale");
    if (locale) {
      setState((s) => ({
        ...s,
        language: locale,
      }));
      i18n.changeLanguage(locale);
    }
  }, []);

  function updateLanguage(e) {
    window.localStorage.setItem("h-locale", e);
    setState((st) => ({ ...st, language: e }));
    i18n.changeLanguage(e);
  }

  function updateSelectedDate(e) {
    setState((st) => ({ ...st, selectedDate: e }));
  }

  function updatePasseios(passeio) {
    if (Array.isArray(passeio)) {
      setState((ctxState) => ({
        ...ctxState,
        passeios: [],
      }));
    } else {
      setState((ctxState) => ({
        ...ctxState,
        passeios: [...ctxState.passeios, passeio],
      }));
    }
  }

  return (
    <GeneralCtx.Provider
      value={{ state, updateLanguage, updateSelectedDate, updatePasseios }}
    >
      {children}
    </GeneralCtx.Provider>
  );
};

export default GeneralCtxProvider;
