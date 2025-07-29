import { ResumePage } from "@/components/sections/ResumePage";
import { PWAInstallButton } from "@/components/ui/pwa-install-button";

export default function Home() {
  return (
    <div className="bg-background printable-area">
      <ResumePage />
      <PWAInstallButton />
    </div>
  );
}
