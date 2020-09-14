Blockly.Blocks["block_sound"] = {
  init: function() {
    this.jsonInit({
      type: "block_sound",
      message0: "phát hiện tiếng động ở cảm biến âm thanh %1",
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        }
      ],
      output: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};
Blockly.Python["block_sound"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + ".read_analog()>1000";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_flipled"] = {
  init: function() {
    this.jsonInit({
      type: "block_flipled",
      message0: "%1 đèn %2",
      args0: [
        {
          type: "field_dropdown",
          name: "action",
          options: [
            ["bật", "1"],
            ["tắt", "0"],
            ["đảo trạng thái", "3"]
          ]
        },
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["block_flipled"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_action = block.getFieldValue("action");
  var dropdown_name = block.getFieldValue("NAME");
  
  // TODO: Assemble Python into code variable.
  var code;
  if (dropdown_action == 3)
  code = dropdown_name+".write_digital(1-"+dropdown_name+".read_digital())\n";
  else
    code = dropdown_name+".write_digital("+dropdown_action+")\n";
  return code;
};

Blockly.Blocks["block_rotary"] = {
  init: function() {
    this.jsonInit({
      type: "block_rotary",
      message0: "đọc vị trí biến trở xoay %1",
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        }
      ],
      output: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["block_rotary"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = "round(("+dropdown_name + ".read_analog()/4 -1)/10.23)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_light_sensor"] = {
  init: function() {
    this.jsonInit({
      type: "block_light_sensor",
      message0: "đọc cảm biến ánh sáng %1",
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        }
      ],
      output: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["block_light_sensor"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = "round(("+dropdown_name + ".read_analog()/4 -1)/10.23)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_led_home"] = {
  init: function() {
    this.jsonInit({
      type: "block_led_home",
      message0: "điều chỉnh độ sáng đèn %1 %2 %%",
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        },
        {
          type: "input_value",
          name: "state",
          align: "RIGHT"
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["block_led_home"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  var value_name = Blockly.Python.valueToCode(
    block,
    "state",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + ".write_analog(round(" + value_name + "*10.23))\n";
  return code;
};

Blockly.Blocks["block_motor"] = {
  init: function() {
    this.jsonInit({
      type: "block_motor",
      message0: "%1 quạt %2",
      args0: [
        {
          type: "field_dropdown",
          name: "action",
          options: [
            ["bật", "1"],
            ["tắt", "0"]
          ]
        },
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["block_motor"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_action = block.getFieldValue("action");
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + ".write_digital((" + dropdown_action + "))\n";
  return code;
};

Blockly.Blocks["block_microswitch"] = {
  init: function() {
    this.jsonInit({
      type: "block_microswitch",
      message0: "đọc trạng thái cảm biến va chạm %1",
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        }
      ],
      output: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};
Blockly.Python["block_microswitch"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + ".read_digital()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_PIR"] = {
  init: function() {
    this.jsonInit({
      type: "block_PIR",
      message0: "đọc trạng thái cảm biến chuyển động %1",
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        }
      ],
      output: "Boolean",
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["block_PIR"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + ".read_digital()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_light"] = {
  init: function() {
    this.jsonInit({
      type: "block_light",
      message0: "đọc cảm biến ánh sáng %1",
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        }
      ],
      output: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};
Blockly.Python["block_light"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + ".read_analog()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly.Blocks['block_stringtonumber'] = {
//   init: function() {
//     this.jsonInit(
//       {

//       }
//     );
//   }
// };
Blockly.Blocks["block_dht_create"] = {
 
  init: function() {
    this.jsonInit({
      type: "block_dht_create",
      message0: "tạo %1 %2",
      args0: [
        {
          type: "field_variable",
          name: "cambiennhietdo",
          variable: "cảm biến nhiệt độ & độ ẩm"
        },
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"]
          ]
        }
      ],
      inputsInline: false,
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Blocks["block_dht_measure"] = {
  init: function() {
    this.jsonInit({
      message0: "cập nhật %1",
      args0: [
        {
          type: "field_variable",
          name: "cambiennhietdo",
          variable: "cảm biến nhiệt độ & độ ẩm"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Blocks["block_dht_read"] = {
  init: function() {
    this.jsonInit({
      message0: "đọc %2 từ %1",
      args0: [
        {
          type: "field_variable",
          name: "cambiennhietdo",
          variable: "cảm biến nhiệt độ & độ ẩm"
        },
        {
          type: "field_dropdown",
          name: "DATA",
          options: [
            ["nhiệt độ", "TEMP"],
            ["độ ẩm", "HUMID"]
          ]
        }
      ],
      output: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};


// Blockly.Python["dht_create"] = function(block) {
//   var variable_sensor = Blockly.Python.variableDB_.getName(
//     block.getFieldValue("SENSOR"),
//     Blockly.Variables.NAME_TYPE
//   );
//   var dropdown_type = "DHT11";
//   var dropdown_pin = block.getFieldValue("PIN");
//   // TODO: Assemble Python into code variable.
//   Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
//   Blockly.Python.definitions_["import_dht"] = "import dht";
//   var code =
//     variable_sensor +
//     " = dht." +
//     dropdown_type +
//     "(Pin(" +
//     dropdown_pin +
//     ".pin))\n";
//   return code;
// };
Blockly.Python["block_dht_create"] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(
    block.getFieldValue("cambiennhietdo"),
    Blockly.Variables.NAME_TYPE
  );
  var dropdown_port = block.getFieldValue("port");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_dht"] = "import dht";
  Blockly.Python.definitions_["import_time"] = "import time";
  var code =
    variable_sensor + " = dht.DHT11" + "(Pin(" + dropdown_port + ".pin))\n";
  return code;
};

// DHT measure

Blockly.Python["block_dht_measure"] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(
    block.getFieldValue("cambiennhietdo"),
    Blockly.Variables.NAME_TYPE
  );
  // TODO: Assemble Python into code variable.
  var code = variable_sensor + ".measure()\ntime.sleep_ms(900)\n";
  return code;
};

// //DHT read

Blockly.Python["block_dht_read"] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(
    block.getFieldValue("cambiennhietdo"),
    Blockly.Variables.NAME_TYPE
  );
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  var code = "";
  if (dropdown_data == "TEMP") code = variable_sensor + ".temperature()";
  else code = variable_sensor + ".humidity()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_touchpad_istouch"] = {
  init: function() {
    this.jsonInit({
      type: "block_touchpad_istouch",
      message0: "kiểm tra phím %1 được chạm",
      args0: [
        {
          type: "input_value",
          name: "TEXT"
        }
      ],
      output: "Boolean",
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["block_touchpad_istouch"] = function(block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "TEXT",
    Blockly.Python.ORDER_ATOMIC
  );
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, I2C";
  Blockly.Python.definitions_["import_mpr121"] = "from keypad121 import MPR121";
  Blockly.Python.definitions_["import_keypad"] =
    "keypad = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))";
  // TODO: Assemble Python into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  // mpr.is_touched(key)
  var code = "keypad.is_touched(" + value_text + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_readkeypad"] = {
  init: function() {
    this.jsonInit({
      "type": "block_readkeypad",
      "message0": "đọc các phím đã bấm",
      "inputsInline": true,
      "output": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Python['block_readkeypad'] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, I2C";
  Blockly.Python.definitions_["import_mpr121"] = "from keypad121 import MPR121";
  Blockly.Python.definitions_["import_keypad"] = "keypad = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))";
  // TODO: Assemble Python into code variable.
  var code = 'list_key';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_checkkeypad"] = {
  init: function() {
    this.jsonInit({
      type: "block_checkkeypad",
      message0: "kiểm tra bàm phím",
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "",
      helpUrl: ""
    });
  }
};
Blockly.Python["block_checkkeypad"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, I2C";
  Blockly.Python.definitions_["import_mpr121"] = "from keypad121 import MPR121";
  Blockly.Python.definitions_["import_keypad"] = "keypad = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))";
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["create_listkey"] = "list_key = ''";
  var code ="if keypad.check_keypad() != 12:\n  list_key = list_key+str(keypad.check_keypad())\n  while keypad.check_keypad()!=12:\n   pass\n";
  return code;
};

Blockly.Blocks["block_clearlistkey"] = {
  init: function() {
    this.jsonInit({
      "type": "block_clearlistkey",
      "message0": "xóa các phím đã bấm",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Python['block_clearlistkey'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'list_key = ""\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


// Blockly.Blocks['block_home_servo'] = {
//   init: function() {
//     this.jsonInit(
//       {
//         "type": "block_home_servo",
//         "message0": "quay servo chân %1 góc (0-180 độ) %2",
//         "args0": [
//           {
//             "type": "field_dropdown",
//             "name": "port",
//             "options": [
//               [
//                 "P0",
//                 "pin0"
//               ],
//               [
//                 "P1",
//                 "pin1"
//               ],
//               [
//                 "P2",
//                 "pin2"
//               ],
//               [
//                 "P3",
//                 "Pin3"
//               ]
//             ]
//           },
//           {
//             "type": "input_value",
//             "name": "gocservo"
//           }
//         ],
//         "colour": 180,
//         "tooltip": "",
//         "helpUrl": ""
//       }
//     );
//   }
// };
// Blockly.JavaScript['block_home_servo'] = function(block) {
//   var dropdown_port = block.getFieldValue('port');
//   var value_goc = Blockly.JavaScript.valueToCode(block, 'gocservo', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = dropdown_port+'.servo_write('+value_goc+');\n';
//   return code;
// };
Blockly.Blocks["block_led7"] = {
  init: function() {
    this.jsonInit({
  "type": "block_led7",
  "message0": "tạo %1 cổng %2",
  "args0": [
    {
          type: "field_variable",
          name: "led7doan",
          variable: "màn hình led 7 đoạn"
    },
    {
      "type": "field_dropdown",
      "name": "A",
      "options": [
        [
          "P0/10",
          "pin0"
        ],
        [
          "P1/11",
          "pin1"
        ],
        [
          "P2/13",
          "pin2"
        ],
        [
          "P3/14",
          "pin3"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
});
  }
};


Blockly.Python['block_led7'] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(
    block.getFieldValue("led7doan"),
    Blockly.Variables.NAME_TYPE
  );
  Blockly.Python.definitions_["import_tm1637"] = "import tm1637";
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  
  var dropdown_a = block.getFieldValue('A');
  // TODO: Assemble Python into code variable.
  
  switch(dropdown_a){
    case 'pin0':
      var code = variable_sensor+ '= tm1637.TM1637(clk=Pin(pin0.pin), dio=Pin(pin10.pin))\n';
      break;
    case 'pin1':
      var code = variable_sensor+ ' = tm1637.TM1637(clk=Pin(pin1.pin), dio=Pin(pin11.pin))\n';
      break;
    case 'pin2':
      var code = variable_sensor+ ' = tm1637.TM1637(clk=Pin(pin2.pin), dio=Pin(pin13.pin))\n';
      break;
    case 'pin3':
      var code = variable_sensor+ ' = tm1637.TM1637(clk=Pin(pin3.pin), dio=Pin(pin14.pin))\n';
      break;
  }
  //tm = tm1637.TM1637(clk=Pin(pin0.pin), dio=Pin(pin10.pin))
  //var code = '...\n';
  return code;
};

Blockly.Blocks["block_led7_show"] = {
  init: function() {
    this.jsonInit({
  "type": "block_led7_show",
  "message0": "%1 in ra %2",
  "args0": [
    {
          type: "field_variable",
          name: "led7doan",
          variable: "màn hình led 7 đoạn"
    },
    {
      "type": "input_value",
      "name": "A"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
});
  }
};

Blockly.Python['block_led7_show'] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(
    block.getFieldValue("led7doan"),
    Blockly.Variables.NAME_TYPE
  );
  var value_text = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var code = variable_sensor+'.show('+value_text+')\n'
  return code;
};

/////

Blockly.Blocks['homebit_ultrasonic_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "homebit_ultrasonic_create",
        "message0": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "ultrasonic_sensor",
            "variable": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE1
          },
          {
            "type": "field_dropdown",
            "name": "TRG",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "ECH",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 180,
        "tooltip": Blockly.Msg.ULTRASONIC_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_CREATE_HELPURL
      }
    );
  }
};

Blockly.Python['homebit_ultrasonic_create'] = function(block) {
  var variable_ultrasonic_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('ultrasonic_sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_trg = block.getFieldValue('TRG');
  var dropdown_ech = block.getFieldValue('ECH');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_ultrasonic'] = 'from hcsr04 import HCSR04';
  var code = variable_ultrasonic_sensor + ' = HCSR04(trigger_pin=' + dropdown_trg + '.pin, echo_pin=' + dropdown_ech + '.pin)\n';
  return code;
};

Blockly.Blocks['homebit_ultrasonic_read'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "homebit_ultrasonic_read",
        "message0": Blockly.Msg.ULTRASONIC_READ_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "ultrasonic_sensor",
            "variable": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE1
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": null,
        "colour": 180,
        "tooltip": Blockly.Msg.ULTRASONIC_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_READ_HELPURL
      }
    );
  }
};

Blockly.Python['homebit_ultrasonic_read'] = function(block) {
  var variable_ultrasonic_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('ultrasonic_sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM') {
    code = variable_ultrasonic_sensor + '.distance_cm()';
  } else {
    code = variable_ultrasonic_sensor + '.distance_mm()';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['homebit_ultrasonic_checkdistance'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "homebit_ultrasonic_checkdistance",
        "message0": Blockly.Msg.ULTRASONIC_CHECK_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "ultrasonic_sensor",
            "variable": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "DISTANCE",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": 180,
        "tooltip": Blockly.Msg.ULTRASONIC_CHECK_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_CHECK_HELPURL
      }
    );
  }
};

Blockly.Python['homebit_ultrasonic_checkdistance'] = function(block) {
  var variable_ultrasonic_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('ultrasonic_sensor'), Blockly.Variables.NAME_TYPE);
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM')
    code = variable_ultrasonic_sensor + '.distance_cm() < ' + value_distance;
  else
    code = variable_ultrasonic_sensor + '.distance_mm()' + value_distance;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
