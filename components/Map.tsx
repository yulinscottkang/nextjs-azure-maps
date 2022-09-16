import {
  AzureMap,
  AzureMapsProvider,
  IAzureMapControls,
  IAzureMapOptions,
} from "@yulinscottkang/react-azure-maps";
import { AuthenticationType, ControlOptions } from "azure-maps-control";
import 'azure-maps-control/dist/atlas.min.css'

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: "_iCg1nyPYBVv3Vpynd1PvTkBsOG5LpZBeVq8qP-ve9Q", // Your subscription key
  },
};

const controls: IAzureMapControls[] = [
  {
    controlName: "StyleControl",
    controlOptions: { mapStyles: "all" },
    options: { position: "top-right" } as ControlOptions,
  },
  {
    controlName: "ZoomControl",
    options: { position: "top-right" } as ControlOptions,
  },
  {
    controlName: "CompassControl",
    controlOptions: { rotationDegreesDelta: 10, style: "dark" },
    options: { position: "bottom-right" } as ControlOptions,
  },
  {
    controlName: "PitchControl",
    controlOptions: { pitchDegreesDelta: 5, style: "dark" },
    options: { position: "bottom-right" } as ControlOptions,
  },
  {
    controlName: "TrafficControl",
    controlOptions: { incidents: true },
    options: { position: "top-left" } as ControlOptions,
  },
  {
    controlName: "TrafficLegendControl",
    controlOptions: {},
    options: { position: "bottom-left" } as ControlOptions,
  },
];

const Map: React.FC = () => {
  return (
    <AzureMapsProvider>
      <div style={{ height: "600px" }}>
        <AzureMap options={option} controls={controls} />
      </div>
    </AzureMapsProvider>
  );
};

export default Map;
