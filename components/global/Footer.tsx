import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
  return (
    <footer className="w-full">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col items-center py-5 mt-4">
          <div className="w-full h-px bg-black/30 dark:bg-white/15" />
          <h1 className="pt-5 text-black/50 dark:text-white/15 text-xs font-semibold">
            {new Date().getFullYear()} &copy; MrAHMED Chikhaoui
          </h1>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
