declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-player": any;
  }
}