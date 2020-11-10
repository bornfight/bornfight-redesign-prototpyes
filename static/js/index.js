import GridHelper from "./components/GridHelper";
import BasicPixiExample from "./components/BasicPixiExample";
import NavigationController from "./components/NavigationController";
import PortfolioListController from "./components/PortfolioListController";

function ready(callbackFunc) {
    if (document.readyState !== "loading") {
        /**
         * Document is already ready, call the callback directly
         */
        callbackFunc();
    } else if (document.addEventListener) {
        /**
         * All modern browsers to register DOMContentLoaded
         */
        document.addEventListener("DOMContentLoaded", callbackFunc);
    } else {
        /**
         * Old IE browsers
         */
        document.attachEvent("onreadystatechange", function () {
            if (document.readyState === "complete") {
                callbackFunc();
            }
        });
    }
}

/**
 * Document ready callback
 */
ready(function () {

    var consoleLogStyle = [
        "background-color: #000000",
        "color: white",
        "display: block",
        "line-height: 24px",
        "text-align: center",
        "border: 1px solid #ffffff",
        "font-weight: bold",
    ].join(";");

    console.info("dev by: %c Bornfight ", consoleLogStyle);

    const gridHelper = new GridHelper();
    gridHelper.init();

    const navigation = new NavigationController();
    navigation.init();

    if (document.getElementById("edu") !== null) {
        const pixiEdu = new BasicPixiExample();
        pixiEdu.init();
    }

    if (document.getElementById("portfolio") !== null) {
        const portfolioList = new PortfolioListController();
        portfolioList.init();
    }
});
