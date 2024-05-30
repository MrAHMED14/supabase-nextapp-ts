import MaxWidthWrapper from "@/components/global/MaxWidthWrapper"

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center py-24">
        <h1 className="text-5xl sm:text-6xl font-bold">Hello There</h1>
      </div>
    </MaxWidthWrapper>
  )
}
