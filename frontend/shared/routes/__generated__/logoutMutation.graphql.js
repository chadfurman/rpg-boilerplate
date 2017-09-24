/**
 * @flow
 * @relayHash be682a0dd47d6bcef99aaa7588f578aa
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type logoutMutationVariables = {|
  input: {
    clientMutationId?: ?string;
  };
|};

export type logoutMutationResponse = {|
  +logout: {|
    +boolean: ?boolean;
  |};
|};
*/


/*
mutation logoutMutation(
  $input: LogoutInput!
) {
  logout(input: $input) {
    boolean
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "LogoutInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "logoutMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "LogoutInput!"
          }
        ],
        "concreteType": "LogoutPayload",
        "name": "logout",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "boolean",
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
  "name": "logoutMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "LogoutInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "logoutMutation",
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
            "type": "LogoutInput!"
          }
        ],
        "concreteType": "LogoutPayload",
        "name": "logout",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "boolean",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation logoutMutation(\n  $input: LogoutInput!\n) {\n  logout(input: $input) {\n    boolean\n  }\n}\n"
};

module.exports = batch;
