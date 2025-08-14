export default function Section4(){
    return(
        <section className="w-full min-h-[50vh] bg-gradient-2">
            <div className="w-full h-full p-[5vh] flex flex-col justify-center items-center gap-y-16">
                <p className="text-[5vh] font-bold">See what the Community is up to!</p>

                <div className="h-full gap-x-5 grid lg:grid-cols-3 justify-center items-center">
                    <div className=" w-[35vh] h-[50vh] bg-slate-200"></div>
                    <div className=" w-[35vh] h-[50vh] bg-slate-200"></div>
                    <div className=" w-[35vh] h-[50vh] bg-slate-200"></div>
                </div>
            </div>
        </section>
    )
}