import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";

const MobileHeader = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu size={40} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <p className="text-[#008732] text-[1rem] lg:text-[2rem] font-bold">
                H3
              </p>
            </SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileHeader;
