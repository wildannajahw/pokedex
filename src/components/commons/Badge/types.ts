import { ThemeProps } from "../../../constants/theme";

export interface BadgeProps {
  title: string;
  bg?: keyof ThemeProps["color"] | any;
  color?: keyof ThemeProps["color"];
}
