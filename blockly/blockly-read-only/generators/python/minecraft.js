Blockly.Python = Blockly.Generator.get ('Python');

Blockly.Python.minecraft_blocktype = function() {
  var dropdown_name = this.getTitleValue('BLOCKTYPE');
  // TODO: Assemble Python into code variable.
  var code = 'dropdown_name';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// setblock function
Blockly.Python.minecraft_setblocks = function() {
  var value_x = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(this, 'Z', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(this, 'X2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(this, 'Y2', Blockly.Python.ORDER_ATOMIC);
  var value_z2 = Blockly.Python.valueToCode(this, 'Z2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = this.getTitleValue('type');
  // TODO: Assemble Python into code variable.
  var code = 'mc.setBlocks (' + value_x + ', ' + value_y + ', ' + value_z + ', ' +value_x2 + ', ' + value_y2 + ', ' + value_z2 + ', ' + dropdown_type +')\n';
  return code;
};

Blockly.Python.minecraft_setblock = function() {
  var value_x = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(this, 'Z', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = this.getTitleValue('type');
  // TODO: Assemble Python into code variable.
  var code = 'mc.setBlock (' + value_x + ', ' + value_y + ', ' + value_z + ', ' + dropdown_type +')\n';
  return code;
};

Blockly.Python.minecraft_posttochat = function() {
  var value_text = Blockly.Python.valueToCode(this, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mc.postToChat (' + value_text + ')\n'
  return code;
};

// player x
Blockly.Python.minecraft_playerx = function() {
  var code = 'int(mc.player.getPos ().x)'
  return [code, Blockly.Python.ORDER_NONE];
};

// player y
Blockly.Python.minecraft_playery = function() {
  var code = 'int(mc.player.getPos ().y)'
  return [code, Blockly.Python.ORDER_NONE];
};

// player z
Blockly.Python.minecraft_playerz = function() {
  var code = 'int(mc.player.getPos ().z)'
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.minecraft_setplayerposition = function() {
  var value_x = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(this, 'Z', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.setPos (' + value_x + ', ' + value_y + ', ' + value_z + ')\n';
  return code;
};

Blockly.Python.time_wait = function() {
  var value_time = Blockly.Python.valueToCode(this, 'time', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep (' + value_time +')\n'
  return code;
};

Blockly.Python.minecraft_setblockwithcolour = function() {
  var value_x = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(this, 'Z', Blockly.Python.ORDER_ATOMIC);
  var colour_colour = this.getTitleValue('COLOUR');
  // TODO: Assemble Python into code variable.

  var colour = 0;
  for (var i = 0; i < Blockly.FieldColour.COLOURS.length; i++) {
	if (colour_colour.toLowerCase() === Blockly.FieldColour.COLOURS[i].toLowerCase ()) {
		colour = i;
	}
  }
  
  var code = 'mc.setBlock (' + value_x + ', ' + value_y + ', ' + value_z + ', block.WOOL.id, ' + colour +')\n';
  return code;
};

Blockly.Python.minecraft_start = function() {
  var statements_statements = Blockly.Python.statementToCode(this, 'STATEMENTS');
  // TODO: Assemble Python into code variable.
  var funcName = Blockly.Python.variableDB_.getName("_minecraftStartProcedure",
      Blockly.Procedures.NAME_TYPE);
  var globalVars = Blockly.Variables.allVariables(this);
  globals = '  global mc'
  for (var i = globalVars.length - 1; i >= 0; i--) {
    globals = globals + ', ' + globalVars[i];
  }
  globals = globals + "\n"


  var funcNumber = 0;
  while (Blockly.Python.definitions_[funcName + funcNumber] != undefined) {
    funcNumber ++;
  }

  statements_statements = statements_statements + "t = threading.Thread(target=" + funcName + funcNumber + ")\nt.start()"
  var code = 'def ' + funcName + funcNumber + '():\n' +
      globals + 
      statements_statements;
  code = Blockly.Python.scrub_(this, code);
  Blockly.Python.definitions_[funcName + funcNumber] = code;
  return null;
};

Blockly.Python.minecraft_isplayerposition = function() {
  var value_x = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(this, 'Z', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '(int(mc.player.getPos ().x) == ' + value_x + ') and (int(mc.player.getPos ().y) == ' + value_y + ') and (int(mc.player.getPos().z) == ' + value_z + ')'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

