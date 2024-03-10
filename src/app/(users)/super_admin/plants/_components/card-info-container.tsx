import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import CardInfo from "./card-info";

export default function CardInfoContainer() {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <CardInfo
        title="Active Plant"
        activeValue="100"
        faultValue="0"
        inactiveValue="0"
      />
      <CardInfo
        title="Portfolio Summary"
        activeValue=""
        faultValue=""
        inactiveValue=""
      />
    </div>
  );
}
