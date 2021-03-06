import "@/scss/style.scss";
import App from "@/js/core/App";
import StepsUI from "@/js/core/StepsUI";
import Preview from "@/js/core/Preview";
import CurrentPriceUI from "@/js/core/CurrentPriceUI";
import overprintLocationStep from "@/js/steps/OverprintLocationStep";
import pickImageStep from "@/js/steps/PickImageStep";
import customerDataStep from "@/js/steps/CustomerDataStep";
import summaryStep from "@/js/steps/SummaryStep";

const stepsUI = new StepsUI(".formApp__steps", ".formApp__content");
const preview = new Preview(".formApp__preview");
const currentPriceUI = new CurrentPriceUI(".formApp__summary");
const app = new App(stepsUI, preview, currentPriceUI);

app.addStep(overprintLocationStep);
app.addStep(pickImageStep);
app.addStep(customerDataStep);
app.addStep(summaryStep);

app.start();
