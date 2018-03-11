/**
 * @flow
 * @relayHash e28ff00778182b39a62bf1f86389f75a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type authenticateMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    email: string;
    password: string;
  };
|};

export type authenticateMutationResponse = {|
  +authenticate: {|
    +jwt: ?any;
  |};
|};
*/


/*
mutation authenticateMutation(
  $input: AuthenticateInput!
) {
  authenticate(input: $input) {
    jwt
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AuthenticateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "authenticateMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AuthenticateInput!"
          }
        ],
        "concreteType": "AuthenticatePayload",
        "name": "authenticate",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "jwt",
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
  "name": "authenticateMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AuthenticateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "authenticateMutation",
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
            "type": "AuthenticateInput!"
          }
        ],
        "concreteType": "AuthenticatePayload",
        "name": "authenticate",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "jwt",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation authenticateMutation(\n  $input: AuthenticateInput!\n) {\n  authenticate(input: $input) {\n    jwt\n  }\n}\n"
};

module.exports = batch;
