"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("floatingButton", {
                calLink: "andynadal/30min",
                config: {
                    layout: "month_view",
                    useSlotsViewOnSmallScreen: "true",
                },
            });
            cal("ui", {
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return null;
}
