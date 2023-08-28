declare module '*.sass' {
  interface IClassNames {
      [className: string]: string
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.otf";
