import "react-i18next"

declare module "react-i18next" {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: "ns1";
    count: string;
    // custom resources type
    resources: {
      ns1: typeof ns1;
      ns2: typeof ns2;
    };
  }
}
