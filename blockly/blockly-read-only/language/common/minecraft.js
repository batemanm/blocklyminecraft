'use strict';

//Blockly.Language.minecraft_blocktype = {
//  init: function() {
//	this.setColor(65);
//    this.appendDummyInput()
//        .appendTitle(blockType, "BLOCKTYPE");
//    this.setOutput(true);
//    this.setTooltip('');
//  }
//};


// set block function
Blockly.Language.minecraft_setblock = {
  init: function() {
    this.setColour(65);
    this.appendValueInput('X')
        .setCheck("Number")
	.appendTitle('set block')
	.appendTitle ('x');
    this.appendValueInput('Y')
        .setCheck("Number")
	.appendTitle ('y');

    this.appendValueInput('Z')
        .setCheck("Number")
	.appendTitle ('z');

    this.appendDummyInput()
	.appendTitle ('type')
        .appendTitle(new Blockly.FieldDropdown(
[["Air", "block.AIR"],
["Stone", "block.STONE"],
["Grass", "block.GRASS"],
["Dirt", "block.DIRT"],
//["Cobblestone", "block.COBBLESTONE"],
//["Wood planks", "block.WOOD_PLANKS"],
//["Sapling", "block.SAPLING"],
["Bedrock", "block.BEDROCK"],
//["Water flowing", "block.WATER_FLOWING"],
["Water", "block.WATER"],
//["Water sationary", "block.WATER_STATIONARY"],
//["Lava flowing", "block.LAVA_FLOWING"],
["Lava", "block.LAVA"],
//["Lava stationary", "block.LAVA_STATIONARY"],
["Sand", "block.SAND"],
//["Gravel", "block.GRAVEL"],
//["Gold ore", "block.GOLD_ORE"],
//["Iron ore", "block.IRON_ORE"],
//["Coal ore", "block.COAL_ORE"],
["Wood", "block.WOOD"],
//["Leaves", "block.LEAVES"],
["Glass", "block.GLASS"],
//["Lapis Lazuli ore", "block.LAPIS_LAZULI_ORE"],
//["Lapis Lazuli", "block.LAPIS_LAZULI_BLOCK"],
["Sandstone", "block.SANDSTONE"],
//["Bed", "block.BED"],
//["Cobweb", "block.COBWEB"],
//["Grass tall", "block.GRASS_TALL"],
//["Wool", "block.WOOL"],
//["Flower yellow", "block.FLOWER_YELLOW"],
//["Flower cyan", "block.FLOWER_CYAN"],
//["Mushroom brown", "block.MUSHROOM_BROWN"],
//["Mushroom red", "block.MUSHROOM_RED"],
//["Gold", "block.GOLD_BLOCK"],
//["Iron", "block.IRON_BLOCK"],
//["Double stone slab", "block.STONE_SLAB_DOUBLE"],
["Stone slab", "block.STONE_SLAB"],
["Brick", "block.BRICK_BLOCK"],
//["TNT", "block.TNT"],
//["Bookshelf", "block.BOOKSHELF"],
//["Moss stone", "block.MOSS_STONE"],
//["Obsidian", "block.OBSIDIAN"],
["Torch", "block.TORCH"],
//["Fire", "block.FIRE"],
["Stairs wood", "block.STAIRS_WOOD"],
//["Chest", "block.CHEST"],
//["Diamond ore", "block.DIAMOND_ORE"],
["Diamond", "block.DIAMOND_BLOCK"],
//["Crafting table", "block.CRAFTING_TABLE"],
//["Farmland", "block.FARMLAND"],
//["Furnace off", "block.FURNACE_INACTIVE"],
//["Furnace on", "block.FURNACE_ACTIVE"],
["Wood door", "block.DOOR_WOOD"],
["Ladder", "block.LADDER"],
//["Cobblestone stairs", "block.STAIRS_COBBLESTONE"],
//["Iron door", "block.DOOR_IRON"],
//["Redstone ore", "block.REDSTONE_ORE"],
//["Snow", "block.SNOW"],
["Ice", "block.ICE"],
//["Snow block", "block.SNOW_BLOCK"],
//["Cactus", "block.CACTUS"],
//["Clay", "block.CLAY"],
//["Sugarcane", "block.SUGAR_CANE"],
["Fence", "block.FENCE"],
//["Glowstone", "block.GLOWSTONE_BLOCK"],
//["Bedrock invisible", "block.BEDROCK_INVISIBLE"],
["Stone brick", "block.STONE_BRICK"],
//["Glass pane", "block.GLASS_PANE"],
//["Melon", "block.MELON"],
["Fence gate", "block.FENCE_GATE"]
//["Glowing obsidian", "block.GLOWING_OBSIDIAN"],
//["Nether reactor core", "block.NETHER_REACTOR_CORE"]
]), "type");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.FieldColour.COLOURS = [
	"#DDDDDD", // while
	"#DB7D3E", // orange
	"#B350BC", // magenta
	"#6B8AC9", // light blue
	"#B1A627", // yellow
	"#41AE38", // lime
	"#D08499", // pink
	"#404040", // gray
	"#9AA1A1", // light gray
	"#2E6E89", // cyan
	"#7E3DB5", // purple
	"#2E388D", // blue
	"#4F321F", // brown
	"#35461B", // green
	"#963430", // red
	"#191616" // black
];

Blockly.FieldColour.COLUMNS = 8;


Blockly.Language.minecraft_setblockwithcolour = {
  init: function() {
    this.setColour(65);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendTitle("set block")
        .appendTitle("x");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendTitle("y");
    this.appendValueInput("Z")
        .setCheck("Number")
        .appendTitle("z");
    this.appendDummyInput()
        .appendTitle("colour")
        .appendTitle(new Blockly.FieldColour("#963430"), "COLOUR");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Language.minecraft_setblocks = {
  init: function() {
    this.setColour(65);
    this.appendValueInput('X')
        .setCheck("Number")
	.appendTitle('set blocks')
	.appendTitle ('x');
    this.appendValueInput('Y')
        .setCheck("Number")
	.appendTitle ('y');

    this.appendValueInput('Z')
        .setCheck("Number")
	.appendTitle ('z');

    this.appendValueInput('X2')
        .setCheck("Number")
	.appendTitle ('x2');
    this.appendValueInput('Y2')
        .setCheck("Number")
	.appendTitle ('y2');

    this.appendValueInput('Z2')
        .setCheck("Number")
	.appendTitle ('z2');

    this.appendDummyInput()
	.appendTitle ('type')
        .appendTitle(new Blockly.FieldDropdown(
[["Air", "block.AIR"],
["Stone", "block.STONE"],
["Grass", "block.GRASS"],
["Dirt", "block.DIRT"],
//["Cobblestone", "block.COBBLESTONE"],
//["Wood planks", "block.WOOD_PLANKS"],
//["Sapling", "block.SAPLING"],
["Bedrock", "block.BEDROCK"],
//["Water flowing", "block.WATER_FLOWING"],
["Water", "block.WATER"],
//["Water sationary", "block.WATER_STATIONARY"],
//["Lava flowing", "block.LAVA_FLOWING"],
["Lava", "block.LAVA"],
//["Lava stationary", "block.LAVA_STATIONARY"],
["Sand", "block.SAND"],
//["Gravel", "block.GRAVEL"],
//["Gold ore", "block.GOLD_ORE"],
//["Iron ore", "block.IRON_ORE"],
//["Coal ore", "block.COAL_ORE"],
["Wood", "block.WOOD"],
//["Leaves", "block.LEAVES"],
["Glass", "block.GLASS"],
//["Lapis Lazuli ore", "block.LAPIS_LAZULI_ORE"],
//["Lapis Lazuli", "block.LAPIS_LAZULI_BLOCK"],
["Sandstone", "block.SANDSTONE"],
//["Bed", "block.BED"],
//["Cobweb", "block.COBWEB"],
//["Grass tall", "block.GRASS_TALL"],
//["Wool", "block.WOOL"],
//["Flower yellow", "block.FLOWER_YELLOW"],
//["Flower cyan", "block.FLOWER_CYAN"],
//["Mushroom brown", "block.MUSHROOM_BROWN"],
//["Mushroom red", "block.MUSHROOM_RED"],
//["Gold", "block.GOLD_BLOCK"],
//["Iron", "block.IRON_BLOCK"],
//["Double stone slab", "block.STONE_SLAB_DOUBLE"],
["Stone slab", "block.STONE_SLAB"],
["Brick", "block.BRICK_BLOCK"],
//["TNT", "block.TNT"],
//["Bookshelf", "block.BOOKSHELF"],
//["Moss stone", "block.MOSS_STONE"],
//["Obsidian", "block.OBSIDIAN"],
["Torch", "block.TORCH"],
//["Fire", "block.FIRE"],
["Stairs wood", "block.STAIRS_WOOD"],
//["Chest", "block.CHEST"],
//["Diamond ore", "block.DIAMOND_ORE"],
["Diamond", "block.DIAMOND_BLOCK"],
//["Crafting table", "block.CRAFTING_TABLE"],
//["Farmland", "block.FARMLAND"],
//["Furnace off", "block.FURNACE_INACTIVE"],
//["Furnace on", "block.FURNACE_ACTIVE"],
["Wood door", "block.DOOR_WOOD"],
["Ladder", "block.LADDER"],
//["Cobblestone stairs", "block.STAIRS_COBBLESTONE"],
//["Iron door", "block.DOOR_IRON"],
//["Redstone ore", "block.REDSTONE_ORE"],
//["Snow", "block.SNOW"],
["Ice", "block.ICE"],
//["Snow block", "block.SNOW_BLOCK"],
//["Cactus", "block.CACTUS"],
//["Clay", "block.CLAY"],
//["Sugarcane", "block.SUGAR_CANE"],
["Fence", "block.FENCE"],
//["Glowstone", "block.GLOWSTONE_BLOCK"],
//["Bedrock invisible", "block.BEDROCK_INVISIBLE"],
["Stone brick", "block.STONE_BRICK"],
//["Glass pane", "block.GLASS_PANE"],
//["Melon", "block.MELON"],
["Fence gate", "block.FENCE_GATE"]
//["Glowing obsidian", "block.GLOWING_OBSIDIAN"],
//["Nether reactor core", "block.NETHER_REACTOR_CORE"]
                                                ]), "type");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

// post to chat function
Blockly.Language.minecraft_posttochat = {
	init: function() {
		this.setColour(65);
		this.appendValueInput("TEXT")
			.appendTitle ("post to chat");
//			.setCheck("String");
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

// get player X
Blockly.Language.minecraft_playerx = {
  init: function() {
	this.appendDummyInput ()
	.appendTitle ("playerX");
    this.setColour(65);
    this.setOutput(true);
    this.setTooltip('');
  }
};

// get player Y
Blockly.Language.minecraft_playery = {
  init: function() {
	this.appendDummyInput ()
	.appendTitle ("playerY");
    this.setColour(65);
    this.setOutput(true);
    this.setTooltip('');
  }
};

// get player Z
Blockly.Language.minecraft_playerz = {
  init: function() {
	this.appendDummyInput ()
	.appendTitle ("playerZ");
    this.setColour(65);
    this.setOutput(true);
    this.setTooltip('');
  }
};

// set player position
Blockly.Language.minecraft_setplayerposition = {
  init: function() {
    this.setColour(65);
    this.appendValueInput('X')
	.appendTitle('playerPosition')
	.appendTitle ('x');
    this.appendValueInput('Y')
	.appendTitle ('y');
    this.appendValueInput('Z')
	.appendTitle ('z');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Language.time_wait = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendTitle("wait");
    this.appendValueInput("time")
        .setCheck("Number");
    this.appendDummyInput()
        .appendTitle("secs");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Language.minecraft_start = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldImage('http://www.gstatic.com/codesite/ph/images/star_on.gif', 15, 15))
        .appendTitle("Start");
    this.appendStatementInput("STATEMENTS");
  }
};

Blockly.Language.minecraft_isplayerposition = {
  init: function() {
    this.setColour(120); 
    this.appendDummyInput()
        .appendTitle("is player at");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendTitle("x");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendTitle("y");
    this.appendValueInput("Z")
        .setCheck("Number")
        .appendTitle("z");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
  } 
};


