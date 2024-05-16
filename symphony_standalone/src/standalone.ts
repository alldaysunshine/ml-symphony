import App from "./app.svelte";

import SymphonySummary from "../../widgets/symphony_summary/src/SymphonySummary.svelte";
import SymphonyFairvis from "../../widgets/symphony_fairvis/src/SymphonyFairvis.svelte";
import SymphonyDataMap from "../../widgets/symphony_data_map/src/SymphonyDataMap.svelte";
import SymphonyDuplicates from "../../widgets/symphony_duplicates/src/SymphonyDuplicates.svelte";
import SymphonyFamiliarity from "../../widgets/symphony_familiarity/src/SymphonyFamiliarity.svelte";
import SymphonyList from "../../widgets/symphony_list/src/SymphonyList.svelte";
import SymphonyScatterPlot from "../../widgets/symphony_scatterplot/src/SymphonyScatterPlot.svelte";
import SymphonyVega from "../../widgets/symphony_vega/src/SymphonyVega.svelte";

import { widgetSpecs, dataTable } from "@apple/symphony-lib";

import { table } from "arquero";

export function jsonToArrowBuffer(json) {
    return table(json).toArrowBuffer();
}

export function initializeSymphony(
    _rootElement,
    _arrowBuffer,
    _widgetInfo,
    _widgetSpecs,
) {
    const components = {
        SymphonySummary: SymphonySummary,
        SymphonyFairvis: SymphonyFairvis,
        SymphonyDataMap: SymphonyDataMap,
        SymphonyDuplicates: SymphonyDuplicates,
        SymphonyFamiliarity: SymphonyFamiliarity,
        SymphonyList: SymphonyList,
        SymphonyScatterPlot: SymphonyScatterPlot,
        SymphonyVega: SymphonyVega,
    };

    widgetSpecs.set(_widgetSpecs);
    dataTable.set(_arrowBuffer);

    return new App({
        target: _rootElement, // entry point in ../public/index.html
        props: {
            components: components,
            widgetInfo: _widgetInfo,
        },
    });
}

