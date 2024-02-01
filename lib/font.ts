import localFont from "next/font/local";

export const ComputerModern = localFont({
  variable: "--font-computer-modern",
  src: [
    {
      path: "../public/fonts/cmunrm.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/cmunti.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/cmunbx.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/cmunbi.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});
