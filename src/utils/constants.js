export const jsonData = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          name: "Cloud Accounts",
          type: "pieChart",
          data: {
            labels: ["Connected", "Not Connected"],
            values: [2, 2],
            colors: ["#3B82F6", "#93C5FD"],
          },
        },
        {
          name: "Cloud Account Risk Assessment",
          type: "pieChart",
          data: {
            labels: ["Failed", "Warning", "Not available", "Passed"],
            values: [1689, 681, 36, 7253],
            colors: ["#EF4444", "#F59E0B", "#9CA3AF", "#10B981"],
          },
        },
      ],
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        {
          name: "Top 5 Namespace Specific Alerts",
          type: "placeholder",
        },
        {
          name: "Workload Alerts",
          type: "placeholder",
        },
      ],
    },
    {
      name: "Registry Scan",
      widgets: [
        {
          name: "Image Risk Assessment",
          type: "barChart",
          data: {
            labels: ["Critical", "High"],
            values: [9, 150],
            colors: ["#EF4444", "#F59E0B"],
          },
        },
        {
          name: "Image Security Issues",
          type: "barChart",
          data: {
            labels: ["Critical", "High"],
            values: [2, 2],
            colors: ["#EF4444", "#F59E0B"],
          },
        },
      ],
    },
  ],
};
