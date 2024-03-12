import {
  AzureMap,
  AzureMapsProvider,
  IAzureMapOptions,
} from "react-azure-maps";
import { AuthenticationType } from "azure-maps-control";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";

import "azure-maps-control/dist/atlas.min.css";

const Map: React.FC = () => {
  const { instance, accounts, inProgress } = useMsal();
  const isAuthenticated = accounts.length > 0 && inProgress === "none";

  if (isAuthenticated) {
    const option: IAzureMapOptions = {
      authOptions: {
        authType: AuthenticationType.aad,
        clientId: "6b603e52-a0de-41df-bfa2-464e262fa984",
        aadAppId: "761aa8c0-ab72-4dfe-8f47-8bd0718acae6",
        authContext: instance,
      },
    };

    return (
      <div style={{ height: "600px" }}>
        <AzureMapsProvider>
          <AzureMap options={option} />
        </AzureMapsProvider>
      </div>
    );
  } else {
    return <button onClick={() => instance.loginRedirect()}>Login</button>;
  }
};

// MSAL configuration
const configuration: Configuration = {
  auth: {
    clientId: "761aa8c0-ab72-4dfe-8f47-8bd0718acae6",
    authority:
      "https://login.microsoftonline.com/5122b9e0-9741-49fe-8990-94c45441f85d",
  },
};

// MSAL instance
const pca = new PublicClientApplication(configuration);

const MsalMap: React.FC = () => {
  return (
    <MsalProvider instance={pca}>
      <Map />
    </MsalProvider>
  );
};

export default MsalMap;
