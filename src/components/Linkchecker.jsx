import { useEffect, useState } from "react";

export function Linkchecker() {
  const [link, setLink] = useState("");

  useEffect(() => {
    const mouseover = (event) => {
      const domElem = event.target;
      // console.log("Mouseover on", domElem);//prüft, ob die Funktion korrekt getriggert wird und welches Element betroffen ist
      if (domElem.nodeName === "A") {
        setLink(domElem.href);
      } else {
        setLink("");
      }
    };

    window.addEventListener("mouseover", mouseover);

    return () => {
      window.removeEventListener("mouseover", mouseover);
    };
  }, []);

  return <em>Hovered Link: {link}</em>;
}
