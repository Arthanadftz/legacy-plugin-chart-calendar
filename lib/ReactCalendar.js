"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@superset-ui/core");

var _Calendar = _interopRequireDefault(require("./Calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const ReactComponent = (0, _core.reactify)(_Calendar.default);

const Calender = ({
  className,
  ...otherProps
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement(ReactComponent, otherProps));
};

Calender.defaultProps = {
  otherProps: {}
};
Calender.propTypes = {
  className: _propTypes.default.string.isRequired,
  otherProps: _propTypes.default.objectOf(_propTypes.default.any)
};

var _default = (0, _core.styled)(Calender)`
  .superset-legacy-chart-calendar {
    padding: 10px;
    position: static !important;
    overflow: auto !important;
  }

  .superset-legacy-chart-calendar .ch-tooltip {
    margin-left: 20px;
    margin-top: 5px;
  }
`;

exports.default = _default;