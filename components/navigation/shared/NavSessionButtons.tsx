"use client";

import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { sidebarSessionButtons } from "@/constants";
import Image from "next/image";

const NavSessionButtons = ({
  isMobileNav = false,
}: {
  isMobileNav?: boolean;
}) => {
  const { data: session, status } = useSession();

  //For testing purposes
  console.log({ session, status });
  return (
    <div className="flex flex-col gap-3">
      {sidebarSessionButtons.map((item) => {
        const buttonComponent = (
          <Link href={item.route}>
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
              <Image
                src={item.imgURL}
                width={20}
                height={20}
                alt={item.label}
                className={"w-auto heiht-auto lg:hidden"}
              />
              <span className={`hidden lg:block ${item.class}`}>
                {item.label}
              </span>
            </Button>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {buttonComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.label}>{buttonComponent}</React.Fragment>
        );
      })}
    </div>
  );
};

export default NavSessionButtons;
