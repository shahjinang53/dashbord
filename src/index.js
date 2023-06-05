import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './contexts/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("Mgo+DSMBaFt+QHJqXU1hXk5Hd0BLVGpAblJ3T2ZQdVt5ZDU7a15RRnVfRF1iSXxRd0BrUX5beQ==;Mgo+DSMBPh8sVXJ1S0R+VFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jT35SdkdhWHpWeHdSTw==;ORg4AjUWIQA/Gnt2VFhiQllPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXhTd0VhW35beHxSRWk=;MjI3ODY1OEAzMjMxMmUzMDJlMzBPVjZlWUZtcytIZm5pVjJVWXFwK1pWejRIVzVocWFabTBSZWZEQWpWQkZJPQ==;MjI3ODY1OUAzMjMxMmUzMDJlMzBhRms3ZDlUckNtZ3hRZlM3Ym1HN3hib2hPQVJJVWc0bkdSSlRETVdmWno0PQ==;NRAiBiAaIQQuGjN/V0d+Xk9MfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5VdkRjW31fdXxcQWRV;MjI3ODY2MUAzMjMxMmUzMDJlMzBpOXM2NSthQkpHeEJ6cTVyN29lYTNTQWJXNitDZDZXdjVJdk84T3A2K29VPQ==;MjI3ODY2MkAzMjMxMmUzMDJlMzBNVkFFY21JdFQ5TUh4a2FHQ1l0M09aUmdlVU5jVzhwSC9hQ1piU2REbXNzPQ==;Mgo+DSMBMAY9C3t2VFhiQllPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXhTd0VhW35beXRST2k=;MjI3ODY2NEAzMjMxMmUzMDJlMzBSYlRXVHRWQ0FCdlp0UFhGcEZNdEthUzlCQjhsWGtqekxkeGprbDJ1WFN3PQ==;MjI3ODY2NUAzMjMxMmUzMDJlMzBWR3BIT0pYbHJYYjdrZTJLQUhlOEtHTVFpZUxnQ1F1Ny84TUtvVzdzNVRBPQ==;MjI3ODY2NkAzMjMxMmUzMDJlMzBpOXM2NSthQkpHeEJ6cTVyN29lYTNTQWJXNitDZDZXdjVJdk84T3A2K29VPQ==");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // registerLicense('License Key'),
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
