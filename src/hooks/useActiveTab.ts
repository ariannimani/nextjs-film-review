import { useRouter } from "next/router";

export default function useActiveTab() {
  const { query } = useRouter();
  const activeTab = query.activeTab || "overview";
  return activeTab;
}
