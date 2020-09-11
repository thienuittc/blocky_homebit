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
Blockly.Blocks["block_sound"] = {
  init: function() {
    this.jsonInit(
    {
  "type": "block_led7",
  "message0": "tạo màn hình led 7 đoạn cổng %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "A",
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
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}
    );
  }
};

Blockly.Python['block_led7'] = function(block) {
  var dropdown_a = block.getFieldValue('A');
  // TODO: Assemble Python into code variable.
  //tm = tm1637.TM1637(clk=Pin(pin0.pin), dio=Pin(pin10.pin))
  var code = '...\n';
  return code;
};
