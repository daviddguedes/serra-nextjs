import { useRouter } from 'next/router';
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GeneralCtx } from "../context/GeneralCtx";

export const DATA_OPTIONS = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Europe/Lisbon",
};

const CardsComponent = () => {
  const { t } = useTranslation();
  const history = useRouter();
  const { state } = useContext(GeneralCtx);
//   const [present, dismiss] = useIonLoading();

//   useEffect(() => {
//     if (state.passeios.length < 1) {
//       present({
//         message: "Loading...",
//         duration: 1500,
//       });
//     }

//     return () => dismiss();
//   }, [state.passeios, dismiss, present]);

  function goDetails(e, id) {
    e.preventDefault();
    history.push(`/passeio/${id}`);
  }

  return state.passeios.map((passeio) => (
    <div key={passeio.id}>
      <div>
        <div>{t("Destination")}</div>
        <div>
          {passeio.itinerary[passeio.itinerary.length - 1].placeName}
        </div>
      </div>
      <div>
        <ul>
          <li>
            <label>{t("Individual Price")}:</label>
            <p slot="end" color="dark">
              €{passeio.individualPrice / passeio.seats.total}
            </p>
          </li>
        </ul>
        <div>
          <div>
            <div size={8}>
              <label>
                {passeio.date
                  .toDate()
                  .toLocaleString(state.language, DATA_OPTIONS)}
              </label>
            </div>
            <div
              className="ion-align-self-center"
              style={{ textAlign: "center" }}
            >
              <p> {t("Available")}</p>
              <p color="danger">
                <h1>{passeio.seats.available}</h1>
              </p>
            </div>
          </div>
          <div>
            <div>
              <button
                disabled={passeio.seats?.available < 1}
                expand="block"
                color="danger"
                fill="outline"
                onClick={(e) => goDetails(e, passeio.id)}
              >
                {t("Reserve")}
                <i slot="end" icon={arrowForwardCircleOutline} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default CardsComponent;
