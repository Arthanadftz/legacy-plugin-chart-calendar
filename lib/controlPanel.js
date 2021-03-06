"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@arthanasti/chart-controls");

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
var _default = {
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [[{
      name: 'domain_granularity',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Domain'),
        default: 'month',
        choices: (0, _chartControls.formatSelectOptions)(['hour', 'day', 'week', 'month', 'year']),
        description: (0, _core.t)('The time unit used for the grouping of blocks')
      }
    }, {
      name: 'subdomain_granularity',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Subdomain'),
        default: 'day',
        choices: (0, _chartControls.formatSelectOptions)(['min', 'hour', 'day', 'week', 'month']),
        description: (0, _core.t)('The time unit for each block. Should be a smaller unit than ' + 'domain_granularity. Should be larger or equal to Time Grain')
      }
    }], ['metrics'], ['adhoc_filters'], ['custom_filters']]
  }, {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    tabOverride: 'customize',
    controlSetRows: [['linear_color_scheme'], [{
      name: 'cell_size',
      config: {
        type: 'TextControl',
        isInt: true,
        default: 10,
        validators: [_core.legacyValidateInteger],
        renderTrigger: true,
        label: (0, _core.t)('Cell Size'),
        description: (0, _core.t)('The size of the square cell, in pixels')
      }
    }, {
      name: 'cell_padding',
      config: {
        type: 'TextControl',
        isInt: true,
        validators: [_core.legacyValidateInteger],
        renderTrigger: true,
        default: 2,
        label: (0, _core.t)('Cell Padding'),
        description: (0, _core.t)('The distance between cells, in pixels')
      }
    }], [{
      name: 'cell_radius',
      config: {
        type: 'TextControl',
        isInt: true,
        validators: [_core.legacyValidateInteger],
        renderTrigger: true,
        default: 0,
        label: (0, _core.t)('Cell Radius'),
        description: (0, _core.t)('The pixel radius')
      }
    }, {
      name: 'steps',
      config: {
        type: 'TextControl',
        isInt: true,
        validators: [_core.legacyValidateInteger],
        renderTrigger: true,
        default: 10,
        label: (0, _core.t)('Color Steps'),
        description: (0, _core.t)('The number color "steps"')
      }
    }], ['y_axis_format', {
      name: 'x_axis_time_format',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Time Format'),
        renderTrigger: true,
        default: 'smart_date',
        choices: _core.D3_TIME_FORMAT_OPTIONS,
        description: _core.D3_FORMAT_DOCS
      }
    }], [{
      name: 'show_legend',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Legend'),
        renderTrigger: true,
        default: true,
        description: (0, _core.t)('Whether to display the legend (toggles)')
      }
    }, {
      name: 'show_values',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Show Values'),
        renderTrigger: true,
        default: false,
        description: (0, _core.t)('Whether to display the numerical values within the cells')
      }
    }], [{
      name: 'show_metric_name',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Show Metric Names'),
        renderTrigger: true,
        default: true,
        description: (0, _core.t)('Whether to display the metric name as a title')
      }
    }, null]]
  }],
  controlOverrides: {
    y_axis_format: {
      label: (0, _core.t)('Number Format')
    }
  }
};
exports.default = _default;