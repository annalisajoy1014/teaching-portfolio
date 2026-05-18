import TestPrepNav from "@/components/TestPrepNav";

export default function TestPrepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TestPrepNav />
      {children}
    </>
  );
}
