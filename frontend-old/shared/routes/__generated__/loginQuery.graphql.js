/**
 * @flow
 * @relayHash f4fcfec505bce80e7a9c6f0f4a343ba0
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type loginQueryResponse = {|
  +currentProfile: ?{|
    +nodeId: string;
    +id: any;
    +displayName: string;
    +image: ?string;
  |};
|};
*/


/*
query loginQuery {
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
    "name": "loginQuery",
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
  "name": "loginQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "loginQuery",
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
  "text": "query loginQuery {\n  currentProfile {\n    nodeId\n    id\n    displayName\n    image\n  }\n}\n"
};

module.exports = batch;
