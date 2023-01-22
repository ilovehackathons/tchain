import { EmissionType } from "interfaces";

const categories = [
  {
    icon: "md-stats-chart-outline",
    emissionType: EmissionType.meal,
  },
  {
    icon: "md-trending-up-outline",
    emissionType: EmissionType.transport,
  },
  {
    icon: "md-barcode-sharp",
    emissionType: EmissionType.productScanned,
  },
  {
    icon: "md-shapes-outline",
    emissionType: EmissionType.streaming,
  },
  {
    icon: "md-rocket-outline",
    emissionType: EmissionType.purchase,
  },
  {
    icon: "md-receipt-outline",
    emissionType: EmissionType.fashion,
  },
  {
    icon: "md-people-outline",
    emissionType: EmissionType.food,
  },
  {
    icon: "md-flash",
    emissionType: EmissionType.electricity,
  },
  {
    icon: "md-build",
    emissionType: EmissionType.custom,
  },
];

export { categories };
