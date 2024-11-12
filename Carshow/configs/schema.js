import { pgTable, serial, integer, varchar, json } from "drizzle-orm/pg-core";

export const CarListing = pgTable("carListing", {
  id: serial("id").primaryKey(),

  listingtitle: varchar("listingtitle"),
  tagline: varchar("tagline"),
  originalprice: varchar("originalprice"),
  sellingprice: varchar("sellingprice"),
  model: varchar("model"),
  year: varchar("year"),
  Category: varchar("Category"),
  Condition: varchar("Condition"),
  make: varchar("make"),
  offertype: varchar("offertype"),
  drivetype: varchar("drivetype"),
  Transmission: varchar("Transmission"),
  fueltype: varchar("fueltype"),
  mileage: varchar("mileage"),
  enginesize: varchar("enginesize"),
  cylinder: varchar("cylinder"),
  Colour: varchar("Colour"),
  door: integer("door"),
  features: json("features"),
  img: varchar("img"),
});
