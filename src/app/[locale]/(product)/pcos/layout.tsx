import type { ReactNode } from "react";

import { PCOSShell } from "@/components/pcos/shell/shell";
import { seedOrganization } from "@/pcos/domain";

export default function PCOSLayout({ children }: { children: ReactNode }) {
  return <PCOSShell organization={seedOrganization}>{children}</PCOSShell>;
}

