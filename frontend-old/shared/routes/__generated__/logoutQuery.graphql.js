/**
 * @flow
 * @relayHash d89dcd8d4ba124b8e702394db04ae3de
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type logoutQueryResponse = {|
  +currentProfile: ?{|
    +nodeId: string;
  |};
|};
*/


/*
query logoutQuery {
  currentProfile {
    nodeId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "logoutQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Profile",
        "name": "currentProfile",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "nodeId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "logoutQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "logoutQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Profile",
        "name": "currentProfile",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "nodeId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query logoutQuery {\n  currentProfile {\n    nodeId\n  }\n}\n"
};

module.exports = batch;
