export interface Country {
    Country: string;
    CountryCode: string;
    Date: string;
    ID: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    Premium: any;
    Slug: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

interface Global {
    Date: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

export interface CovidSummaryResponse {
    Date: string;
    Message: string;
    Global: Global;
    Countries: Country[];
}

export interface CountrySummaryInfo {
    Cases: number;
    City: string;
    CityCode: string;
    County: string;
    CountryCode: string;
    Date: string;
    Lat: string;
    Lon: string;
    Province: string;
    Status: string;
}

export type CountrySummaryResponse = CountrySummaryInfo[];
