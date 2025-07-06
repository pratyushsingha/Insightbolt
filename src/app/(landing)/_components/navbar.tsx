"use client";

import Wrapper from "@/components/globals/wrapper";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="top-0 z-50 absolute inset-x-0 w-full">
      <div
        className={cn(
          "flex bg-transparent self-start items-center justify-between py-4 rounded-full relative z-[50] mx-auto w-full",
        )}
      >
        <Wrapper className="flex justify-between items-center lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="bg-clip-text bg-gradient-to-r from-white to-neutral-500 font-medium text-transparent text-xl">
                InsightBolt
              </span>
            </Link>
          </motion.div>

         
        </Wrapper>
      </div>
    </header>
  );
};

export default Navbar;
