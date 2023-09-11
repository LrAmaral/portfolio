export default function Education() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full xs:w-3/4">
      <h2 className="text-2xl font-bold font-sans">
        Education 
      </h2>
      <div className="flex flex-col gap-8">
        <div className="gap-8 border-l border-alt p-2">
            <p className="text-lg">• Currently studying System Analysis and Development.</p>
            <p className="text-sm"> - January 2020 - December 2024</p>
        </div>
        <div className="border-l border-alt p-2 flex flex-col gap-4">
            <p className="text-lg">• Graduated in Computer network technician integrated into high school.</p>
            <p className="text-sm"> - January 2017 - December 2019</p>
        </div>
      </div>
    </div>
  )
}

