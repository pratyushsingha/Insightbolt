import { ProjectProvider } from "@/contexts/project-context";
import { getAnalytics } from "@/use-cases/projects";
import { Suspense } from "react";
import { Analytics } from "../_components/analytics";
import { AnimatedTabs } from "../_components/animated-tab";
import { Header } from "../_components/header";
import { Issues } from "../_components/issues";
import { Metadata } from "../_components/metadata";
import { MetadataError } from "../_components/metadata-error";
import { ProjectData } from "../_components/project-data";
import WebsiteDetailSkeleton from "../_components/website-skeleton";

type Props = {
  params: Promise<{ website: string }>;
};

const WebsiteDetailPage = async ({ params }: Props) => {
  const { website } = await params;
  const decodedWebsite = decodeURIComponent(website);
  return (
    <ProjectProvider>
      <Suspense fallback={<WebsiteDetailSkeleton />}>
        <WebsiteDetail website={decodedWebsite} />
      </Suspense>
    </ProjectProvider>
  );
};

const WebsiteDetail = async ({ website }: { website: string }) => {
  const websiteData = await getAnalytics(website);
  const tabs = [
    { id: "metadata", label: "Metadata" },
    { id: "analytics", label: "Analytics" },
    { id: "issues", label: "Issues" },
  ];
  return !websiteData ? (
    <div className="flex justify-center items-center w-full h-screen">
      <MetadataError />
    </div>
  ) : (
    <>
      <Header title="Your Projects" project={websiteData?.name} />
      <div className="p-5 lg:px-32 lg:py-10">
        <ProjectData
          website={website}
          websiteData={{
            name: websiteData?.name,
            description: websiteData?.description,
          }}
        />
        <div className="flex flex-col gap-4 py-4">
          <AnimatedTabs tabs={tabs} />
          <Metadata domain={website} />
          <Analytics analytics={websiteData?.analytics} />
          <Issues />
        </div>
      </div>
    </>
  );
};

export default WebsiteDetailPage;
