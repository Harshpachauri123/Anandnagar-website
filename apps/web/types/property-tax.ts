export type SearchMode = "ward" | "owner" | "property";

export interface PropertyTaxBreakdown {
  propertyTax: number;
  waterTax: number;
  drainageTax: number;
  lightingTax: number;
  otherTax: number;
  arrears: number;
  penalty: number;
  rebate: number;
  paidAmount: number;
}

export interface PropertyRecord{

  id: string;
  propertyId: string;
  parcelNo: string;
  ward: string;

  ownerName: string;
  fatherName: string;
  mobile: string;

  buildingNo: string;
  propertyType: string;
  usageType: string;

  locality: string;
  address: string;
  landmark: string;

  rateZone: string;
  constructionYear: number;
  plotArea: number;
  builtUpArea: number;

  tax: PropertyTaxBreakdown;
}

export interface TaxTotal {
  currentDemand: number;
  grossAmount: number;
  totalPayable: number;
}
