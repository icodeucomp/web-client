import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

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

export interface TabsProps {
  loadServices: boolean;
  loadProducts: boolean;
  tabsFields: {
    label: string;
    children: React.ReactNode;
  }[];
}

export interface MotionComponentProps {
  initialO?: number;
  initialY?: number;
  initialX?: number;
  animateO?: number;
  animateY?: number;
  animateX?: number;
  delay?: number;
  duration: number;
  tag: ElementType;
  className: string;
  children?: ReactNode;
}

export interface BasicHeroProps {
  title: string;
  description: string;
}

export interface LandingCardPriceProps {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  isHighlight: boolean;
  slug: string;
  price: number;
  title: string;
  features: string[];
}

export interface PriceCardProps {
  slug: string;
  pathImg: string[];
  price: number;
  title: string;
  description: string;
  index: number;
  discount: number;
  discountedPrice: number;
}

export interface TemplateField {
  pathIcon: string;
  title: string;
  description: string;
}

export interface PriceServiceField {
  slug: string;
  serviceTitle: string;
  message: string;
  top: {
    title: string;
    pathIcon: string;
  }[];
  bottom: {
    title: string;
    pathIcon: string;
    description: string;
  }[];
}

export interface InputType {
  fullName: string;
  email: string;
  message?: string;
  phoneNumber: string;
  service?: string;
}

export interface OurService extends TemplateField {
  pathImg: string;
}

export interface ServeField {
  pathImg: string;
  description: string;
}

export interface NavbarField {
  title: string;
  path: string;
}

export interface ImagesField {
  slug: string;
  pathIcon: string;
}

//temporary
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
