export default function Professional() {
  return (
    <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold font-alt mb-4 flex items-center">Professional</h2>
            <div className="flex md:flex-row xs:flex-col gap-8 w-3/4 justify-center items-center">
              <div className="border-l border-alt p-2 flex flex-col gap-4">
                <p className="text-lg">Frontend developer on a volunteer work at InkPen.</p>
                <p className="text-sm">- September 2023 - The present moment</p>
              </div>
              <div className="border-l border-alt p-2 flex flex-col gap-4">
                  <p className="text-lg">Computer Store Clerk at Imac Informática.</p>
                  <p className="text-sm"> - January 2021 - December 2021</p>
              </div>
            </div>
    </div>
  )
}

