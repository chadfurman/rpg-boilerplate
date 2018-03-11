/**
 * @flow
 * @relayHash 715032eb91cb0bb1c8bdabb86d94b2f8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type signupMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    displayName: string;
    email: string;
    password: string;
  };
|};

export type signupMutationResponse = {|
  +signup: {|
    +profile: ?{|
      +nodeId: string;
      +id: any;
      +displayName: string;
    |};
  |};
|};
*/


/*
mutation signupMutation(
  $input: SignupInput!
) {
  signup(input: $input) {
    profile {
      nodeId
      id
      displayName
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SignupInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "signupMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SignupInput!"
          }
        ],
        "concreteType": "SignupPayload",
        "name": "signup",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Profile",
            "name": "profile",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "signupMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SignupInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "signupMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SignupInput!"
          }
        ],
        "concreteType": "SignupPayload",
        "name": "signup",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Profile",
            "name": "profile",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation signupMutation(\n  $input: SignupInput!\n) {\n  signup(input: $input) {\n    profile {\n      nodeId\n      id\n      displayName\n    }\n  }\n}\n"
};

module.exports = batch;
