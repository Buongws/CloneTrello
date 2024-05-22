import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <PrimeReactProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </PrimeReactProvider>
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
