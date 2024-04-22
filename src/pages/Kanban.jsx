import { Card } from "@tremor/react";
import React from "react";
import { chartdata } from "../data/Data";

function Kanban() {
  return (
    <>
      {console.log(chartdata)}
      <p className="text-3xl mb-8">Priority Board</p>
      <div className="flex flex-wrap h-[85vh] gap-10 ">
        <div className=" flex flex-col gap-4 flex-wrap  flex-1  border border-black">
          {chartdata.map((x) => {
            return (
              <>
                {/* <div className="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {x.date}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {x["The Pragmatic Engineer"]}
                  </p>
                </div> */}

                <Card
                  className="mx-auto max-w-xs"
                  decoration="top"
                  decorationColor="teal"
                >
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    {x.SemiAnalysis}
                  </p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                    {x["The Pragmatic Engineer"]}
                  </p>
                </Card>
              </>
            );
          })}
        </div>
        <div className="flex flex-1  border border-black"></div>
        <div className="flex flex-1  border border-black"></div>
        <div className="flex flex-1  border border-black"></div>
      </div>
    </>
  );
}

export default Kanban;
