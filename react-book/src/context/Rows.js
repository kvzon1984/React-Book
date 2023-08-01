import { format } from 'date-fns';
import { useMemo } from "react";
import esLocale from 'date-fns/locale/es';

export default function useRows(props) {

  const filas = useMemo(
    () =>
      props.map((libro, index) => ({
        index,
        titulo: libro.name,
        autor: libro.authors,
        editorial: libro.publisher,
        anioPublicacion: format(new Date(libro.released),'dd-MMMM-yyyy', {
            locale: esLocale,
          }),
      }))
      ,
      []
  );

  return filas;
}
