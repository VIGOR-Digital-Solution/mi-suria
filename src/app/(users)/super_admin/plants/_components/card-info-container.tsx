import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import CardInfo from "./card-info";

export default function CardInfoContainer() {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <CardInfo
        title="Active Plant"
        activeValue="85"
        faultValue="10"
        inactiveValue="5"
      />
      <CardInfo
        title="Portfolio Summary"
        activeValue="60"
        faultValue="30"
        inactiveValue="10"
      />
    </div>
  );
}
