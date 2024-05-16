import { initializeSymphony, jsonToArrowBuffer } from "./standalone";

const _widgetInfo = {
    experiment: "standalone",
    spec: {
        filesPath: "None",
        dataType: 1,
        instancesPerPage: 150,
        showUnfilteredData: true,
        idColumn: "id",
    },
    pages: {
        Summary: [
            {
                name: "SymphonySummary",
                file: "SymphonySummary.json",
                height: "M",
                width: "XXL",
                page: "Summary",
            },
            {
                name: "SymphonyFairvis",
                file: "SymphonyFairvis.json",
                height: "M",
                width: "XXL",
                page: "Summary",
            },
            {
                name: "SymphonyDataMap",
                file: "SymphonyDataMap.json",
                height: "M",
                width: "XXL",
                page: "Summary",
            },
            {
                name: "SymphonyDuplicates",
                file: "SymphonyDuplicates.json",
                height: "M",
                width: "XXL",
                page: "Summary",
            },
            {
                name: "SymphonyFamiliarity",
                file: "SymphonyFamiliarity.json",
                height: "M",
                width: "XXL",
                page: "Summary",
            },
            {
                name: "SymphonyList",
                file: "SymphonyList.json",
                height: "M",
                width: "XXL",
                page: "Summary",
            },
            {
                name: "SymphonyScatterPlot",
                file: "SymphonyScatterPlot.json",
                height: "M",
                width: "XXL",
                page: "Summary",
            },
            {
                name: "SymphonyVega",
                file: "SymphonyVega.json",
                height: "M",
                width: "XXL",
                page: "Summary",
            },
        ],
    },
    exportID: "89342fec-10ac-11ef-9f8a-9494260910c4",
};

const _widgetSpecs = {
    SymphonySummary: {
        width: "XXL",
        height: "M",
        page: "Summary",
        name: "SymphonySummary",
        description:
            "A Symphony component that visualizes an overview of a dataset",
        summaryElements: [],
    },
    SymphonyFairvis: {
        width: "XXL",
        height: "M",
        page: "Summary",
        name: "SymphonyFairvis",
        description:
            "A Symphony component that visualizes an overview of a dataset",
        summaryElements: [],
    },
    SymphonyDataMap: {
        width: "XXL",
        height: "M",
        page: "Summary",
        name: "SymphonyDataMap",
        description:
            "A Symphony component that visualizes an overview of a dataset",
        summaryElements: [],
    },
    SymphonyDuplicates: {
        width: "XXL",
        height: "M",
        page: "Summary",
        name: "SymphonyDuplicates",
        description:
            "A Symphony component that visualizes an overview of a dataset",
        summaryElements: [],
    },
    SymphonyFamiliarity: {
        width: "XXL",
        height: "M",
        page: "Summary",
        name: "SymphonyFamiliarity",
        description:
            "A Symphony component that visualizes an overview of a dataset",
        summaryElements: [],
    },
    SymphonyList: {
        width: "XXL",
        height: "M",
        page: "Summary",
        name: "SymphonyList",
        description:
            "A Symphony component that visualizes an overview of a dataset",
        summaryElements: [],
    },
    SymphonyScatterPlot: {
        width: "XXL",
        height: "M",
        page: "Summary",
        name: "SymphonyScatterPlot",
        description:
            "A Symphony component that visualizes an overview of a dataset",
        summaryElements: [],
    },
    SymphonyVega: {
        width: "XXL",
        height: "M",
        page: "Summary",
        name: "SymphonyVega",
        description:
            "A Symphony component that visualizes an overview of a dataset",
        summaryElements: [],
    },
};

const data = {
    Seattle: [69, 108, 178, 207, 253, 268, 312, 281, 221, 142, 72, 52],
    Chicago: [135, 136, 187, 215, 281, 311, 318, 283, 226, 193, 113, 106],
    "San Francisco": [
        165, 182, 251, 281, 314, 330, 300, 272, 267, 243, 189, 156,
    ],
};

const app = initializeSymphony(
    document.body,
    jsonToArrowBuffer(data),
    _widgetInfo,
    _widgetSpecs,
);

export default app;
