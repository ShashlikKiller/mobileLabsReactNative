export default class City {
    id: string;
    postal_code: string;
    federal_district: string;
    region: string;
    city: string;
    timezone: string;
    geo_lat: number;
    geo_lon: number;
    population: number;
    foundation_year: number;
  
    constructor(id: string, data: any) {
      this.id = id;
      this.postal_code = data.postal_code;
      this.federal_district = data.federal_district;
      this.region = data.region;
      this.city = data.city;
      this.timezone = data.timezone;
      this.geo_lat = data.geo_lat;
      this.geo_lon = data.geo_lon;
      this.population = data.population;
      this.foundation_year = data.foundation_year;
    }
  }