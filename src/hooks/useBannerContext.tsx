import { useContext } from "react";
import { BannerContext } from "../contexts/BannerContext";

export const useBannerContext = () => useContext(BannerContext);
