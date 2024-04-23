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
          {chartdata.slice(0, 4).map((x) => {
            return (
              <>
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
                  <p className="text-sm dark:text-tremor-brand-faint text-dark-tremor-brand-faint">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat vero tenetur quos? Dolorum vel rerum ratione eum est
                    voluptate maiores?{" "}
                  </p>
                </Card>
              </>
            );
          })}
        </div>

        <div className=" flex flex-col gap-4 flex-wrap  flex-1  border border-black">
          {chartdata.slice(0, 3).map((x) => {
            return (
              <>
                <Card
                  className="mx-auto max-w-xs"
                  decoration="top"
                  decorationColor="red"
                >
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    {x.SemiAnalysis}
                  </p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                    {x["The Pragmatic Engineer"]}
                  </p>
                  <p className="text-sm dark:text-tremor-brand-faint text-dark-tremor-brand-faint">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat vero tenetur quos? Dolorum vel rerum ratione eum est
                    voluptate maiores?{" "}
                  </p>
                </Card>
              </>
            );
          })}
        </div>

        <div className=" flex flex-col gap-4 flex-wrap  flex-1  border border-black">
          {chartdata.slice(0, 2).map((x) => {
            return (
              <>
                <Card
                  className="mx-auto max-w-xs"
                  decoration="top"
                  decorationColor="yellow"
                >
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    {x.SemiAnalysis}
                  </p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                    {x["The Pragmatic Engineer"]}
                  </p>
                  <p className="text-sm dark:text-tremor-brand-faint text-dark-tremor-brand-faint">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat vero tenetur quos? Dolorum vel rerum ratione eum est
                    voluptate maiores?{" "}
                  </p>
                </Card>
              </>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 flex-wrap  flex-1  border border-black">
          {chartdata.slice(0, 4).map((x) => {
            return (
              <>
                <Card
                  className="mx-auto max-w-xs"
                  decoration="top"
                  decorationColor="violet"
                >
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    {x.SemiAnalysis}
                  </p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                    {x["The Pragmatic Engineer"]}
                  </p>
                  <p className="text-sm dark:text-tremor-brand-faint text-dark-tremor-brand-faint">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat vero tenetur quos? Dolorum vel rerum ratione eum est
                    voluptate maiores?{" "}
                  </p>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Kanban;
