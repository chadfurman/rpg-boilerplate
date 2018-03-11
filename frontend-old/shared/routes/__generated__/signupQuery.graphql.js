/**
 * @flow
 * @relayHash da664f149d7d6d695d07aec3bbdaf8ee
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type signupQueryResponse = {|
  +currentProfile: ?{|
    +nodeId: string;
    +id: any;
    +displayName: string;
    +image: ?string;
  |};
|};
*/


/*
query signupQuery {
  currentProfile {
    nodeId
    id
    displayName
    image
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "signupQuery",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "displayName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "image",
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
  "name": "signupQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "signupQuery",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "displayName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "image",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query signupQuery {\n  currentProfile {\n    nodeId\n    id\n    displayName\n    image\n  }\n}\n"
};

module.exports = batch;
