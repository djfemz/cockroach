// Copyright 2018 The Cockroach Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied. See the License for the specific language governing
// permissions and limitations under the License.

import React from "react";

import "./licenseType.styl";

/**
 * LicenseType is an indicator showing the current build license.
 */
export default class LicenseType extends React.Component<{}, {}> {
  render() {
    return (
      <h3>
        <span className="license-type__label">License type:</span>
        {" "}
        <span className="license-type__license">OSS</span>
      </h3>
    );
  }
}
