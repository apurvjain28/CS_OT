import { useRouter } from "next/router";
import classes from "./Translate.module.css";
import en from "./locales/en/translation";
import fr from "./locales/fr/translation";

const Translate = () => {
  const router = useRouter();
  const { locale } = router;
  const lang = locale === "en" ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale: locale });
  };

  return (
    <nav className={classes.lang}>
      <select
        onChange={changeLanguage}
        defaultValue={lang}
        className={classes.lang__option}
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </nav>
  );
};

export default Translate;
