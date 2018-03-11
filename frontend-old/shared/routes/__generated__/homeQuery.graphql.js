/**
 * @flow
 * @relayHash 18cdfaaa3b5c3ffe93fa705f8e4ccae7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type homeQueryResponse = {|
  +currentProfile: ?{| |};
|};
*/


/*
query homeQuery {
  currentProfile {
    ...Home_currentProfile
  }
}

fragment Home_currentProfile on Profile {
  displayName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeQuery",
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
            "kind": "FragmentSpread",
            "name": "Home_currentProfile",
            "args": null
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
  "name": "homeQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "homeQuery",
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
            "name": "displayName",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query homeQuery {\n  currentProfile {\n    ...Home_currentProfile\n  }\n}\n\nfragment Home_currentProfile on Profile {\n  displayName\n}\n"
};

module.exports = batch;
