//Import Images
import tunesat from "./img/tunesat-logo.png";
import freeplay from "./img/freeplay-logo.jpg";
import lawlogo from "./img/law-logo.jpg";

export const ClientState = () => {
  return [
    {
      title: "Tunesat",
      mainImg: tunesat,
      secondaryImg: "",
      url: "/work/tunesat",
      awards: [
        {
          title: "Freeplay",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Freeplay",
      mainImg: freeplay,
      url: "/work/freeplay",
      secondaryImg: "",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Kuhn Law Group",
      mainImg: lawlogo,
      url: "/work/kuhn-law-group",
      secondaryImg: "",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
