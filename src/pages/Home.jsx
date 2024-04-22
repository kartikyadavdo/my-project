import { BarChart, Card } from "@tremor/react";
import { AreaChart } from "@tremor/react";
import { chartdata } from "../data/Data";

const dataFormatter = (number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

function Home() {
  return (
    <>
      <div className="p-10 flex flex-row flex-wrap justify-around">
        <Card className=" max-w-xs " color="tremor-background-default" decoration="bottom"  decorationColor="teal">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Sales
          </p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            $34,743
          </p>
        </Card>
        <Card className=" max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Sales
          </p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            $34,743
          </p>
        </Card>
        <Card className=" max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Sales
          </p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            $34,743
          </p>
        </Card>
        <Card className=" max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Sales
          </p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            $34,743
          </p>
        </Card>
      </div>

      <div className="p-10 flex flex-row flex-wrap justify-around gap-20 h-96">
        <Card className="flex-1">
          <AreaChart
            className="h-96"
            data={chartdata}
            index="date"
            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
            colors={["indigo", "rose"]}
            valueFormatter={dataFormatter}
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
          />
        </Card>
        <Card className="flex-1">
          <BarChart
            className="h-96"
            data={chartdata}
            index="date"
            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
            colors={["cyan", "teal"]}
            valueFormatter={dataFormatter}
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
          />
        </Card>
      </div>
    </>
  );
}

export default Home;
