import type { UserRole } from "@prisma/client";

export const dataUserRoles: Pick<
  UserRole,
  "sequence" | "symbol" | "name" | "description"
>[] = [
  {
    sequence: 1,
    symbol: "ADMIN",
    name: "Administrator",
    description: "Users can manage the entire system and data.",
  },
  {
    sequence: 2,
    symbol: "MANAGER",
    name: "Manager",
    description: "Users can manage systems and data.",
  },
  {
    sequence: 3,
    symbol: "EDITOR",
    name: "Editor",
    description: "Users can manage some data.",
  },
  {
    sequence: 4,
    symbol: "NORMAL",
    name: "Normal",
    description: "Ordinary users can only do the rest.",
  },
];
