import { pgTable, serial, integer, varchar, json } from "drizzle-orm/pg-core";

export const CarListing = pgTable("carListing", {
  id: serial("id").primaryKey(),

  listingtitle: varchar("listingtitle").notNull(),
  tagline: varchar("tagline").notNull(),
  originalprice: varchar("originalprice").notNull(),
  sellingprice: varchar("sellingprice").notNull(),
  model: varchar("model").notNull(),
  year: varchar("year").notNull(),
  Category: varchar("Category").notNull(),
  Condition: varchar("Condition").notNull(),
  make: varchar("make").notNull(),
  offertype: varchar("offertype").notNull(),
  drivetype: varchar("drivetype").notNull(),
  Transmission: varchar("Transmission").notNull(),
  fueltype: varchar("fueltype").notNull(),
  mileage: varchar("mileage").notNull(),
  enginesize: varchar("enginesize").notNull(),
  cylinder: varchar("cylinder").notNull(),
  Colour: varchar("Colour").notNull(),
  door: integer("door").notNull(),
  features: json("features").notNull(),
  CarImages: varchar("CarImages").notNull(),
  createdBy: varchar("createdBy").notNull(),
  userName:varchar('userName').default('Jagjit Singh'),
  postedOn: varchar("postedOn").notNull(),
});
