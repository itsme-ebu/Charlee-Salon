import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { peoples } from "@/constents/peoples";
import Image from "next/image";
import { Button } from "./ui/button";

function Team() {
  return (
    <section className="md:w-[90%] w-full mx-auto h-full py-10 flex justify-around flex-wrap gap-10 ">
      <div>
        <h2 className=" text-center boldee text-xl tracking-widest">
          MEET OUR TEAM
        </h2>
        <p className="pierpont mx-auto md:w-2/3 text-center my-8 text-lg px-4 md:px-20 md:text-2xl">
          THE CHARLEE’s technicians each have their area of expertise —­ you
          will experience someone who is a master of their craft, devoted to
          ongoing education and top techniques.
        </p>
      </div>
      {peoples.map((people, index) => (
        <div key={people.fullName}>
          <Dialog>
            <DialogTrigger>
              <div className="w-full h-full text-start max-md:px-3">
                <div className="w-full h-full ">
                  <Image
                    src={people.img}
                    alt="saloon"
                    width={350}
                    height={450}
                  />
                </div>

                <h2 className="boldee my-2 tracking-widest uppercase text-xl">
                  {people.fullName}
                  <span className="pierpont text-xs italic lowercase">
                    (she/her)
                  </span>
                </h2>
                <p className="mediumm tracking-wider text-sm uppercase">
                  {people.role}
                </p>
              </div>
            </DialogTrigger>
            <DialogContent className="min-w-[80%] overflow-hidden m-0 p-0  md:h-[95vh]">
              <div className="grid md:grid-cols-3">
                <div className="w-full h-full relative max-md:hidden">
                  <Image
                    src={people.img}
                    alt={people.fullName}
                    fill
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="w-full h-full col-span-2 md:p-10 p-3">
                  <h2 className="boldee my-2 tracking-widest uppercase text-xl">
                    {people.fullName}
                    <span className="pierpont text-xs italic lowercase">
                      (she/her)
                    </span>
                  </h2>
                  <p className="mediumm tracking-wider pb-3 text-sm uppercase">
                    {people.role}
                  </p>
                  <div className=" border-y py-3 border-black w-full h-full">
                    <Tabs defaultValue="account" className="w-full">
                      <TabsList className="flex flex-wrap justify-start">
                        {Object.keys(people.tabs[0]).map((tab, index) => {
                          return (
                            <TabsTrigger value={tab} key={index}>
                              {tab}
                            </TabsTrigger>
                          );
                        })}
                      </TabsList>

                      {Object.keys(people.tabs[0]).map((tab, index) => {
                        if (tab === "Education") {
                          return (
                            <TabsContent
                              value={tab}
                              key="education"
                              className="max-md:mt-10"
                            >
                              <ul className="py-5 px-10">
                                {people.tabs[0][tab]?.map((edu, index) => (
                                  <li
                                    className="pierpont list-disc"
                                    key={index}
                                  >
                                    {edu}
                                  </li>
                                ))}
                              </ul>
                            </TabsContent>
                          );
                        } else if (tab === "Expertise") {
                          return (
                            <TabsContent
                              value={tab}
                              key="Expertise"
                              className="max-md:mt-8"
                            >
                              <ul className="py-5 px-10">
                                {people.tabs[0][tab]?.map((exp, index) => (
                                  <li
                                    className="pierpont list-disc"
                                    key={index}
                                  >
                                    {exp}
                                  </li>
                                ))}
                              </ul>
                            </TabsContent>
                          );
                        } else {
                          return (
                            <TabsContent
                              key={tab}
                              value={tab}
                              className="w-full pierpont text-base p-5 max-md:mt-8"
                            >
                              {people.tabs[0][tab]}
                            </TabsContent>
                          );
                        }
                      })}
                    </Tabs>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </section>
  );
}

export default Team;
