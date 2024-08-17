import { ButtonHTMLAttributes } from "react";

export interface ContainerProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export interface BackgroundProps {
  src: string;
  className?: string;
  parentClassName?: string;
  isBackdrop?: boolean;
  colorBackdrop?: string;
  children: JSX.Element | JSX.Element[];
}

export interface ImagesProps {
  className: string;
  src: string;
  alt: string;
  cover?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export interface TemplateField {
  pathIcon: string;
  title: string;
  description: string;
}

export interface InputType {
  isLoading?: boolean;
  error?: boolean;
  values: {
    fullName: string;
    email: string;
    message?: string;
    phoneNumber: string;
    service?: string;
  };
}

export interface CardPriceProps {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  isHighlight: boolean;
  pathImg: string;
  price: number;
  title: string;
  description: string[];
  index: number;
}

export interface OurService extends TemplateField {
  pathImg: string;
}

export interface BlogField extends TemplateField {
  date: string;
  topic: string;
}

export interface TestimonialField {
  name: string;
  job: string;
  subject: string;
  message: string;
  pathImg: string;
}

export interface PriceField {
  pathImg: string;
  title: string;
  price: number;
  description: string[];
}
